export type ProjectType = 'product' | 'internal-product' | 'campaign';
export type ProjectStatus = 'active' | 'coming-soon' | 'closed';

export type LinkType = 'website' | 'youtube' | 'tiktok' | 'facebook' | 'drive' | 'other';

export interface ProjectLink {
  label: string;
  url: string;
  type: LinkType;
  thumbnail?: string;
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
  uiSamples?: string[];
}

export const PROFILE = {
  name: 'TRAN NGUYEN NAM',
  titles: ['Business Analyst', 'Product Owner'],
  location: 'Ho Chi Minh City, Viet Nam',
  email: 'trannguyennam.tnn@gmail.com',
  phone: '(+84) 399356368',
  linkedin: 'TRAN NGUYEN NAM',
  linkedinUrl: 'https://www.linkedin.com/in/trannguyennam',
  education: 'VNU | UEL - Birmingham City University',
  quote:
    'Welcome to my workspace, where you can capture me, influenced by project/product analysis, and management. I believe I can produce a solution that meets multi-source requirements, system architecture, user experience and more.',
};

export const EXPERIENCES = [
  {
    id: 1,
    company: 'Rikkei Corp',
    role: 'Business Analyst',
    date: 'July 2025 - Present',
    type: 'Full-time · Hybrid',
    description: [
      'Analyze business requirements and manage product backlogs, collaborating closely with development teams to ensure accurate implementation.',
      'Create clear documentation specification, User Stories (USR), schemas, ensuring precise terminology and consistency across data mapping fields.',
      'Key Project: Omatic Cloud — nonprofit data integration platform connecting CRM and related systems.',
    ],
    skills: ['Backlog Management', 'User Stories', 'Data Mapping', 'CRM Integration', 'Scrum'],
  },
  {
    id: 3,
    company: 'V-Cyber',
    role: 'Business Analyst',
    date: 'Jul 2026 - Present',
    type: 'Contractor · Remote',
    description: [
      'Collecting and analyzing business requirements from stakeholders.',
      'Create structured documentation: Functional Specifications, development tickets, and documentation.',
      'Collaborate with Design and Development teams to ensure implementation of requirements.',
      'Key Projects: OKA — secure cloud storage platform; VN National E-label System — national QR traceability for millions of products.',
    ],
    skills: ['Requirements Analysis', 'Functional Specifications', 'QR Traceability', 'Product Management'],
  },
  {
    id: 4,
    company: 'iTechwx Company Limited (Microsoft Partner)',
    role: 'Advocate Solution Engineer',
    date: 'Mar 2025 - Feb 2026',
    type: 'Full-time · On-site',
    description: [
      'Acting as Microsoft Active Directory team across the APAC region, handled around 100 cases, achieved a 100% 5-star client feedback rating and resolved >70% of issues directly.',
      'Document and troubleshoot technical issues using event logs and performance traces, analyzing data to build tailored customer solutions.',
    ],
    skills: ['Microsoft Active Directory', 'Powershell', 'Event Log Analysis', 'Performance Traces', 'Customer Solutions'],
  },
  {
    id: 2,
    company: 'Yeah1 Game (ex: AppROI Ltd. Digital Product Agency)',
    role: 'Product Owner Executive',
    date: 'Jan 2024 - Jun 2025',
    type: 'Full-time · On-site',
    description: [
      'Directly report to Product Manager and Tech Leader.',
      'Propose ideas, elicit and analyze business and system requirements from stakeholders.',
      'Develop, analyze and visualizations of the end-user\'s journey flows (Flow charts, UI/UX and wireframe).',
      'Write PRD, define features logic, test case (UAT), API document and work with clients on acceptance criteria and change management.',
      'Work with the Project team to ensure the quality and timeline through the development life cycle.',
      'Key Projects: Employee Advocacy System (AI-generated post ideas, sentiment analysis, affiliate gamification); Game Thủ Toàn Năng show gamehub (Karaoke, Audition) for millions of players and viewers.',
    ],
    skills: ['PRD', 'UAT', 'Flow Charts', 'UI/UX', 'Wireframing', 'API Documentation', 'Change Management', 'Agile - Scrum'],
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
      'Omatic Cloud helps nonprofits integrate systems such as Blackbaud and Salesforce to unify data, prevent duplicates, and drive mission impact — trusted by 3,000+ organizations for over 20 years.',
    tags: ['Nonprofit', 'Data Integration', 'CRM', 'SaaS'],
    links: [
      { label: 'Access', url: 'https://omaticsoftware.com/', type: 'website' },
      { label: 'Demo video', url: 'https://www.youtube.com/watch?v=yt6oU5sM_is', type: 'youtube' },
    ],
  },
  {
    id: 4,
    name: 'OKA Private Data Storage',
    company: 'V-Cyber',
    type: 'product',
    status: 'coming-soon',
    description:
      'A next-generation cloud storage platform built with proprietary end-to-end encryption. OKA ensures absolute security for digital documents, prevents enterprise data leaks, enforces strict access control, and enables centralized storage — giving organizations complete peace of mind over their digital assets.',
    tags: ['E2E Encryption', 'Cloud Storage', 'Enterprise Security'],
    links: [{ label: 'Consultation', url: 'https://vcyber.vn/lien-he', type: 'website' }],
    uiSamples: ['/assets/projects/oka.png'],
  },
  {
    id: 5,
    name: 'VN National E-label System',
    company: 'V-Cyber',
    type: 'product',
    status: 'active',
    description:
      'Vietnam\'s national e-label pilot system at elabel.gov.vn, enabling digital product labeling, QR-based traceability, and public lookup for millions of goods nationwide.',
    tags: ['Government', 'E-label', 'QR Traceability'],
    links: [{ label: 'Access', url: 'https://elabel.gov.vn/', type: 'website' }],
    uiSamples: ['/assets/projects/elabel-home.png'],
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
    uiSamples: ['/assets/projects/advocacy.png'],
  },
  {
    id: 3,
    name: 'Game Thủ Toàn Năng',
    company: 'Yeah1 Game',
    type: 'campaign',
    status: 'closed',
    description:
      'A Tân Binh Toàn Năng show gamehub campaign (Karaoke, Audition) reaching millions of players and viewers to drive business conversions and engagement.',
    tags: ['Interactive Gaming', 'User Engagement', 'Campaign'],
    links: [
      { label: 'Detail info', url: 'https://www.facebook.com/GameThuToanNang', type: 'facebook' },
      { label: 'Demo video', url: 'https://drive.google.com/file/d/10s095ibe7yXAPzPgAEp3RdfQd-OLJFF6/view?usp=sharing', type: 'drive', thumbnail: '/assets/projects/tanbinhtoannang.jpg'},
    ],
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
        thumbnail: '/assets/projects/aimusicvideo.jpg'
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
    name: 'Mr Nha Nguyen',
    position: 'CEO',
    company: 'V-Cyber',
    comment:
      'Nam provides practical analysis for the essential use cases of the product and business.',
  },
  {
    id: 4,
    name: 'Phi Hung',
    position: 'Senior Project Manager (ex DXC) · Project Manager',
    company: 'V-Cyber',
    comment:
      'Nam organizes and collaborates with cross-functional teams effectively throughout the development lifecycle.',
  },
  {
    id: 5,
    name: 'Duong Luong',
    position: 'Product Lead (ex MoMo) · Product Manager (ex AppROI) · INSEAD MBA',
    company: 'AppROI',
    comment:
      'Nam is always eager to learn, continuously improves, and adapts well to new environments.',
  },
  {
    id: 6,
    name: 'Hoa Le',
    position: 'Senior Product Owner',
    company: 'ex Zalo',
    comment: 'Nam has a strong sense of product monetization.',
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

export function getGmailComposeUrl(email: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

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
