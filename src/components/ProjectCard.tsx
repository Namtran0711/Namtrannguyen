import {
  ExternalLink,
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
} from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onPreview: (content: PreviewContent) => void;
}

function getUiSamples(project: Project): string[] {
  return project.uiSamples ?? [];
}

function buildMetaLine(project: Project): string {
  const parts = [project.company];
  if (project.type === 'internal-product') parts.push('Internal product');
  if (project.type === 'campaign') parts.push('Campaign');
  if (project.status === 'coming-soon') parts.push('Coming soon');
  if (project.status === 'closed') parts.push('Closed');
  return parts.join(' · ');
}

function HighlightLink({ link }: { link: ProjectLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-cyan-400 bg-cyan-500/15 border border-cyan-500/40 hover:bg-cyan-500/25 hover:text-cyan-300 hover:border-cyan-400/60 transition-all shadow-sm shadow-cyan-500/10"
    >
      {link.label}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}

function SubtleLink({ link }: { link: ProjectLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors"
    >
      {link.label}
      <ExternalLink className="w-3 h-3 opacity-50" />
    </a>
  );
}

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
        className="group relative w-full overflow-hidden rounded-lg border border-gray-800 hover:border-gray-700 transition-all text-left"
      >
        <img
          src={youtubeThumb}
          alt={`${link.label} thumbnail`}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-[11px] text-gray-300">{link.label}</p>
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
          className="group relative w-full overflow-hidden rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="aspect-video bg-gray-900/60 flex flex-col ithttps://namtrannguyen-git-main-trannguyennamtnn-2431s-projects.vercel.app/ems-center justify-center gap-1.5">
            <Play className="w-8 h-8 text-gray-500 group-hover:text-gray-300 transition-colors" />
            <span className="text-[11px] text-gray-500">{link.label}</span>
          </div>
        </button>
        <SubtleLink link={link} />
      </div>
    );
  }

  if (tiktokEmbed) {
    return (
      <div className="space-y-2">
        <button
          type="button"
          onClick={() => onPreview({ kind: 'embed', src: tiktokEmbed, title: link.label })}
          className="group relative w-full overflow-hidden rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="aspect-video bg-gray-900/60 flex flex-col items-center justify-center gap-1.5">
            <Play className="w-8 h-8 text-gray-500 group-hover:text-gray-300 transition-colors" />
            <span className="text-[11px] text-gray-500">{link.label}</span>
          </div>
        </button>
        <SubtleLink link={link} />
      </div>
    );
  }

  return <HighlightLink link={link} />;
}

function UiSamplePreview({
  samples,
  projectName,
  onPreview,
}: {
  samples: string[];
  projectName: string;
  onPreview: (content: PreviewContent) => void;
}) {
  if (samples.length === 0) return null;

  return (
    <div className="w-full rounded-lg border border-gray-800 bg-gray-950/40 overflow-hidden hover:border-gray-700 transition-all">
      <div
        className={`relative w-full aspect-video overflow-hidden ${samples.length > 1 ? 'grid grid-cols-2 divide-x divide-gray-800' : ''
          }`}
      >
        {samples.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() =>
              onPreview({
                kind: 'image',
                src,
                title: `${projectName} — UI Sample ${samples.length > 1 ? index + 1 : ''}`.trim(),
              })
            }
            className="relative h-full w-full overflow-hidden group"
          >
            <img
              src={src}
              alt={`${projectName} UI sample ${index + 1}`}
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const uiSamples = getUiSamples(project);
  const hasLinks = project.links && project.links.length > 0;
  const isUiOnly = uiSamples.length > 0 && !hasLinks;
  const websiteLinks = project.links?.filter((l) => ['website', 'facebook', 'other'].includes(l.type)) ?? [];
  const mediaLinks = project.links?.filter((l) => !['website', 'facebook', 'other'].includes(l.type)) ?? [];
  const hasMediaSection = uiSamples.length > 0 || hasLinks;

  return (
    <article className="flex flex-col h-full bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group overflow-hidden">
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors leading-tight mb-1">
            {project.name}
          </h3>
          <p className="text-xs text-gray-500">{buildMetaLine(project)}</p>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed flex-grow min-h-[4.5rem]">
          {project.description}
        </p>

        <div className="mt-auto pt-4">
          <div className="flex flex-nowrap items-center gap-1.5 mb-4 overflow-x-auto scrollbar-thin">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                className="shrink-0 px-2.5 py-0.5 text-[11px] bg-blue-500/10 border-blue-500/20 text-blue-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {hasMediaSection && (
            <div className="pt-4 border-t border-gray-800/60 space-y-3">
              {isUiOnly && <div className="h-[34px]" aria-hidden="true" />}

              {websiteLinks.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {websiteLinks.map((link) => (
                    <HighlightLink key={link.url} link={link} />
                  ))}
                </div>
              )}

              {uiSamples.length > 0 && (
                <UiSamplePreview
                  samples={uiSamples}
                  projectName={project.name}
                  onPreview={onPreview}
                />
              )}

              {mediaLinks.map((link) => (
                <LinkPreview key={link.url} link={link} onPreview={onPreview} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
