import { useEffect, useState } from 'react';
import {
  Briefcase,
  ChevronRight,
  Code,
  Database,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Quote,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Badge } from './components/Badge';
import { MediaPreviewModal, PreviewContent } from './components/MediaPreviewModal';
import { ProjectCard } from './components/ProjectCard';
import {
  EXPERIENCES,
  getGmailComposeUrl,
  PROFILE,
  PROJECTS,
  REVIEWS,
  SKILL_CATEGORIES,
} from './data/portfolio';

type TabId = 'experience' | 'projects' | 'skills' | 'reviews';

const TABS: { id: TabId; label: string; icon: React.ReactNode; shortLabel: string }[] = [
  { id: 'experience', label: 'Experience', shortLabel: 'Exp', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'projects', label: 'Key Projects', shortLabel: 'Projects', icon: <Code className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills & Tools', shortLabel: 'Skills', icon: <Terminal className="w-4 h-4" /> },
  { id: 'reviews', label: 'Reviews', shortLabel: 'Reviews', icon: <MessageSquare className="w-4 h-4" /> },
];

const SKILL_ICONS = {
  briefcase: Briefcase,
  terminal: Terminal,
  database: Database,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('experience');
  const [isLoaded, setIsLoaded] = useState(false);
  const [preview, setPreview] = useState<PreviewContent | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-cyan-500/30">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        <header
          className={`transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  {PROFILE.name}
                </span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-light flex flex-wrap items-center gap-x-3 gap-y-1">
                {PROFILE.titles.map((title, i) => (
                  <span key={title}>
                    {i > 0 && <span className="hidden sm:inline text-gray-600">•</span>}
                    {title}
                  </span>
                ))}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm text-gray-400">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0" /> {PROFILE.email}
              </a>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" /> {PROFILE.phone}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> {PROFILE.location}
              </span>
              <span className="flex items-start gap-2 sm:col-span-2 lg:col-span-1">
                <GraduationCap className="w-4 h-4 shrink-0 mt-0.5" /> {PROFILE.education}
              </span>
            </div>
          </div>

          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl mb-8 sm:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl" />
            <div className="relative bg-gray-950/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border border-gray-800/50">
              <Sparkles className="absolute top-4 right-4 w-5 h-5 text-cyan-400/50" />
              <p className="text-base sm:text-lg md:text-xl text-gray-300 italic font-light leading-relaxed pr-6">
                &ldquo;{PROFILE.quote}&rdquo;
              </p>
            </div>
          </div>
        </header>

        <div
          className={`flex gap-1 sm:gap-2 p-1 bg-gray-900/50 rounded-xl border border-gray-800 mb-6 sm:mb-8 backdrop-blur-md overflow-x-auto scrollbar-thin transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[72px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gray-800 text-cyan-400 shadow-md border border-gray-700'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          ))}
        </div>

        <main
          className={`min-h-[400px] sm:min-h-[500px] transition-all duration-1000 delay-500 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {activeTab === 'experience' && (
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="group relative p-4 sm:p-6 bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all hover:bg-gray-900/60"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-100">{exp.role}</h3>
                      <h4 className="text-base sm:text-lg text-cyan-400 font-medium">{exp.company}</h4>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-gray-300 font-medium text-sm sm:text-base">{exp.date}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{exp.type}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {exp.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500/50 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 animate-fade-in">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} onPreview={setPreview} />
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
              {SKILL_CATEGORIES.map((category) => {
                const Icon = SKILL_ICONS[category.icon];
                return (
                  <div
                    key={category.title}
                    className="p-5 sm:p-6 bg-gray-900/40 rounded-2xl border border-gray-800"
                  >
                    <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 border-b border-gray-800">
                      <div className="p-2 bg-gray-800 rounded-lg">
                        <Icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-100">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} className="hover:bg-gray-700 cursor-default transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {REVIEWS.map((review) => (
                    <div
                      key={review.id}
                      className="group relative p-5 sm:p-6 bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all hover:bg-gray-900/60"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Quote className="w-8 h-8 text-amber-500/20 mb-4" />
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                        &ldquo;{review.comment}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-sm font-bold text-amber-400">
                          {review.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .substring(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-100">{review.name}</p>
                          <p className="text-xs text-gray-500">
                            {review.position} · {review.company}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          )}
        </main>

        <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={getGmailComposeUrl(PROFILE.email)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-500/15 border border-cyan-500/40 hover:bg-cyan-500/25 hover:text-cyan-300 hover:border-cyan-400/60 transition-all shadow-sm shadow-cyan-500/10"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-blue-400 bg-blue-500/15 border border-blue-500/40 hover:bg-blue-500/25 hover:text-blue-300 hover:border-blue-400/60 transition-all shadow-sm shadow-blue-500/10"
            >
              <Linkedin className="w-4 h-4" />
              {PROFILE.linkedin}
            </a>
          </div>
        </footer>
      </div>

      <MediaPreviewModal content={preview} onClose={() => setPreview(null)} />
    </div>
  );
}
