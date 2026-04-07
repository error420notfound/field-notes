export interface Signal {
  slug: string;
  title: string;
  source: string;
  author: string;
  url: string;
  date: string;       // YYYY-MM-DD
  signal: string;     // one-line thesis
  summary: string;
  notes: string[];
  context: string;
  tags: string[];
}

export const signals: Signal[] = [
  {
    slug: "designing-for-trust-is-designing-for-risk",
    title: "Designing for Trust is Designing for Risk",
    source: "YouTube",
    author: "Design Docs",
    url: "https://www.youtube.com/watch?v=bmiF3mcms1Q",
    date: "2026-04-07",
    signal: "Trust in product UX is not built through polish—it's built through how systems handle uncertainty, errors, and edge cases.",
    summary: "Trust is not a UI layer—it's a system property. It's shaped most strongly in moments of failure, ambiguity, and recovery.",
    notes: [
      "Most products over-invest in happy paths; trust is actually formed in edge cases",
      "Error states, retries, loading states are primary trust surfaces",
      "Systems that explain what's happening outperform those that just look reliable",
      "Transparency beats polish in long-term retention",
    ],
    context: "Applies to payment flows, device interactions, and async systems. Reframes UX from interface design to system behavior design.",
    tags: ["trust-design", "ux-systems", "risk", "error-states"],
  },
];
