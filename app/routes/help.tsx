import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Hjelp!" }];
}

export default function Help() {
  return (
    <div className="pt-16 p-4 container mx-auto">
      <a href="/">Home</a>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Trenger du hjelp?</h1>
      <p className="mb-6">Vi coachene kan hjelpe deg med alt fra idemyldring og koding til spørsmål om meningen med livet (spesielt Sanne hjelper gjerne med sistnevnte 🥳)</p>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Se Nytt på nytt</h2>
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
          <iframe 
            src="https://tv.nrk.no/serie/nytt-paa-nytt/sesong/2025/episode/MUHH50001525" 
            className="absolute top-0 left-0 w-full h-full" 
            allowFullScreen 
            title="Nytt på nytt" 
            frameBorder="0"
          ></iframe>
        </div>
        <p className="mt-2 text-sm text-gray-600">Video fra NRK: Nytt på nytt (2024)</p>
      </div>
    </div>
  );
}
