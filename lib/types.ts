export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  research: string;
  userJourney: string;
  ia: string;
  wireframes: string;
  designExploration: string;
  finalUI: string;
  designSystem: string;
  results: string;
  tags: string[];
  color: string;
  cover: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Tool {
  name: string;
  category: "ai" | "design";
  domain: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}
