"use client";

import { ScrollVideo } from "@/components/ScrollVideo";

const clips = [
  {
    id: "000",
    src: "/videos/godzilla-random-3/clip_000.webm",
    title: "Rising from the Depths",
    summary:
      "Godzilla heaves out of the dark surf, water sluicing off the plates that first revealed the monster to postwar audiences.",
    notes: [
      "The shot mirrors newsreel footage from Pacific nuclear tests where man-made blasts thrust plumes from the ocean.",
      "Emerging from water signals the breach of maritime borders and foreshadows how coastal defenses will fall in minutes.",
    ],
  },
  {
    id: "001",
    src: "/videos/godzilla-random-3/clip_001.webm",
    title: "Artillery in Focus",
    summary:
      "A massive tank cannon dominates the frame, its barrel locked on Godzilla in a rare close-up of human firepower.",
    notes: [
      "The Self-Defense Forces were barely a year old; showcasing heavy artillery underscored Japan's uneasy return to militarisation.",
      "The clean, deliberate framing of the cannon contrasts with the chaos behind it, hinting that technical precision alone cannot halt the creature.",
    ],
  },
  {
    id: "002",
    src: "/videos/godzilla-random-3/clip_002.webm",
    title: "Electrical Fury, Atomic Memory",
    summary:
      "The power grid ignites around Godzilla, surging arcs that cling to his scales like makeshift reactor flare.",
    notes: [
      "Honda had recently filmed Bikini Atoll tests; the charged silhouette echoes those irradiated recordings.",
      "Electricity meant to restrain the beast instead recalls the nuclear violence that created him, binding civil infrastructure to wartime trauma.",
    ],
  },
  {
    id: "003",
    src: "/videos/godzilla-random-3/clip_003.webm",
    title: "Power Lines as Battlements",
    summary:
      "Godzilla rips through pylons while searchlights and shells streak along the same sight lines as high voltage cables.",
    notes: [
      "The fence fuses civilian power with military defense, turning utility poles into improvised fortifications.",
      "Viewers who endured wartime blackouts would have recognised the fragility of these lines and the darkness that follows their fall.",
    ],
  },
  {
    id: "004",
    src: "/videos/godzilla-random-3/clip_004.webm",
    title: "After the Surge",
    summary:
      "Smoke coils around toppled transformers while emergency crews stare into the glow of a countryside gone dark.",
    notes: [
      "Survivors from Hiroshima and Nagasaki often recalled snarled power lines; Honda channels that imagery to bind fiction to history.",
      "By ending on workers and civilians rather than the monster, the film insists that rebuilding the grid is a communal obligation.",
    ],
  },
];

const VideoEssayPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Godzilla and the Electric City
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A scrollable close reading of the 1954 film&apos;s power-station assault, tracking how electricity, military force,
            and nuclear memory entwine on screen.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Move through each clip to see how Toho&apos;s monster cinema translated postwar technological hopes and anxieties into
            incandescent spectacle.
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
        <section key={`clip-section-${clip.id}`} className="px-6 py-24">
          <ScrollVideo
            videoSrc={clip.src}
            containerClassName="h-[200vh]"
            stickyClassName="top-24"
            renderContent={({ video }) => (
              <div className="mx-auto h-[60vh] lg:h-[70vh] max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 items-center">
                <div className="h-full order-2 lg:order-1" key={`${clip.id}-video`}>
                  <div className="h-full rounded-3xl border border-border shadow-2xl overflow-hidden">{video}</div>
                </div>
                <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left" key={`${clip.id}-text`}>
                  <span className="text-sm uppercase tracking-[0.4em] text-primary">
                    Sequence {index + 1}
                  </span>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">{clip.title}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground">{clip.summary}</p>
                  </div>
                  <div className="grid gap-4 text-sm text-muted-foreground">
                    {clip.notes.map((note, noteIndex) => (
                      <p key={`${clip.id}-note-${noteIndex}`}>{note}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          />
        </section>
      ))}

      {/* End Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Further Viewing & Reading
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Extend the inquiry beyond this power-station assault with scholarship that ties Godzilla to Cold War urbanism,
            energy politics, and cultural memory.
          </p>
          <div className="grid gap-4 text-sm text-muted-foreground">
            <p>
              - Susan Napier, <em>Anime from Akira to Howl&apos;s Moving Castle</em> -- frames Godzilla within Japan&apos;s evolving
              technology narratives.
            </p>
            <p>
              - Ian Condry, <em>The Soul of Anime</em> -- explores collaborative production cultures that informed Toho&apos;s
              visual effects teams.
            </p>
            <p>
              - Kyoko Hirano, <em>Mr. Smith Goes to Tokyo</em> -- documents US occupation censorship and the postwar media
              environment that shaped Honda&apos;s choices.
            </p>
            <p>
              - Visit the Ghibli Museum Library notes on Eiji Tsuburaya&apos;s special effects to see how electrical spectacle
              becomes cinematic language.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEssayPage;
