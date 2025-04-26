import type { Route } from "./+types/home";
import { useRef, useState } from "react";

import nrk from "app/assets/nrk.mp4"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Harddd!" }];
}

export default function Hard() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [paused, setPaused] = useState(false);
  
    const handlePlay = () => setPaused(false);
    const handlePause = () => setPaused(true);
  
  return (
    <div className="pt-16 p-4 container mx-auto">
      <a href="/">Home</a>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Hard koded versjon</h1>
      <p className="mb-6">Vi coachene kan hjelpe deg med alt fra idemyldring og koding til spørsmål om meningen med livet (spesielt Sanne hjelper gjerne med sistnevnte 🥳)</p>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Se Nytt på nytt</h2>

        <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
          <video 
            ref={videoRef} 
            src={nrk} 
            controls 
            className="w-full h-auto rounded-lg shadow-lg"
            onPlay={handlePlay}
            onPause={handlePause}
          />

            {paused && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white rounded-lg">

                    <h2 className="text-2xl font-bold mb-4">Paused 🎬</h2>
                    <button
                        onClick={() => videoRef.current?.play()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                    Continue Watching
                    </button>
                </div>
            )}  
      
        </div>
        <p className="mt-2 text-sm text-gray-600">Video fra NRK: Nytt på nytt (2024)</p>
      </div>
    </div>
  );
}

