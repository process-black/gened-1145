export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      {/* Hero Section */}
      <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-12 sm:min-h-screen sm:px-6 lg:px-0 lg:py-0">
        <div className="relative z-10 w-full">
          {/* Video Background Container - responsive layout */}
          <div className="relative z-10 mx-auto flex w-full min-h-[calc(100svh-6rem)] max-w-xl items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 text-white shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)] ring-1 ring-black/10 dark:ring-white/10 sm:min-h-[32rem] md:max-w-2xl lg:h-[80vh] lg:w-[80vw] lg:max-w-none">
            <div className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/godzilla-random-3/clip_004.webm" type="video/webm" />
              </video>
            </div>

            {/* Content with backdrop blur and dark overlay */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center sm:px-8">
              <div className="rounded-2xl bg-black/60 px-8 py-12 backdrop-blur-md sm:px-12 sm:py-16">
                <p className="text-xs uppercase tracking-[0.4em] text-white/90">
                  Learning Lab
                </p>
                <h1 className="mt-4 text-5xl font-black tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-7xl">
                  gened 1145
                </h1>
                <p className="mt-6 max-w-xl text-base text-white/90 sm:text-lg">
                  The Future of the Video Essay
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent via-neutral-100/70 to-neutral-100 dark:via-neutral-950/60 dark:to-neutral-950" />
      </div>

      {/* Scrollable Content Below */}
      <div className="bg-neutral-100 px-8 py-16 text-neutral-800 dark:bg-neutral-950 dark:text-white/80">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white">Why Web-Based Video Essays?</h2>

          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Traditional video essays—like the brilliant work of <em>Every Frame a Painting</em>, <em>Nerdwriter</em>,
              and <em>Lindsay Ellis</em>—have revolutionized film criticism by making scholarly analysis accessible and
              engaging. They&apos;re wonderful, and they&apos;ve inspired a generation of students to think critically about media.
            </p>

            <p>
              But what if we could take that format further? What if you could <strong>control the pace</strong> of the
              analysis, pause on specific frames without breaking flow, or explore argument branches that interest you most?
              What if the essay could be both linear narrative <em>and</em> interactive exploration?
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">
              The Advantages of Interactive Multimodal Essays
            </h3>

            <p>
              <strong>1. Reader-Driven Pacing</strong><br />
              Traditional video essays lock you into a timeline. Web-based essays let you scroll at your own speed,
              linger on complex arguments, or skim sections you already understand. The video responds to <em>your</em> reading
              rhythm, not the other way around.
            </p>

            <p>
              <strong>2. Layered Information Architecture</strong><br />
              While a YouTube video must present information linearly, web essays can offer multiple reading paths.
              Primary argument in the main column, supporting evidence in expandable sections, citations and further
              reading linked inline—all without disrupting the core narrative flow.
            </p>

            <p>
              <strong>3. Frame-Perfect Analysis</strong><br />
              Scroll-synchronized video playback gives you unprecedented control. Want to examine a single frame?
              Just stop scrolling. Traditional video requires fumbling with playback controls and losing your place
              in the argument. Here, the argument and the evidence move as one.
            </p>

            <p>
              <strong>4. Multimodal Integration</strong><br />
              Web platforms let you seamlessly weave video, text, images, annotations, and interactive elements.
              Compare two shots side-by-side. Overlay diagrams on moving footage. Embed primary source documents
              alongside the clips they reference. The medium becomes genuinely multimodal, not just &quot;video with text.&quot;
            </p>

            <p>
              <strong>5. Academic Rigor Meets Accessibility</strong><br />
              Web essays can maintain scholarly depth—proper citations, footnotes, bibliography—while remaining
              as engaging as YouTube. Students can experience the argument viscerally through video, then dive into
              sources and methods if they want. The format serves both casual viewers and serious researchers.
            </p>

            <p>
              <strong>6. Preservation and Shareability</strong><br />
              Unlike platform-dependent videos (subject to copyright strikes, algorithm changes, or service shutdowns),
              web-based essays live on open infrastructure. They can be archived, forked, remixed, and built upon.
              They&apos;re scholarship as living documents, not media locked in proprietary containers.
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">
              The Workshop Challenge
            </h3>

            <p>
              In our GenEd 1145 workshop, you&apos;ll create traditional video essays using familiar tools like Premiere
              or Final Cut. That&apos;s valuable! Understanding linear narrative structure, pacing, and voice-over is
              foundational. But we also want you to imagine <em>what comes next</em>.
            </p>

            <p>
              This demonstration shows one possible future: scholarly arguments that breathe with the reader, that
              respect both the rigor of academic analysis and the agency of the audience. Click below to experience
              a full interactive essay about Godzilla (1954), then ask yourself: what kinds of arguments become
              possible when the form itself is this flexible?
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-100 px-8 py-12 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            Ready to see it in action?
          </p>
          <a
            href="/video-essay/02"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-neutral-800 hover:scale-105 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Experience the Interactive Essay →
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            An analysis of Godzilla (1954) with scroll-synchronized video
          </p>
        </div>
      </footer>
    </div>
  );
}
