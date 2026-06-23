import { X } from 'lucide-react';
import { useEffect } from 'react';

export type PreviewContent =
  | { kind: 'image'; src: string; title: string }
  | { kind: 'youtube'; videoId: string; title: string }
  | { kind: 'embed'; src: string; title: string; isVertical?: boolean };

interface MediaPreviewModalProps {
  content: PreviewContent | null;
  onClose: () => void;
}

export function MediaPreviewModal({ content, onClose }: MediaPreviewModalProps) {
  useEffect(() => {
    if (!content) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [content, onClose]);

  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close preview"
      />

      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col animate-fade-in">
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="text-sm sm:text-base text-gray-200 font-medium truncate pr-4">
            {content.title}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2 rounded-lg bg-gray-800/90 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shadow-2xl flex justify-center items-center">
          {content.kind === 'image' && (
            <img
              src={content.src}
              alt={content.title}
              className="w-full max-h-[80vh] object-contain bg-gray-950"
            />
          )}

          {content.kind === 'youtube' && (
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${content.videoId}?autoplay=1`}
                title={content.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {content.kind === 'embed' && (
          <div className="relative h-[75vh] sm:h-[80vh] aspect-[9/16] bg-black overflow-hidden flex items-center justify-center rounded-lg">
              <iframe
                src={content.src}
                title={content.title}
                className="absolute border-0 w-[200%] h-[200%] origin-center scale-50"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
