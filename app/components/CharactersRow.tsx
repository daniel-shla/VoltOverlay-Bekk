import React from "react";
import { characters } from "../data/characters";
import type { Character } from "../data/characters";

export function CharacterPopup({ character }: { character: Character }) {
  return (
    <div className="w-full h-full max-w-full max-h-full bg-white rounded-lg grid grid-cols-3 grid-rows-2">
      
      {/* Venstre kolonne (bilde, dekker begge rader) */}
      <div className="col-span-1 flex items-center justify-center">
        <img
          src={character.imageSrc}
          alt={character.displayName}
          className="w-full max-w-[250px] aspect-square rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      {/* Øverst til høyre (navn og rolle) */}
      <div className="col-span-2 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          {character.displayName || "Navn Ukjent"}
        </h2>
        <span className="mt-2 text-base font-semibold text-gray-600">
          {character.role}
        </span>
      </div>


      {/* Nederst til høyre (beskrivelse) */}
      <div className="col-span-1 overflow-auto">
        <p className="text-gray-700 whitespace-pre-line text-center">
          {character.description}
        </p>
      </div>

      {/* Nederst til høyre (beskrivelse) */}
      <div className="col-span-2 overflow-auto">
        <p className="text-gray-700 whitespace-pre-line text-center">
          {character.description}
        </p>
      </div>
      
    </div>
  );
}

export default function CharactersRow({ onCharacterClick }: { onCharacterClick?: (character: Character) => void }) {
  return (
    <div className="flex flex-col px-4 py-3 gap-4 rounded-lg shadow-sm mx-auto">
      {characters.map((character) => (
        <div key={character.name} className="flex">
          <button
            onClick={() => onCharacterClick && onCharacterClick(character)}
            className="w-16 h-16 rounded-full overflow-hidden border-4 border-gray-200 shadow hover:shadow-lg transition-shadow focus:outline-none"
          >
            <img
              src={character.imageSrc}
              alt={character.name}
              className="object-cover w-full h-full"
            />
          </button>

        </div>
      ))}
    </div>
  );
} 