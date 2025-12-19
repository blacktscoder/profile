import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Tatenda",
  lastName: "Makandigona",
  name: "Tatenda Mk",
  role: "Backend Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",

  // Human-readable
  location: "America/Los_Angeles",



  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about coding, bugs, and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/blacktscoder",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Backend Engineer`,
  description: `Backend engineering, APIs, and cloud systems by ${person.name}`,
  headline: <>Building scalable backend systems that quietly do the hard work</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Selected work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I’m Tatenda, a backend engineer focused on building reliable APIs,
      data-driven systems, and cloud services that scale.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "#",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tatenda is a backend engineer with a strong focus on designing and building
        scalable, reliable systems. His work centers on APIs, data-driven
        applications, and cloud-native architectures.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MiFitness International",
        timeframe: "Sep 2023 – Aug 2024",
        role: "Backend Engineer",
        achievements: [
          <>Designed and implemented backend services.</>,
          <>Built and maintained APIs for web and mobile clients.</>,
          <>Improved system reliability and data handling.</>,
        ],
        images: [],
      },
      {
        company: "Escrow Group",
        timeframe: "Feb 2022 – Aug 2023",
        role: "Backend Developer",
        achievements: [
          <>Developed secure backend features.</>,
          <>Designed REST and GraphQL APIs.</>,
          <>Worked with relational databases.</>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Yeshiva University",
        description: <>MSc in Digital Marketing & Analytics (In Progress)</>,
      },
      {
        name: "Chinhoyi University of Technology",
        description: <>BSc in Information Technology</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Engineering",
        description: <>Designing scalable backend systems.</>,
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "Node.js", icon: "nodejs" },
          { name: "NestJS", icon: "nestjs" },
          { name: "GraphQL", icon: "graphql" },
        ],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: <>Building cloud-native services.</>,
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Docker", icon: "docker" },
          { name: "Kafka", icon: "kafka" },
        ],
        images: [],
      },
    ],
  },
}; // ✅ THIS WAS MISSING

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about backend engineering",
  description: `Thoughts and notes by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Backend and cloud projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Personal collection`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
