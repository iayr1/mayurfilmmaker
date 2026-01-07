import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  category: string;
}

// Helper to extract YouTube ID from various URL formats
const getYouTubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Add your YouTube URLs here - supports full URLs or just video IDs
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Hickory Dickory Dock",
    description: "A fun and engaging nursery rhyme animation for kids",
    youtubeUrl: "https://youtu.be/Gyz3j98r8E8",
    category: "Nursery Rhyme",
  },
  {
    id: 2,
    title: "AI Dreamscape",
    description: "An experimental AI-generated short film exploring surreal landscapes",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "AI Film",
  },
  {
    id: 3,
    title: "Neon Nights",
    description: "Cinematic AI music video with cyberpunk aesthetics",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Music Video",
  },
  {
    id: 4,
    title: "The Last Memory",
    description: "An emotional AI-generated story about love and loss",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "AI Story",
  },
  {
    id: 5,
    title: "Digital Genesis",
    description: "Text-to-video experiment showcasing AI evolution",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Experiment",
  },
];

const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 relative">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Play className="h-5 w-5" />
              <span className="text-sm uppercase tracking-widest">Portfolio</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              A collection of AI-generated films, music videos, and visual experiments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => {
              const youtubeId = getYouTubeId(item.youtubeUrl);

              return (
                <motion.div
                  key={item.id}
                  className="video-card group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onClick={() => setSelectedVideo(item)}
                >
                  <div className="relative aspect-video bg-muted rounded-xl overflow-hidden">
                    {/* YouTube Thumbnail */}
                    {youtubeId && (
                      <img
                        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to hqdefault if maxresdefault doesn't exist
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                        }}
                      />
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md border border-white/10 text-white/90 shadow-lg select-none">
                        {item.category}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/90 flex items-center justify-center btn-glow opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                      >
                        <Play className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground ml-1" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                      <h3 className="font-display text-lg md:text-xl font-semibold mb-1 md:mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 md:-top-4 md:-right-12 p-2 rounded-full glass-card hover:bg-primary transition-colors z-10"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video Container */}
              <div className="aspect-video rounded-xl overflow-hidden glow-box">
                {getYouTubeId(selectedVideo.youtubeUrl) && (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.youtubeUrl)}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Video Info */}
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  {selectedVideo.title}
                </h3>
                <p className="text-muted-foreground mt-2">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
