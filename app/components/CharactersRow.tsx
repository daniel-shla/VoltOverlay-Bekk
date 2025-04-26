import React from "react";

const characters = [
  {
    name: "Pitch-forlag-2021-WEB-Foto-Svein-Finneide-1-e1637242609214.jpg",
    src: "/Characters/Pitch-forlag-2021-WEB-Foto-Svein-Finneide-1-e1637242609214.jpg",
    displayName: "Svein Finneide",
    description: `Svein Finneide er en kjent norsk fotograf, kjent for sine portretter og arbeid med forlag. Han har bidratt til en rekke utgivelser og er anerkjent for sitt unike blikk for mennesker.

Han har jobbet med flere store prosjekter innen norsk kultur og litteratur, og hans bilder har prydet forsider og utstillinger over hele landet. Svein er også kjent for sitt engasjement i å fremme unge talenter innen fotografi.

I tillegg til sitt kunstneriske arbeid, holder han jevnlig foredrag og workshops, og er en ettertraktet mentor for nye fotografer. Hans dedikasjon til faget har gjort ham til en sentral skikkelse i det norske fotomiljøet.`,
  },
  {
    name: "John_Andresen_arbeider_124.jpg",
    src: "/Characters/John_Andresen_arbeider_124.jpg",
    displayName: "John Andresen",
    description: `John Andresen er en norsk kunstner og arbeider, kjent for sitt engasjement i lokalsamfunnet og sitt kreative virke innen visuell kunst.

Han har deltatt i flere nasjonale og internasjonale utstillinger, og hans arbeider er representert i både private og offentlige samlinger. John er også aktiv i ulike kunstprosjekter som fremmer samarbeid og inkludering.

Gjennom sitt virke har han inspirert mange unge kunstnere, og han er ofte invitert som gjesteforeleser ved kunstskoler og institusjoner.`,
  },
  {
    name: "80465601.webp.jpeg",
    src: "/Characters/80465601.webp.jpeg",
    displayName: "Ukjent Person",
    description: `Denne personen er foreløpig ukjent, men har bidratt til prosjektet på en viktig måte.

Vedkommende har vært en sentral støttespiller bak kulissene, og har sørget for at alt har gått knirkefritt underveis. Uten denne innsatsen ville ikke prosjektet vært det samme.

Vi håper å kunne presentere mer informasjon om denne personen i fremtiden, da deres bidrag har vært uvurderlig for teamet.`,
  },
  {
    name: "JAT5JOVRLLAFIHSMM67RGT4KZ4.jpg",
    src: "/Characters/JAT5JOVRLLAFIHSMM67RGT4KZ4.jpg",
    displayName: "Mystisk Deltaker",
    description: `En mystisk deltaker som nylig har blitt en del av prosjektet. Lite er kjent om bakgrunnen, men innsatsen har allerede gjort inntrykk på teamet.`
  },
  {
    name: "Screenshot_2025-04-26_13-32-33.png",
    src: "/Characters/Screenshot_2025-04-26_13-32-33.png",
    displayName: "Ny Deltaker",
    description: `En ny deltaker har blitt med i prosjektet. Bildet ble tatt under en viktig hendelse i april 2025.`
  },
];

export function CharacterPopup({ character }: { character: typeof characters[0] }) {
  return (
    <div className="mt-8 mx-auto bg-white rounded-lg shadow-lg p-12 max-w-3xl flex flex-col items-center">
      <img
        src={character.src}
        alt={character.displayName}
        className="w-80 h-80 rounded-full object-cover border-4 border-gray-200 mb-6"
      />
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">{character.displayName || "Navn Ukjent"}</h2>
      <p className="text-gray-700 text-center whitespace-pre-line">{character.description}</p>
    </div>
  );
}

export default function CharactersRow({ onCharacterClick }: { onCharacterClick?: (character: typeof characters[0]) => void }) {
  return (
    <div className="bg-white inline-flex px-4 py-3 gap-4 rounded-lg shadow-md mx-auto">
      {characters.map((character) => (
        <div key={character.name} className="flex flex-col items-center">
          <button
            onClick={() => onCharacterClick && onCharacterClick(character)}
            className="w-16 h-16 rounded-full overflow-hidden border-4 border-gray-200 shadow hover:shadow-lg transition-shadow focus:outline-none"
          >
            <img
              src={character.src}
              alt={character.name}
              className="object-cover w-full h-full"
            />
          </button>
          <span className="mt-2 text-sm font-medium text-gray-800">
            {character.displayName || "Navn Ukjent"}
          </span>
        </div>
      ))}
    </div>
  );
}

export { characters }; 