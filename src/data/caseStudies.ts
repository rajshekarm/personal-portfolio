export type BlogType = "Professional" | "Personal" | "OSS" | "Contract";

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  type: BlogType;
  summary: string;
  architecture: string;
  tech: string[];
  externalLink?: string;

  // detail content (simple for now)
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "distributed-trading-infrastructure",
    title: "Distributed Trading Infrastructure",
    company: "SS&C Eze",
    type: "Professional",
    summary:
      "Redesigned critical trading workflows with distributed microservices; improved consistency across high-concurrency systems.",
    architecture: "Event-driven microservices with CQRS for low-latency execution.",
    tech: ["C#", ".NET Core", "gRPC", "Kafka", "SQL Server"],
    externalLink: "https://www.ezesoft.com/solutions/eze-eclipse-overview",
    sections: [
      { heading: "Problem", body: "Describe the system + what was broken / slow / risky." },
      { heading: "Constraints", body: "Latency, correctness, reliability, team/process constraints." },
      { heading: "Design", body: "CQRS, eventing, boundaries, data flow, failure modes." },
      { heading: "Tradeoffs", body: "What you chose not to do and why." },
      { heading: "Outcome", body: "Results (safe to share). What improved and how you measured it." },
    ],
  },
  {
    slug: "multimodal-ai-platform",
    title: "Multimodal AI Platform",
    company: "Fashion AI",
    type: "Professional",
    summary:
      "Built backend infrastructure integrating LLM + diffusion pipelines into production with async GPU workloads.",
    architecture: "Asynchronous GPU task queue for real-time generative image processing.",
    tech: ["Python", "PyTorch", "CLIP", "Diffusion", "FastAPI"],
    externalLink: "https://www.faishion.ai/",
    sections: [
      { heading: "Problem", body: "What the platform needed to do end-to-end." },
      { heading: "Constraints", body: "GPU cost, throughput, latency, retries, observability." },
      { heading: "Design", body: "Queue, workers, job model, storage, safety checks." },
      { heading: "Tradeoffs", body: "Quality vs cost; sync vs async; batching decisions." },
      { heading: "Outcome", body: "What got faster/cheaper/more reliable." },
    ],
  },
  {
    slug: "kshanax-investment-tech",
    title: "Kshanax AI - Investment Tech",
    company: "Founding Engineer",
    type: "Personal",
    summary:
      "Architecting a high-performance investment platform using clean boundaries to bridge financial data with AI insights.",
    architecture: "DDD + modular services with a focus on data integrity and maintainability.",
    tech: ["React", ".NET", "PostgreSQL", "OpenAI API"],
    externalLink: "https://kshana-x-ui.vercel.app/",
    sections: [
      { heading: "Problem", body: "What users need; what data sources exist." },
      { heading: "Constraints", body: "Data integrity, auditability, iteration speed." },
      { heading: "Design", body: "Bounded contexts, domain model, API seams, UI composition." },
      { heading: "Tradeoffs", body: "Where you kept it simple vs optimized." },
      { heading: "Outcome", body: "Current stage + what’s next." },
    ],
  },
];
