"use client";

import { ScrollVideo } from "@/components/ScrollVideo";

const clips = [
  {
    id: "000",
    src: "/videos/godzilla-random-3/clip_000.webm",
    title: "Rising from the Depths",
    summary:
      "Godzilla heaves out of the dark surf, water cascading from scale plates that once felt like science-fiction made real.",
    notes: [
      "The entrance references Pacific nuclear test footage where water columns announce an unseen blast.",
      "Emerging from the sea marks the moment when maritime borders fail and the island suddenly feels exposed.",
      "Use this clip to introduce the larger essay topic and signal recurring motifs you want viewers watching for.",
    ],
  },
  {
    id: "001",
    src: "/videos/godzilla-random-3/clip_001.webm",
    title: "Artillery in Focus",
    summary:
      "A tank-borne cannon fills the frame, its sleek barrel framing the void where Godzilla will soon appear.",
    notes: [
      "Close focus on military hardware acts as a stand-in for human resolve and its limits.",
      "Consider adding production trivia here: the crew used miniature optics to sell the weapon's scale.",
      "You can balance technical commentary with emotional reaction shots gathered from the surrounding scene.",
    ],
  },
  {
    id: "002",
    src: "/videos/godzilla-random-3/clip_002.webm",
    title: "Electrical Fury, Atomic Memory",
    summary:
      "Defensive currents surge across Godzilla's hide, sparking like a reactor about to breach containment.",
    notes: [
      "The charged silhouette mirrors newsreel images from Bikini Atoll and other hydrogen tests.",
      "Use this moment to bridge electricity with nuclear dread, even if the essay later pivots elsewhere.",
      "If you plan interviews or citations, note who first linked these visuals to atomic trauma.",
    ],
  },
  {
    id: "003",
    src: "/videos/godzilla-random-3/clip_003.webm",
    title: "Power Lines as Battlements",
    summary:
      "Pylons topple while searchlights track vainly across the skyline, binding utility grids to battlefield imagery.",
    notes: [
      "Every snapped cable doubles as barbed wire, showing how civilian space becomes militarised in an instant.",
      "Insert local history: Tokyo residents remembered wartime blackouts when lines like these fell.",
      "Prompt readers to consider how infrastructure reveals a nation's priorities during crisis.",
    ],
  },
  {
    id: "004",
    src: "/videos/godzilla-random-3/clip_004.webm",
    title: "After the Surge",
    summary:
      "Smoke hangs over silent transformers while emergency crews watch the glow drain from the horizon.",
    notes: [
      "Eyewitness accounts from Hiroshima and Nagasaki often start with descriptions of ruined power lines.",
      "The camera lingers on workers, reminding the audience reconstruction is a communal task.",
      "List any archival sources or interviews you might weave into this section of the essay.",
    ],
  },
  {
    id: "005",
    src: "/videos/godzilla-random-3/clip_005.webm",
    title: "Civic Disruption",
    summary:
      "Crowds scatter beneath the wash of emergency sirens while distant explosions turn the skyline electric white.",
    notes: [
      "This is a good space for sociological observations about evacuation drills and postwar urban planning.",
      "Capture sensory details: the sirens, the smoke, the rhythm of footsteps overriding the score.",
      "Leave yourself a note about any comparative films or disasters you plan to cite here.",
    ],
  },
  {
    id: "006",
    src: "/videos/godzilla-random-3/clip_006.webm",
    title: "Echoes and Reverberations",
    summary:
      "Waves of light ripple through the smokey night as Godzilla&apos;s roar overlaps with the hum of failing generators.",
    notes: [
      "Sound design becomes thesis material: the monster&apos;s call mingles with industrial machinery and alarm bells.",
      "Propose questions for further research, such as how later Godzilla films reuse this sonic palette.",
      "Remind yourself to mention preservation status or restoration facts if you are building a digital exhibit.",
    ],
  },
  {
    id: "007",
    src: "/videos/godzilla-random-3/clip_007.webm",
    title: "Urban Resilience",
    summary:
      "The cityscape transforms into a maze of rubble and shadow, yet signs of human persistence flicker at the margins.",
    notes: [
      "Track how the film shows ordinary people navigating extraordinary danger, emphasizing communal bonds.",
      "Note architectural details that ground the action in recognizable Tokyo districts.",
      "Consider linking this to historical accounts of postwar reconstruction and urban renewal.",
    ],
  },
  {
    id: "008",
    src: "/videos/godzilla-random-3/clip_008.webm",
    title: "The Monster Ascendant",
    summary:
      "Godzilla towers against a backdrop of collapsing infrastructure, embodying nature&apos;s indifference to human ambition.",
    notes: [
      "The scale contrast between creature and city highlights humanity&apos;s vulnerability.",
      "Explore how special effects teams achieved this perspective through miniatures and forced perspective.",
      "Reflect on why kaiju cinema resonated so deeply with audiences in the 1950s.",
    ],
  },
  {
    id: "009",
    src: "/videos/godzilla-random-3/clip_009.webm",
    title: "Technological Overreach",
    summary:
      "Military hardware lies twisted and smoking, a testament to the limits of conventional weaponry.",
    notes: [
      "This moment critiques Cold War arms races and the illusion of technological supremacy.",
      "Compare this scene to other disaster films that question military solutions.",
      "Include notes on how the film&apos;s anti-war message was received domestically and internationally.",
    ],
  },
  {
    id: "010",
    src: "/videos/godzilla-random-3/clip_010.webm",
    title: "Silence and Aftermath",
    summary:
      "The destruction pauses, leaving only dust and the distant wail of survivors calling across the ruins.",
    notes: [
      "Moments of quiet in kaiju films often carry the most emotional weight.",
      "Document how Honda uses silence to contrast with the chaos, creating space for reflection.",
      "Link to survivor narratives from actual disasters to ground the fictional event.",
    ],
  },
  {
    id: "011",
    src: "/videos/godzilla-random-3/clip_011.webm",
    title: "Witness and Memory",
    summary:
      "Bystanders gather at the edge of the devastation, their faces illuminated by firelight and uncertainty.",
    notes: [
      "The film positions viewers as witnesses, implicating them in the disaster&apos;s moral questions.",
      "Analyze how camera angles and framing create empathy and distance simultaneously.",
      "Explore the role of collective memory in shaping how cultures process trauma through cinema.",
    ],
  },
  {
    id: "012",
    src: "/videos/godzilla-random-3/clip_012.webm",
    title: "Dawn After Destruction",
    summary:
      "Morning light reveals the full scope of the night&apos;s terror, yet also hints at the possibility of renewal.",
    notes: [
      "Endings in Honda&apos;s work often resist simple resolution, favoring ambiguity and ongoing struggle.",
      "Consider how this final image relates to Japan&apos;s postwar identity and future aspirations.",
      "Leave space for concluding thoughts about the essay&apos;s larger arguments and their contemporary relevance.",
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
