import { Footer } from "../components/Footer";
import { Navbar } from "../components/navbar";

export function Landing() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#1a1a1a] text-white">
      <Navbar />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 pb-12 lg:pb-24">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Elevate Your Chess Game
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl py-4">
                  Explore our world-class chess platform and take your skills to
                  the next level.
                </p>
                <div className="mt-6">
                  <div className="inline-flex h-10 items-center justify-center rounded-md bg-lime-600 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="chess.webp"
                  className="max-h-96 drop-shadow-sm shadow-inner rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#242424]">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Chess Potential
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive chess platform and take your game to
                  new heights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Online Chess Games</h3>
                <p className="text-sm text-muted-foreground">
                  Challenge players from around the world in real-time chess
                  matches.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Chess Lessons</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from expert instructors and improve your chess strategy.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Community Forum</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow chess enthusiasts and share your passion.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalized Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Receive tailored recommendations to enhance your chess
                  journey.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Tournaments</h3>
                <p className="text-sm text-muted-foreground">
                  Compete in exciting tournaments and test your skills against
                  the best.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Chess Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Dive deep into your gameplay data and track your progress.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
