import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Eye,
  ImageIcon,
  Link2,
  Lock,
  Play,
} from 'lucide-react';
import { Badge } from './Badge';
import type { PreviewContent } from './MediaPreviewModal';
import {
  getDriveEmbedUrl,
  getTikTokEmbedUrl,
  getYoutubeId,
  getYoutubeThumbnail,
  Project,
  ProjectLink,
  STATUS_LABELS,
  TYPE_LABELS,
} from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onPreview: (content: PreviewContent) => void;
}

const TYPE_STYLES = {
  product: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
  'internal-product': 'bg-violet-500/10 border-violet-500/30 text-violet-300',
  campaign: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
};

const STATUS_STYLES = {
  active: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
  'coming-soon': 'bg-orange-500/10 border-orange-500/30 text-orange-300',
  closed: 'bg-gray-500/10 border-gray-500/40 text-gray-400',
};

function LinkPreview({
  link,
  onPreview,
}: {
  link: ProjectLink;
  onPreview: (content: PreviewContent) => void;
}) {
  const youtubeThumb = link.type === 'youtube' ? getYoutubeThumbnail(link.url) : null;
  const youtubeId = link.type === 'youtube' ? getYoutubeId(link.url) : null;
  const driveEmbed = link.type === 'drive' ? getDriveEmbedUrl(link.url) : null;
  const tiktokEmbed = link.type === 'tiktok' ? getTikTokEmbedUrl(link.url) : null;

  if (youtubeThumb && youtubeId) {
    return (
      <button
        type="button"
        onClick={() =>
          onPreview({ kind: 'youtube', videoId: youtubeId, title: `${link.label} — YouTube` })
        }
        className="group relative w-full overflow-hidden rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all text-left"
      >
        <img
          src={youtubeThumb}
          alt={`${link.label} thumbnail`}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-xs text-gray-200 font-medium">{link.label}</p>
          <p className="text-[10px] text-gray-400">Click to play preview</p>
        </div>
      </button>
    );
  }

  if (driveEmbed) {
    return (
      <div className="space-y-2">
        <button
          type="button"
          onClick={() => onPreview({ kind: 'embed', src: driveEmbed, title: link.label })}
          className="group relative w-full overflow-hidden rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all"
        >
          <div className="aspect-video bg-gray-800 flex flex-col items-center justify-center gap-2">
            <Play className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-300">{link.label}</span>
            <span className="text-[10px] text-gray-500">Click to preview clip</span>
          </div>
        </button>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors"
        >
          Open in Google Drive <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    );
  }

  if (tiktokEmbed) {
    return (
      <div className="space-y-2">
        <button
          type="button"
          onClick={() => onPreview({ kind: 'embed', src: tiktokEmbed, title: link.label })}
          className="group relative w-full overflow-hidden rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all"
        >
          <div className="aspect-video bg-gray-800 flex flex-col items-center justify-center gap-2">
            <Play className="w-10 h-10 text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-gray-300">{link.label}</span>
            <span className="text-[10px] text-gray-500">Click to preview TikTok</span>
          </div>
        </button>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors"
        >
          Open on TikTok <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-cyan-500/40 hover:bg-gray-800 transition-all group"
    >
      <div className="flex items-center gap-2 min-w-0">
        <Link2 className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 shrink-0" />
        <span className="text-sm text-gray-300 truncate">{link.label}</span>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 shrink-0" />
    </a>
  );
}

export function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const [linksOpen, setLinksOpen] = useState(false);
  const hasLinks = project.links && project.links.length > 0;
  const hasExpandableContent =
    hasLinks || !!project.uiSample;

  return (
    <article className="flex flex-col bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group overflow-hidden">
      {project.uiSample && (
        <button
          type="button"
          onClick={() =>
            onPreview({
              kind: 'image',
              src: project.uiSample!,
              title: `${project.name} — UI Sample`,
            })
          }
          className="relative w-full overflow-hidden border-b border-gray-800"
        >
          <img
            src={project.uiSample}
            alt={`${project.name} UI sample`}
            className="w-full h-40 sm:h-48 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-xs text-white backdrop-blur-sm">
              <Eye className="w-3.5 h-3.5" /> View UI sample
            </span>
          </div>
        </button>
      )}

      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors leading-tight">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-1.5 justify-end">
            <Badge className={TYPE_STYLES[project.type]}>{TYPE_LABELS[project.type]}</Badge>
            <Badge className={STATUS_STYLES[project.status]}>
              {STATUS_LABELS[project.status]}
            </Badge>
          </div>
        </div>

        <p className="text-sm text-cyan-500/80 font-medium mb-2">{project.company}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} className="bg-blue-500/10 border-blue-500/20 text-blue-300">
              {tag}
            </Badge>
          ))}
        </div>

        {project.status === 'coming-soon' && (
          <div className="flex items-start gap-2 p-3 mb-4 rounded-lg bg-orange-500/5 border border-orange-500/20">
            <Lock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <p className="text-xs text-orange-200/80 leading-relaxed">
              This project is not publicly accessible yet. UI sample and consultation links are
              available below.
            </p>
          </div>
        )}

        {hasExpandableContent && (
          <div className="mt-auto pt-2 border-t border-gray-800/80">
            <button
              type="button"
              onClick={() => setLinksOpen((v) => !v)}
              className="flex items-center justify-between w-full py-2.5 px-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              aria-expanded={linksOpen}
            >
              <span className="inline-flex items-center gap-2">
                <Link2 className="w-4 h-4" />
                {linksOpen ? 'Hide links & media' : 'Show links & media'}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${linksOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {linksOpen && (
              <div className="space-y-3 pt-2 pb-1 animate-slide-up">
                {project.uiSample && (
                  <button
                    type="button"
                    onClick={() =>
                      onPreview({
                        kind: 'image',
                        src: project.uiSample!,
                        title: `${project.name} — UI Sample`,
                      })
                    }
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-cyan-500/40 transition-all text-left group/link"
                  >
                    <ImageIcon className="w-4 h-4 text-gray-500 group-hover/link:text-cyan-400" />
                    <span className="text-sm text-gray-300">View full UI sample</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-600 group-hover/link:text-cyan-400" />
                  </button>
                )}

                {project.links?.map((link) => (
                  <LinkPreview key={link.url} link={link} onPreview={onPreview} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
