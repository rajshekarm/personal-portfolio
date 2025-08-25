import { useEffect, useMemo, useRef, useState } from "react";

export type ChatLinkMap = { github?: string; linkedin?: string; email?: string; website?: string };
export type ChatProject = { title: string; blurb?: string; url?: string };
export type ChatMessage = { id: string; from: "bot" | "user"; text: string; ts: number };

export type PersonalChatbotProps = {
  name: string; role: string; avatarUrl?: string; resumeUrl?: string; links?: ChatLinkMap;
  projects?: ChatProject[]; skills?: string[]; education?: string[];
  onHandOff?: (type: "email" | "calendar" | "form") => void;
  asyncLLM?: (history: ChatMessage[]) => Promise<{ reply: string } | { reply: string; metadata?: any }>;
  suggested?: string[]; storageKey?: string;
};

const BOT_HELLO = (name: string) =>
  `Hi! I'm ${name}'s portfolio assistant. Ask about skills, projects, or experience. I can also share the resume or set up contact. You can also type a message directly and it will be sent to ${name}.`;

function cx(...classes: (string | boolean | undefined)[]) { return classes.filter(Boolean).join(" "); }

function useLocalStorage<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    try { const raw = localStorage.getItem(key); return raw ? (JSON.parse(raw) as T) : initial; } catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(state)); } catch {} }, [key, state]);
  return [state, setState] as const;
}
const generateId = () => Math.random().toString(36).slice(2);
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default function PersonalChatbot(props: PersonalChatbotProps) {
  const {
    name, role, avatarUrl, resumeUrl, links, projects = [], skills = [], education = [],
    onHandOff, asyncLLM,
    suggested = ["What are your top skills?","Show me signature projects","Summarize your experience","Can I get your resume?"],
    storageKey = "personal-chatbot-v1",
  } = props;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useLocalStorage<ChatMessage[]>(storageKey, []);
  const [meta, setMeta] = useLocalStorage<{ name?: string }>(`${storageKey}::meta`, {});
  const listRef = useRef<HTMLDivElement>(null);

  const footerRef = useRef<HTMLDivElement>(null);
  const [footerH, setFooterH] = useState(88); // NEW: default padding for footer

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: generateId(), from: "bot", text: BOT_HELLO(name), ts: Date.now() }]);
      setMeta({ name });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (meta?.name && meta.name !== name) {
      setMessages(m => [{ id: generateId(), from: "bot", text: BOT_HELLO(name), ts: Date.now() }, ...m]);
      setMeta({ name });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // NEW: keep messages pane padded so footer never hides content
  useEffect(() => {
    const sync = () => footerRef.current && setFooterH(footerRef.current.offsetHeight);
    sync();
    const ro = new ResizeObserver(sync);
    if (footerRef.current) ro.observe(footerRef.current);
    return () => ro.disconnect();
  }, []);

  const faq = useMemo(
    () => buildFAQ({ name, role, resumeUrl, links, projects, skills, education }),
    [name, role, resumeUrl, links, projects, skills, education]
  );

  async function handleSend(text: string) {
    if (!text.trim() || busy) return;
    const userMsg: ChatMessage = { id: generateId(), from: "user", text: text.trim(), ts: Date.now() };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setBusy(true);

    const local = answerLocally(userMsg.text, faq);
    await delay(350);
    let botText = local ?? defaultFallback();

    if (!local && asyncLLM) {
      try {
        const result = await asyncLLM([...messages, userMsg]);
        if (result && "reply" in result && result.reply) botText = result.reply;
      } catch {
        botText = `${botText}\n\n(Cloud reply unavailable right now; using quick summary instead.)`;
      }
    }

    setMessages(m => [...m, { id: generateId(), from: "bot", text: botText, ts: Date.now() }]);
    setBusy(false);
  }

  const handleQuick = (q: string) => handleSend(q);

  function resetChat() {
    try {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(`${storageKey}::meta`);
    } catch {}
    setMessages([{ id: generateId(), from: "bot" as const, text: BOT_HELLO(name), ts: Date.now() }]);
    setMeta({ name });
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setOpen(v => !v)}
        className={cx(
          "shadow-lg rounded-full p-3 md:p-4 transition active:scale-95",
          "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
          open ? "ring-2 ring-purple-300" : "hover:shadow-xl"
        )}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M2.25 12c0-4.28 3.47-7.75 7.75-7.75h4c4.28 0 7.75 3.47 7.75 7.75s-3.47 7.75-7.75 7.75h-1.22l-3.14 2.35a.75.75 0 01-1.2-.6v-1.75C5.13 18.88 2.25 15.78 2.25 12z" />
        </svg>
      </button>

      {open && (
        <div className="mt-3 w-[92vw] max-w-md bg-white text-gray-900 /* NEW: force text color */
                        backdrop-blur border border-gray-200 rounded-2xl shadow-2xl overflow-hidden
                        flex flex-col max-h-[80vh] h-[min(640px,80vh)]">
          {/* Header */}
          <div className="flex items-center gap-3 p-3 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            {avatarUrl ? (
              <img src={avatarUrl} alt={`${name} avatar`} className="w-9 h-9 rounded-full object-cover" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-purple-500/90 text-white grid place-items-center font-semibold">{name[0]}</div>
            )}
            <div className="flex-1">
              <div className="text-sm font-semibold">{name}'s Assistant</div>
              <div className="text-xs text-gray-500">{role}</div>
            </div>
            <button onClick={resetChat} title="Reset chat" aria-label="Reset chat"
              className="mr-1 rounded-md p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 6V3L8 7l4 4V8a4 4 0 110 8H6v2h6a6 6 0 000-12z" />
              </svg>
            </button>
            <button onClick={() => setOpen(false)} className="rounded-md p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 8.586 4.293 2.879 2.879 4.293 8.586 10l-5.707 5.707 1.414 1.414L10 11.414l5.707 5.707 1.414-1.414L11.414 10l5.707-5.707-1.414-1.414L10 8.586z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-3 space-y-2"
            style={{ paddingBottom: footerH }}
          >
            {messages.map(m => (
                <div key={m.id} className={cx("flex", m.from === "user" ? "justify-end" : "justify-start")}>
                    <div
                    className={cx(
                        "px-3 py-2 rounded-2xl text-sm max-w-[80%] whitespace-pre-wrap",
                        m.from === "user"
                        ? "bg-indigo-600 text-white rounded-br-none"   // ✅ force dark bg + white text
                        : "bg-gray-100 text-gray-900 rounded-bl-none"  // ✅ force light bg + dark text
                    )}
                    >
                    {m.text}
                    </div>
                </div>
                ))}
            {busy && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl text-sm bg-gray-100 text-gray-900 rounded-bl-none">
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          {/* Sticky footer */}
          <div
            ref={footerRef}
            className="sticky bottom-0 bg-white text-gray-900 /* NEW: force bg & text */
                       backdrop-blur border-t border-gray-100 z-10
                       shadow-[0_-10px_18px_-12px_rgba(0,0,0,0.25)]"
          >
            {/* Default questions */}
            {suggested?.length ? (
              <div className="px-3 py-2 flex gap-2 overflow-x-auto scrollbar-thin">
                {suggested.slice(0, 4).map(s => (
                  <button
                    key={s}
                    onClick={() => handleQuick(s)}
                    className="text-xs text-gray-700 /* NEW */ px-2 py-1 rounded-full border border-gray-200
                               hover:bg-gray-50 shrink-0 bg-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}

            {/* Input row */}
            <div className="p-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] flex items-center gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleSend(input); }}
                placeholder="Ask about skills, projects, resume..."
                className="flex-1 text-sm px-3 py-2 rounded-xl border border-purple-200 /* NEW stronger border */
                           focus:outline-none focus:ring-2 focus:ring-purple-200
                           bg-white text-gray-900 placeholder:text-gray-400 caret-indigo-600 selection:bg-indigo-100 /* NEW force colors */"
              />
              <button
                onClick={() => handleSend(input)}
                disabled={busy || input.trim().length === 0}
                className={cx("px-3 py-2 rounded-xl text-sm font-medium text-white",
                  busy || input.trim().length === 0 ? "bg-gray-300" : "bg-indigo-600 hover:bg-indigo-700")}
              >Send</button>
            </div>

            {/* Links */}
            <div className="px-3 pt-2 pb-3 flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-3">
                {resumeUrl && <a href={resumeUrl} className="underline hover:text-gray-800" target="_blank" rel="noreferrer">Resume</a>}
                {links?.github && <a href={links.github} className="underline hover:text-gray-800" target="_blank" rel="noreferrer">GitHub</a>}
                {links?.linkedin && <a href={links.linkedin} className="underline hover:text-gray-800" target="_blank" rel="noreferrer">LinkedIn</a>}
              </div>
              <button onClick={() => onHandOff?.("email")} className="underline hover:text-gray-800">Email me</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TypingDots() {
  return (
    <div className="inline-flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.2s]"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></span>
    </div>
  );
}

function buildFAQ({ name, role, resumeUrl, links, projects, skills, education }:
  { name: string; role: string; resumeUrl?: string; links?: ChatLinkMap; projects: ChatProject[]; skills: string[]; education: string[] }) {
  const bullets = (arr: string[]) => arr.map(s => `• ${s}`).join("\n");
  const projectsText = projects.map(p => `• ${p.title}${p.blurb ? ` — ${p.blurb}` : ""}${p.url ? ` (${p.url})` : ""}`).join("\n");
  const linkLine = [
    links?.github ? `GitHub: ${links.github}` : null,
    links?.linkedin ? `LinkedIn: ${links.linkedin}` : null,
    resumeUrl ? `Resume: ${resumeUrl}` : null,
    links?.email ? `Email: ${links.email}` : null,
  ].filter(Boolean).join("\n");

  return [
    { q: [/resume|cv|download/i], a: () => (resumeUrl ? `Here is the resume link:\n${resumeUrl}` : `I don't have a resume link set yet.`) },
    { q: [/email|contact|reach/i], a: () => linkLine || `You can contact ${name} via the email button below.` },
    { q: [/skills?|stack|tech/i], a: () => `Top skills for ${name} (${role}):\n${bullets(skills.slice(0, 12))}` },
    { q: [/education|degree|school|college|university/i], a: () => `Education:\n${bullets(education)}` },
    { q: [/projects?|portfolio|work/i], a: () => projectsText ? `Signature projects:\n${projectsText}` : `Projects list isn't configured yet.` },
    { q: [/experience|background|summary|about/i], a: () => `Quick summary:\n• ${name} — ${role}\n• Focus: AI/ML, backend systems, computer vision, distributed services\n• Loves building real-world products that blend AI reasoning with clean engineering.` },
    { q: [/github/i], a: () => links?.github ? `GitHub: ${links.github}` : `GitHub link not set.` },
    { q: [/linkedin/i], a: () => links?.linkedin ? `LinkedIn: ${links.linkedin}` : `LinkedIn link not set.` },
    { q: [/availability|interview|call|meet/i], a: () => `Happy to chat! Tap “Email me” below and propose a time that works for you.` },
  ];
}

function answerLocally(input: string, faq: { q: RegExp[]; a: () => string }[]) {
  const text = input.trim();
  for (const item of faq) if (item.q.some(rx => rx.test(text))) return item.a();
  if (/^hi$|^hello$|^hey$|how are you/i.test(text)) return `Hello! Ask me about skills, key projects, experience, or request the resume.`;
  return null;
}

function defaultFallback() {
  return `I might not have a perfect answer for that yet. 

Try asking: 
• What are your top skills?
• Show me signature projects
• Can I get your resume?`;
}
