import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function DottedGlowBackgroundDemoSecond() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
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

      {/* Centered layout container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-6 px-8 py-16 text-center">
        <div className="mx-auto max-w-lg text-center space-y-3">
        {/* Titlul principal */}
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
          Importanța AI-ului
        </h1>

        {/* Subtitlul / autorii */}
        <p className="text-base text-neutral-600 dark:text-neutral-300">
          un proiect realizat de a IX-a A UMFST
        </p>

        {/* Indicația de scroll (text mai mic și subtil) */}
        <p className="text-xs tracking-wider text-neutral-400 dark:text-neutral-500">
          ↓ Poți da scroll în jos ↓
        </p>
      </div>

        
      </div>
    </div>
  );
}

export default DottedGlowBackgroundDemoSecond;