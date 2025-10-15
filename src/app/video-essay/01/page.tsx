import { ScrollVideo } from "@/components/ScrollVideo";

const clips = [
  {
    src: "/videos/godzilla-random/clip_00.mp4",
    title: "Clip 00",
    placeholder:
      "Placeholder narration for Clip 00. Outline the scene, the characters, or the emotional beat you want to emphasize as the viewer scrubs through this footage.",
  },
  {
    src: "/videos/godzilla-random/clip_01.mp4",
    title: "Clip 01",
    placeholder:
      "Placeholder narration for Clip 01. Highlight the moment you want the viewer to inspect closely as the second sequence unfolds.",
  },
];

const VideoEssayPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Scroll-Driven Video
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Experience frame-by-frame video control through scroll
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-bounce mt-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {clips.map((clip, index) => (
        <section key={clip.src} className="px-6 py-24">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 items-start">
            <div className="order-2 lg:order-1">
              <ScrollVideo
                videoSrc={clip.src}
                className="rounded-3xl border border-border shadow-2xl"
                containerClassName="h-[200vh]"
                stickyClassName="top-24 h-[60vh] lg:max-w-lg mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
              <span className="text-sm uppercase tracking-[0.4em] text-primary">Sequence {index + 1}</span>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">{clip.title}</h2>
                <p className="text-lg md:text-xl text-muted-foreground">{clip.placeholder}</p>
              </div>
              <div className="grid gap-4 text-sm text-muted-foreground">
                <p>
                  Use this space to storyboard your commentary. Add beats, callouts, or production notes that the viewer
                  can read while the clip advances with their scroll.
                </p>
                <p>
                  Consider pairing each clip with behind-the-scenes details, creative decisions, or thematic analysis to
                  guide the narrative.
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* End Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Smooth & Responsive
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            The video progresses frame by frame as you scroll, creating an immersive storytelling experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Frame Precise</h3>
              <p className="text-sm text-muted-foreground">
                Control every frame with scroll position
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Smooth Motion</h3>
              <p className="text-sm text-muted-foreground">
                Silky smooth transitions between frames
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Easy Integration</h3>
              <p className="text-sm text-muted-foreground">
                Simple component, powerful results
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEssayPage;
