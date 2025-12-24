export type Article = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  date: string; // ISO string or simple display string for now
  body: string;
};

export const articles: Article[] = [
  {
    slug: "boring-systems-win",
    title: "Boring Systems Win",
    summary: "Start with constraints, ship something reliable, then add sophistication only if it pays off.",
    tags: ["architecture", "engineering"],
    date: "2025-12-24",
    body:
      "Write your article here. Keep it short for now. Later you can switch to MDX/Markdown.",
  },
];
