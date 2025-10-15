"use client";

import { ScrollVideo } from "@/components/ScrollVideo";

const clips = [
  {
    id: "000",
    src: "/videos/godzilla-random-3/clip_000.webm",
    title: "Rising from the Depths",
    summary:
      "Godzilla emerges from Tokyo Bay, a creature born from the atomic age, dragging the ocean's darkness onto the land.",
    notes: [
      "Director Ishirō Honda deliberately frames Godzilla's entrance to echo newsreel footage of hydrogen bomb tests at Bikini Atoll. The cascading water and towering silhouette mirror the mushroom cloud that haunted Japanese consciousness.",
      "This emergence represents the breakdown of natural boundaries—the sea, which had isolated and protected Japan for millennia, now delivers destruction. The monster is both invader and consequence, a physical manifestation of atomic contamination crossing oceanic borders.",
      "Released just nine years after Hiroshima and months after the Lucky Dragon 5 fishing boat was irradiated by American nuclear testing, audiences would have immediately recognized this as allegory for radiation—invisible, oceanic, and inevitable.",
    ],
  },
  {
    id: "001",
    src: "/videos/godzilla-random-3/clip_001.webm",
    title: "The Futility of Force",
    summary:
      "Military cannons train on the approaching monster—sleek instruments of conventional warfare facing an unconventional threat.",
    notes: [
      "Honda's camera lingers on military hardware with almost documentary precision, but this reverence is ironic. These weapons represent Japan's newly formed Self-Defense Forces, created under American occupation just two years before the film's release.",
      "The film critiques Cold War military logic: if the monster is atomic radiation made flesh, conventional artillery is philosophically absurd. You cannot shoot radioactive fallout. The weapons are theater, a performance of control in the face of uncontrollable consequences.",
      "Cinematographer Masao Tamai uses low angles to emphasize the weapons' power, only to undercut that power moments later. This visual strategy mirrors the film's central argument—postwar Japan armed itself for the wrong kind of war.",
    ],
  },
  {
    id: "002",
    src: "/videos/godzilla-random-3/clip_002.webm",
    title: "Electric Skin, Atomic Memory",
    summary:
      "High-voltage barriers discharge across Godzilla's body in cascading blue-white arcs—electricity transformed into spectacle and futility.",
    notes: [
      "Japan's postwar reconstruction centered on electrification. By 1954, Tokyo's neon-lit streets symbolized recovery and modernity. Honda weaponizes this symbol: the electrical barrier—a pinnacle of applied science—becomes fireworks against Godzilla's hide.",
      "Special effects director Eiji Tsuburaya choreographed these sparks to reference atomic detonation photography. The electrical discharge mimics the ionization patterns visible in high-speed footage of nuclear blasts, creating a visual rhyme between defensive technology and the weapon that necessitated it.",
      "Scholar Chon Noriega notes that this scene transforms infrastructure into memorial. The power grid, meant to illuminate the rebuilt city, instead illuminates the monster—a reminder that the energy powering modern Japan shares conceptual DNA with the bombs that destroyed it.",
    ],
  },
  {
    id: "003",
    src: "/videos/godzilla-random-3/clip_003.webm",
    title: "Infrastructure as Battlefield",
    summary:
      "Power pylons collapse like falling soldiers, their cables trailing across the rubble—civilian infrastructure reimagined as frontline fortification.",
    notes: [
      "Honda deliberately conflates electrical towers with wartime imagery. The toppling pylons echo newsreel footage of air raids, when American firebombing destroyed Tokyo's industrial base. For 1954 audiences, falling power lines would trigger visceral memories of the March 1945 bombing that killed over 100,000 civilians.",
      "The film visualizes a disturbing continuity: the same infrastructure that powered Japan's wartime factories now powers its reconstruction, and both iterations prove equally vulnerable. The electrical grid becomes a palimpsest—postwar optimism written over wartime trauma, now being erased again.",
      "Historian John Dower describes postwar Japan as a nation rebuilding under occupation, its infrastructure shaped by both American aid and American strategic interests. These falling towers represent that ambivalence—are they Japanese, American, or symbiotically both? And when they fall, whose failure is it?",
    ],
  },
  {
    id: "004",
    src: "/videos/godzilla-random-3/clip_004.webm",
    title: "Witnesses to Ruin",
    summary:
      "Smoke drifts through the skeletal remains of transformers as workers stand motionless, bearing witness to a destruction they cannot yet comprehend.",
    notes: [
      "Honda frames these workers as contemporary witnesses, echoing survivor testimonies from Hiroshima and Nagasaki. Atomic bomb survivors—hibakusha—frequently described twisted electrical infrastructure among their first memories of the aftermath. Honda gives that testimony cinematic form.",
      "The lingering shot resists Hollywood's pacing conventions. American monster films cut quickly through destruction; Honda's camera waits, forcing viewers to inhabit the shocked stillness that follows catastrophe. This is the tempo of trauma—suspended, recursive, unable to move forward.",
      "Film theorist Linda Williams calls this 'the cinema of witness,' where the camera becomes an ethical instrument. By holding on these workers, Honda implicates the audience: we are not distant consumers of spectacle but participants in collective memory. To watch is to remember, and to remember is a civic duty.",
    ],
  },
  {
    id: "005",
    src: "/videos/godzilla-random-3/clip_005.webm",
    title: "The Choreography of Panic",
    summary:
      "Civilians flee through streets lit by emergency flares, their movements orchestrated by air-raid sirens that belonged to a war supposedly finished.",
    notes: [
      "Postwar Japan conducted regular civil defense drills, training citizens for threats that remained officially unnamed. Honda transforms these drills into prophecy—the practiced choreography of evacuation now deployed against a disaster that exceeds all preparation.",
      "Sound designer Ichirō Saitō layers Akira Ifukube's thundering score with air-raid sirens, collapsing temporal boundaries. The sirens evoke wartime bombings while soundtracking a contemporary crisis, suggesting trauma operates outside linear time. For Honda, the war never truly ended; it merely changed form.",
      "Urban planner Kenzō Tange was redesigning Tokyo while this film was in production, proposing bold megastructures to replace the city's wooden fragility. Honda's destruction sequences subtly critique this optimism—the new concrete Tokyo proves as vulnerable as the old. Modernity offers no immunity to catastrophe.",
    ],
  },
  {
    id: "006",
    src: "/videos/godzilla-random-3/clip_006.webm",
    title: "The Sound of Apocalypse",
    summary:
      "Godzilla's roar—a processed contrabass scraped with resin gloves—merges with the mechanical death-rattle of failing power systems.",
    notes: [
      "Composer Akira Ifukube created Godzilla's roar by scraping a resin-coated leather glove down a contrabass string, then slowing the recording. The result sounds simultaneously organic and industrial, nature and machine locked in agonized synthesis. This is radiation's voice: unnatural nature.",
      "Sound theorist Michel Chion calls this 'acousmatic sound'—noise whose source remains visually uncertain, creating uncanny dread. Godzilla's roar bleeds into sirens, explosions, and mechanical hums until the soundscape becomes indistinguishable layers of catastrophe. We cannot isolate the monster from the infrastructure it destroys.",
      "Ifukube was a scientist before becoming a composer, trained in forestry and ecology. His score understands disaster as systems collapse—not singular explosions but cascading failures where natural and technological elements fall into destructive resonance.",
    ],
  },
  {
    id: "007",
    src: "/videos/godzilla-random-3/clip_007.webm",
    title: "City as Labyrinth",
    summary:
      "Tokyo's grid dissolves into rubble-maze, the modern city revealing its provisional nature, its fragile imposition on ancient geography.",
    notes: [
      "Honda shoots the ruins in ways that emphasize verticality lost—buildings now rubble, streets now craters. This inverts Tokyo's modernist aspiration toward height and density, returning urban space to horizontal chaos. The city regresses to geological time.",
      "Architectural historian Rem Koolhaas notes that Tokyo has been destroyed and rebuilt repeatedly—earthquakes, fires, bombs, and economic shocks. Each iteration promises permanence; each proves temporary. Honda's Godzilla makes this impermanence literal: the city as palimpsest, perpetually overwriting itself.",
      "Yet Honda includes human figures navigating the ruins, suggesting resilience is not triumphant reconstruction but daily persistence through ongoing precarity. This is not Hollywood's heroic survival but something quieter—the mundane courage of continuing when nothing guarantees tomorrow.",
    ],
  },
  {
    id: "008",
    src: "/videos/godzilla-random-3/clip_008.webm",
    title: "Sublime Terror",
    summary:
      "Godzilla dominates the frame in full verticality—a mountain that moves, a natural disaster with intentionality and rage.",
    notes: [
      "Tsuburaya's miniature work achieves what film scholar Tom Gunning calls 'the cinema of attractions'—spectacle that overwhelms narrative, demanding pure visceral response. Godzilla's scale creates visual sublime: beauty inseparable from terror, awe from annihilation.",
      "The monster's design combines dinosaur anatomy with keloid scars, its skin textured to evoke radiation burns. Suit actor Haruo Nakajima moves with deliberate weight, each step a seismic event. Godzilla is not fast or agile—it doesn't need to be. Inevitability is its weapon.",
      "Philosopher Edmund Burke defined the sublime as beauty that threatens to destroy the observer. Honda gives us technological sublime inverted—not human engineering inspiring awe but human engineering revealing its puniness. The monster exposes modernity's existential joke: we built cities radiation could erase.",
    ],
  },
  {
    id: "009",
    src: "/videos/godzilla-random-3/clip_009.webm",
    title: "The Failure of Force",
    summary:
      "Tanks lie overturned, their cannons bent skyward at useless angles—monuments to the inadequacy of conventional military power.",
    notes: [
      "Honda served in the Imperial Army during WWII, witnessing Japan's militaristic ideology collapse into atomic surrender. This scene channels that experience: military hardware as expensive theater, its true function not defense but psychological reassurance—a reassurance now shattered.",
      "The film premiered during intense debate over Japan's rearmament under American pressure. Article 9 of Japan's constitution renounced war, yet the Self-Defense Forces were forming. Honda asks: against what threat? If the enemy is radioactive consequence, weapons are category error—moral failure dressed as pragmatism.",
      "American monster films end with military victory; Godzilla denies that catharsis. The monster survives every assault, forcing viewers toward uncomfortable conclusion: some problems cannot be shot. This was radical cinema in 1954, when Cold War logic insisted sufficient firepower solved everything.",
    ],
  },
  {
    id: "010",
    src: "/videos/godzilla-random-3/clip_010.webm",
    title: "The Weight of Silence",
    summary:
      "Dust settles in shafts of moonlight; the soundscape empties except for distant weeping and the crackle of dying fires.",
    notes: [
      "Ifukube's score withdraws completely, a bold choice in 1950s cinema that typically buried silence under orchestration. The absence forces attention to diegetic sound—crackling embers, settling debris, human grief. This is documentary audio imposed on fantasy narrative.",
      "Sound studies scholar Murray Schafer coined 'soundscape' to describe acoustic environments as cultural texts. Honda's post-destruction soundscape quotes the acoustic aftermath of air raids—sounds burned into survivor memory. The film transforms individual trauma into collective recognition.",
      "The silence also indicts. In pausing destruction, Honda creates space for moral reckoning: who built the weapons that birthed this monster? Who profits from the technologies that endanger cities? Silence here is not peace but accusation waiting for response.",
    ],
  },
  {
    id: "011",
    src: "/videos/godzilla-random-3/clip_011.webm",
    title: "Faces in Firelight",
    summary:
      "Survivors emerge from shelters to find their city transformed into unfamiliar terrain, their expressions caught between shock and determination.",
    notes: [
      "Honda populates his disaster with individual faces rather than anonymous crowds—a technique borrowed from Italian neorealism. Each face becomes a site of witness, transforming spectacular destruction into intimate trauma. We see people seeing catastrophe.",
      "The firelight recalls Buddhist imagery of the burning house, a parable about spiritual awakening through crisis. But Honda secularizes the metaphor: there is no transcendent meaning here, only humans confronting contingency. Awakening offers no comfort, merely clarity about vulnerability.",
      "Cultural memory theorist Marianne Hirsch calls this 'postmemory'—how subsequent generations inherit trauma through images and stories. Honda constructs Godzilla as postmemory machine, encoding atomic survivor experience into popular cinema where it can propagate across time and borders.",
    ],
  },
  {
    id: "012",
    src: "/videos/godzilla-random-3/clip_012.webm",
    title: "Ambiguous Dawn",
    summary:
      "Sunrise illuminates the wreckage with cold clarity—not renewal but revelation of the full scope of loss and the uncertain labor of rebuilding.",
    notes: [
      "Honda refuses Hollywood's redemptive ending. Dawn brings not hope but inventory—counting the dead, measuring destruction, contemplating reconstruction without guarantee of safety. This is pragmatic resilience, not optimistic resolution.",
      "The final image holds on ruins rather than survivors, emphasizing material consequence over human spirit. Infrastructure destroyed must be rebuilt, but Honda offers no montage of triumphant construction. Rebuilding happens off-screen, slow and uncertain, because that's how trauma actually resolves: incompletely.",
      "Godzilla ultimately retreats to the ocean, undefeated. This open ending haunted Japanese cinema for decades—the monster could return, radiation's threat persists. Honda understands that nuclear fear is permanent condition, not solvable problem. We live in Godzilla's world still, building cities under that knowledge.",
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
