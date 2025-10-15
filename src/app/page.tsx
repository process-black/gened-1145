import PrismaticBurst from "@/components/reactbits/PrismaticBurst";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      {/* Hero Section */}
      <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-12 sm:min-h-screen sm:px-6 lg:px-0 lg:py-0">
        <div className="relative z-10 w-full">
          {/* Prismatic Background Container - responsive layout */}
          <div className="relative z-10 mx-auto flex w-full min-h-[calc(100svh-6rem)] max-w-xl items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 text-white shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)] ring-1 ring-black/10 dark:ring-white/10 sm:min-h-[32rem] md:max-w-2xl lg:h-[80vh] lg:w-[80vw] lg:max-w-none">
            <div className="absolute inset-0">
              <PrismaticBurst
                intensity={9}
                speed={0.55}
                animationType="hover"
                colors={["#da1072", "#d4ff00", "#000475"]}
                mixBlendMode="lighten"
                rayCount={11}
                hoverDampness={0.25}
                noiseAmount={0.25}
              />
            </div>

            {/* Content with backdrop blur */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center backdrop-blur-xs sm:px-8">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                Learning Lab
              </p>
              <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
                gened 1145
              </h1>
              <p className="mt-6 max-w-xl text-sm text-white/70 sm:text-base">
                the Next.js starter to start with in the Learning Lab. Has Tailwind v4, shadcn/ui, and sample components you may want to use for various LL purposes.
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent via-neutral-100/70 to-neutral-100 dark:via-neutral-950/60 dark:to-neutral-950" />
      </div>

      {/* Scrollable Content Below */}
      <div className="bg-neutral-100 px-8 py-16 text-neutral-800 dark:bg-neutral-950 dark:text-white/80">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white">How This Site Was Made</h2>

          <div className="space-y-6 text-base leading-relaxed">
            <p>
              This template was built as a modern, opinionated starting point for Next.js applications.
              It combines cutting-edge web technologies with beautiful interactive effects to create
              engaging user experiences.
            </p>

            <p>
              The foundation is built on Next.js 15 with the App Router, leveraging React 19&apos;s latest
              features and server components. The styling system uses Tailwind CSS v4 with its new
              inline theme configuration, providing a more streamlined development experience.
            </p>

            <p>
              The interactive background effects come from React Bits, a collection of high-quality
              WebGL components. The Prismatic Burst effect you see above uses OGL (a lightweight
              WebGL library) to create stunning, hardware-accelerated animations that respond to
              mouse movement and provide smooth 60fps performance.
            </p>

            <p>
              Component architecture follows shadcn/ui patterns, with a comprehensive design system
              built on Radix UI primitives. The theming system uses CSS custom properties for
              seamless dark/light mode switching, powered by next-themes.
            </p>

            <p>
              Typography is handled by Inter and Geist Mono fonts, loaded via next/font for optimal
              performance and automatic subsetting. The backdrop blur effects use CSS backdrop-filter
              for that frosted glass aesthetic you see overlaying the prismatic background.
            </p>

            <p>
              The build system leverages Turbopack for faster development and production builds,
              while maintaining compatibility with the broader Next.js ecosystem. ESLint provides
              code quality enforcement with Next.js-specific rules.
            </p>

            <p>
              This template serves as both a functional starting point and a playground for
              experimenting with modern web technologies. Every component is designed to be
              customizable, performant, and accessible.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-100 px-8 py-8 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href="/video-essay/02"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            View Video Essay
          </a>
        </div>
      </footer>
    </div>
  );
}
