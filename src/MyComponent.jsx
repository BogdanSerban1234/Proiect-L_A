import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { cn } from "@/lib/utils";
import { CanvasText } from "@/components/ui/canvas-text";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  IconAccessPoint,
  IconAd,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNews,
  IconNewSection,
  IconNewsOff,
  IconTerminal2,
  IconBrandReact,
} from "@tabler/icons-react";
export function DottedGlowBackgroundDemoSecond() {
  const links = [
    {
      title: "Pagina principală",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    //{
    //  title: "Products",
    //  icon: (
    //    <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //  ),
    //  href: "#",
    //},
    {
      title: "Blog",
      icon: (
        <IconNews className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#blog",
    },
    //{
    //  title: "Aceternity UI",
    //  icon: (
    //    <img
    //      src="https://assets.aceternity.com/logo-dark.png"
    //      width={20}
    //      height={20}
    //     alt="Aceternity Logo"
    //    />
    //  ),
    //  href: "#",
    //},
    //{
    //  title: "Changelog",
    //  icon: (
    //    <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //  ),
    //  href: "#",
    //},
 
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
  <div className="bg-black">
    <div className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={20}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-black via-black/80 to-transparent" />
      {/* Centered layout container */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 scale-125 origin-bottom">
        <FloatingDock items={links} />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-6 px-8 py-16 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-6 text-center">
          
          {/* 2. Titlul principal: Mare, bold, cu gradient argintiu/metalic */}
          <CanvasText
            text="Importanța AI-ului"
            className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl font-['Bahnschrift']"
            backgroundClassName="bg-blue-600 dark:bg-blue-700"
            colors={[
              "rgba(0, 153, 255, 1)",
              "rgba(0, 153, 255, 0.9)",
              "rgba(0, 153, 255, 0.8)",
              "rgba(0, 153, 255, 0.7)",
              "rgba(0, 153, 255, 0.6)",
              "rgba(0, 153, 255, 0.5)",
              "rgba(0, 153, 255, 0.4)",
              "rgba(0, 153, 255, 0.3)",
              "rgba(0, 153, 255, 0.2)",
              "rgba(0, 153, 255, 0.1)",
            ]}
            lineGap={4}
            animationDuration={20}
          />
          {/*<h1 className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-5xl font-['Bahnschrift'] tracking-tighter text-transparent sm:text-6xl md:text-7xl">
            Importanța AI-ului
          </h1>*/}

          {/* 3. Subtitlu subtil și aerisit */}
          <p className="max-w-md text-base font-light tracking-wide text-neutral-400 sm:text-lg">
            Proiect realizat de IX-a A de la liceul UMFST.
          </p>

          <div className="pt-6">
            <div className="flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              <span className= "text-blue-400">Poți da scroll în jos</span>
              <span className="text-base text-white-400">↓</span>
            </div>
          </div>
        </div>
      </div>
    </div> {/* <-- Primul container se închide aici, oprind DottedGlowBackground */}

    {/*<div className="h-[14rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h3 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Blog
      </h3>
      <div className="w-[40rem] h-40 relative">
        
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    *\}
    {/* Secțiunea de blog este acum complet afară și își păstrează fundalul propriu */}
    <div className="relative flex flex-col w-full items-center justify-center bg-white dark:bg-black">
      
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        <section id="blog" className="rounded-3xl min-h-screen bg-neutral-900 text-white p-8 relative overflow-hidden">
        <div className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "pointer-events-none z-0",
        )}
        
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-neutral-900"></div>
          <h1 className="text-6xl font-bold h-[5rem] text-center relative z-1">Blog</h1>
          <div className="h-[5rem]">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <p className="text-base sm:text-xl text-black mb-2 dark:text-neutral-200">
                Website creat
              </p>
      
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Am creat website-ul pentru proiect folosind React{" "}
                <IconBrandReact className="inline-block h-5 w-5 text-[#00d8ff] align-middle mx-1" />{" "}
                și arată destul de bine!
              </p>
            </BackgroundGradient>
          </div>
          {/*<h2 className="text-3xl font-bold">Articole</h2>*/}
        </section>
      </p>
    </div>
    
  </div>
);
}

export default DottedGlowBackgroundDemoSecond;