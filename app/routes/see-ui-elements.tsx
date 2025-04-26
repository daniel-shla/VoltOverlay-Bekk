import React, { useState } from "react";
import type { Route } from "./+types/home";
import CharactersRow, { CharacterPopup, characters } from "../components/CharactersRow";
import TopicsRow, { TopicPopup, sampleTopics } from "../components/TopicsRow";

export function meta({}: Route.MetaArgs) {
  return [{ title: "See UI Elements" }];
}

export default function SeeUIElements() {
  const [selectedCharacter, setSelectedCharacter] = useState<typeof characters[0] | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<typeof sampleTopics[0] | null>(null);

  const handleCharacterClick = (character: typeof characters[0]) => {
    setSelectedCharacter(character);
    setSelectedTopic(null);
  };
  const handleTopicClick = (topic: typeof sampleTopics[0]) => {
    setSelectedTopic(topic);
    setSelectedCharacter(null);
  };

  // Determine what to show in the popup
  let popupContent = null;
  if (selectedCharacter) {
    popupContent = <CharacterPopup character={selectedCharacter} />;
  } else if (selectedTopic) {
    popupContent = <TopicPopup topic={selectedTopic} />;
  } else {
    popupContent = <CharacterPopup character={characters[0]} />;
  }

  return (
    <div className="pt-16 p-4 container mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">See UI Elements</h1>
      <p>This page will be used as a canvas to develop and showcase UI elements.</p>
      <div className="my-8">
        <h2 className="text-xl font-bold mb-2">CharactersRow</h2>
        <CharactersRow onCharacterClick={handleCharacterClick} />
      </div>
      <div className="my-8">
        <h2 className="text-xl font-bold mb-2">TopicsRow (3 active topics)</h2>
        <TopicsRow topics={sampleTopics.slice(0, 3)} onTopicClick={handleTopicClick} />
      </div>
      <div className="my-8 flex flex-col items-center">
        {popupContent}
      </div>
    </div>
  );
} 