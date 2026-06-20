export type ProjectType = 'product' | 'internal-product' | 'campaign';
export type ProjectStatus = 'active' | 'coming-soon' | 'closed';

export type LinkType = 'website' | 'youtube' | 'tiktok' | 'facebook' | 'drive' | 'other';

export interface ProjectLink {
  label: string;
  url: string;
  type: LinkType;
}

export interface Project {
  id: number;
  name: string;
  company: string;
  description: string;
  tags: string[];
  type: ProjectType;
  status: ProjectStatus;
  links?: ProjectLink[];
  uiSample?: string;
}

export const PROFILE = {
  name: 'TRAN NGUYEN NAM',
  titles: ['Business Analyst', 'Product Owner'],
  location: 'Ho Chi Minh City, Viet Nam',
  email: 'trannguyennam.tnn@gmail.com',
  phone: '(+84) 399356368',
  linkedin: 'Tran Nguyen Nam',
  education: 'VNU | UEL - Birmingham City University',
  quote:
    'Welcome to my workspace, where you can capture me, influenced by project/product analysis, and management. I believe I can produce a solution that meets multi-source requirements, system architecture, user experience and more.',
};

export const EXPERIENCES = [
  {
    id: 1,
    company: 'Rikkei Corp',
    role: 'Business Analyst',
    date: 'Jan 2026 - Present',
    type: 'Full-time · Hybrid',
    description: [
      'Analyze business requirements and manage product backlogs, collaborating closely with development teams to ensure accurate implementation.',
      'Create clear documentation specification, User Stories (USR), schemas, ensuring precise terminology and consistency across data mapping fields.',
      'Key Project: Omatic cloud - Data mapper system for CRM and related tools.',
    ],
    skills: ['Backlog Management', 'User Stories', 'Data Mapping', 'CRM Integration', 'Scrum'],
  },
  {
    id: 2,
    company: 'Yeah1 Game (ex: AppROI Ltd. Digital Product Agency)',
    role: 'Product Owner Executive',
    date: 'Feb 2024 - May 2025',
    type: 'Full-time · On-site',
    description: [
      'Directly report to Product Manager and Tech Leader.',
      'Propose ideas, elicit and analyze business and system requirements from stakeholders.',
      'Develop, analyze and visualizations of the end-user\'s journey flows (Flow charts, UI/UX and wireframe).',
      'Write PRD, define features logic, test case (UAT), API document and work with clients on acceptance criteria and change management.',
      'Work with the Project team to ensure the quality and timeline through the development life cycle.',
      'Key Projects: Employee Advocacy System (AI-generated post ideas, sentiment analysis, affiliate gamification); Tân Binh Toàn Năng Gamehub (Karaoke, Audition show gamehub for millions players).',
    ],
    skills: ['PRD', 'UAT', 'Flow Charts', 'UI/UX', 'Wireframing', 'API Documentation', 'Change Management', 'Agile - Scrum'],
  },
  {
    id: 3,
    company: 'V-Cyber',
    role: 'Business Analyst',
    date: 'Sep 2025 - Present',
    type: 'Contractor · Remote',
    description: [
      'Collecting and analyzing business requirements from stakeholders.',
      'Create structured documentation: Functional Specifications, development tickets, and documentation.',
      'Collaborate with Design and Development teams to ensure implementation of requirements.',
      'Key Projects: OKA - a private data storage for business; VN National e-label system (QR traceability for millions products).',
    ],
    skills: ['Requirements Analysis', 'Functional Specifications', 'QR Traceability', 'Product Management'],
  },
  {
    id: 4,
    company: 'iTechwx Company Limited (Microsoft Partner)',
    role: 'Advocate Solution Engineer',
    date: 'May 2025 - Feb 2026',
    type: 'Full-time · On-site',
    description: [
      'Acting as Microsoft Active Directory team across the APAC region, handled around 100 cases, achieved a 100% 5-star client feedback rating and resolved >70% of issues directly.',
      'Document and troubleshoot technical issues using event logs and performance traces, analyzing data to build tailored customer solutions.',
    ],
    skills: ['Microsoft Active Directory', 'Powershell', 'Event Log Analysis', 'Performance Traces', 'Customer Solutions'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Omatic Cloud',
    company: 'Rikkei Corp',
    type: 'product',
    status: 'active',
    description:
      'Data mapper system for CRM and related tools. Analyze business requirements and manage product backlogs, ensuring accurate implementation with clear documentation and consistent data mapping fields.',
    tags: ['Data Mapping', 'CRM', 'SaaS'],
    links: [
      { label: 'Access', url: 'https://omaticsoftware.com/', type: 'website' },
      { label: 'Demo video', url: 'https://www.youtube.com/watch?v=yt6oU5sM_is', type: 'youtube' },
    ],
  },
  {
    id: 2,
    name: 'Employee Advocacy System',
    company: 'Yeah1 Game',
    type: 'internal-product',
    status: 'coming-soon',
    description:
      'An internal system turning staff into brand KOLs, featuring AI-generated post ideas, sentiment analysis, and affiliate gamification.',
    tags: ['AI Content', 'Sentiment Analysis', 'Gamification', 'Affiliate'],
    uiSample: '/assets/projects/advocacy.png',
  },
  {
    id: 3,
    name: 'Tân Binh Toàn Năng Gamehub',
    company: 'Yeah1 Game',
    type: 'campaign',
    status: 'closed',
    description:
      'A show gamehub campaign (Karaoke, Audition) for millions of players to drive business conversions and engagement.',
    tags: ['Interactive Gaming', 'User Engagement', 'Campaign'],
    links: [
      { label: 'Detail info', url: 'https://www.facebook.com/GameThuToanNang', type: 'facebook' },
      { label: 'Demo video', url: 'https://www.tiktok.com/@gamethutoannang/video/7510482388129041665', type: 'tiktok' },
    ],
  },
  {
    id: 4,
    name: 'OKA Private Data Storage',
    company: 'V-Cyber',
    type: 'product',
    status: 'coming-soon',
    description:
      'A private data storage for business. Collecting and analyzing business requirements, creating structured documentation and functional specifications.',
    tags: ['Data Storage', 'Business'],
    links: [{ label: 'Consultation', url: 'https://vcyber.vn/lien-he', type: 'website' }],
    uiSample: '/assets/projects/oka.png',
  },
  {
    id: 5,
    name: 'VN National E-label System',
    company: 'V-Cyber',
    type: 'product',
    status: 'active',
    description:
      'A national traceability system utilizing QR codes to trace millions of products.',
    tags: ['Government', 'QR Traceability', 'Large Scale'],
    links: [{ label: 'Access', url: 'https://elabel.gov.vn/', type: 'website' }],
    uiSample: '/assets/projects/elabel.png',
  },
  {
    id: 6,
    name: 'AI Music Web Platform',
    company: 'Yeah1 Game',
    type: 'campaign',
    status: 'closed',
    description:
      'Developed a web-based AI tool enabling users to mix brand messages (e.g., Coca-Cola) into songs, driving highly viral marketing campaigns.',
    tags: ['AI', 'Web Platform', 'Viral Marketing'],
    links: [
      {
        label: 'Demo clip',
        url: 'https://drive.google.com/file/d/1AVIXrRt0duuPgpaV3QQrxrvao56DMm0s/view?usp=sharing',
        type: 'drive',
      },
    ],
  },
];

export interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  comment: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Khoa Le',
    position: 'Project Manager',
    company: 'Rikkei Corp',
    comment:
      'Nam always ensures the quality of his deliverables and proactively supports the team so shared goals and the overall project are delivered on schedule.',
  },
  {
    id: 2,
    name: 'Kevin',
    position: 'Product Owner',
    company: 'Rikkei Corp',
    comment:
      'Nam always supports teammates to keep work flowing smoothly, and always knows exactly what he needs to do.',
  },
  {
    id: 3,
    name: 'Duong Luong',
    position: 'Product Lead (ex MoMo) · Product Manager (ex AppROI) · INSEAD MBA',
    company: 'AppROI',
    comment:
      'Nam is always eager to learn, continuously improves, and adapts well to new environments.',
  },
  {
    id: 4,
    name: 'Hoa Le',
    position: 'Senior Product Owner',
    company: 'ex Zalo',
    comment: 'Nam has a strong sense of product monetization.',
  },
  {
    id: 5,
    name: 'Phi Hung',
    position: 'Senior Project Manager (ex DXC) · Project Manager',
    company: 'V-Cyber',
    comment:
      'Nam organizes and collaborates with cross-functional teams effectively throughout the development lifecycle.',
  },
];

export const SKILL_CATEGORIES = [
  {
    title: 'Analysis & Management',
    icon: 'briefcase' as const,
    color: 'text-cyan-400',
    skills: [
      'Requirement analysis',
      'E-commerce operation and strategy',
      'Agile - Scrum',
      'PRD',
      'User Stories',
      'UAT',
      'Stakeholder Management',
      'Redmine',
    ],
  },
  {
    title: 'Design & UX',
    icon: 'terminal' as const,
    color: 'text-purple-400',
    skills: ['Figma', 'Draw.io', 'BPMN', 'UML', 'Wireframing', 'UI/UX', 'Flowcharts'],
  },
  {
    title: 'Technical Tools',
    icon: 'database' as const,
    color: 'text-blue-400',
    skills: [
      'Azure DevOps',
      'Cursor',
      'Jira',
      'Dynamics 365',
      'Microsoft workspace',
      'Google workspace',
      'Active Directory',
      'Powershell',
      'Log Analysis',
    ],
  },
];

export const TYPE_LABELS: Record<ProjectType, string> = {
  product: 'Product',
  'internal-product': 'Internal Product',
  campaign: 'Campaign',
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  active: 'Live',
  'coming-soon': 'Coming Soon',
  closed: 'Closed',
};

export function getYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match?.[1] ?? null;
}

export function getYoutubeThumbnail(url: string): string | null {
  const id = getYoutubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export function getDriveEmbedUrl(url: string): string | null {
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match?.[1] ? `https://drive.google.com/file/d/${match[1]}/preview` : null;
}

export function getTikTokEmbedUrl(url: string): string | null {
  const match = url.match(/video\/(\d+)/);
  return match?.[1] ? `https://www.tiktok.com/embed/v2/${match[1]}` : null;
}
