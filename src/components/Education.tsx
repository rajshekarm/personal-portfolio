import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

type EducationItem = {
  school: string;
  degree: string;
  location: string;
  dates: string;
  highlights?: string[];
};

const EDUCATION: EducationItem[] = [
  {
    school: "Illinois Institute of Technology",
    degree: "Master’s, Computer Science",
    location: "Chicago, USA",
    dates: "Aug 2023 – May 2025",
    highlights: [
      // optional — add 1–3 items if you want
      // "Coursework: Distributed Systems, Cloud Computing, ML",
    ],
  },
  {
    school: "National Institute of Technology (NIT), Trichy",
    degree: "Bachelor’s, Electronics and Communication Engineering",
    location: "Trichy, India",
    dates: "Aug 2014 – May 2018",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="space-y-10"
        >
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Education
            </h2>
            <p className="text-zinc-400 max-w-2xl leading-relaxed">
              Academic foundation in computer science and engineering, with a focus on building practical,
              production-ready systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {EDUCATION.map((item) => (
              <EducationCard key={item.school} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-zinc-200">
            <GraduationCap className="h-4 w-4 text-zinc-400" />
            <h3 className="font-semibold text-lg leading-tight truncate">{item.school}</h3>
          </div>
          <p className="mt-1 text-sm text-zinc-400">{item.degree}</p>
        </div>

        <div className="shrink-0 text-right text-sm text-zinc-400">
          <div className="flex items-center justify-end gap-2">
            <MapPin className="h-4 w-4 text-zinc-500" />
            <span>{item.location}</span>
          </div>
          <div className="mt-1 flex items-center justify-end gap-2">
            <Calendar className="h-4 w-4 text-zinc-500" />
            <span>{item.dates}</span>
          </div>
        </div>
      </div>

      {item.highlights?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc pl-5">
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
