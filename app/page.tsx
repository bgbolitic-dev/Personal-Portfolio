import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="text-primary">Brian Gabriel Bolitic</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
                IT Student | Aspiring Software Developer
              </p>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
              I'm an Information Technology student passionate
              about programming and exploring new technologies.
              I enjoy learning, solving problems, and developing
              my skills as I work toward becoming a software developer.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact">
                <Button size="lg" className="px-8">
                  Contact Me
                </Button>
              </Link>

              <Link href="/about">
                <Button size="lg" variant="outline" className="px-8">
                  About Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4]">
              <Image
                src="/pic2.png"  
                alt="Profile photo"
                fill
                className="object-cover object-top rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}