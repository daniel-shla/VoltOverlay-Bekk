import React from "react";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";

const sampleTopics = [
  {
    id: 1,
    title: "Norsk økonomi vokser raskere enn ventet",
    description: `Nye tall fra SSB viser at norsk økonomi har vokst med 3% det siste kvartalet, drevet av økt eksport og høyere oljepriser. Eksperter mener dette kan føre til økt rente fremover.`
  },
  {
    id: 2,
    title: "Ny teknologi skal kutte utslipp i industrien",
    description: `Et nytt prosjekt i Grenland tar i bruk banebrytende karbonfangst-teknologi. Målet er å redusere utslippene med 90% innen 2030, og prosjektet får støtte fra både staten og EU.`
  },
  {
    id: 3,
    title: "Stadig flere unge velger yrkesfag",
    description: `Tall fra Utdanningsdirektoratet viser at andelen elever som søker yrkesfag har økt med 12% på fem år. Dette sees på som positivt for norsk næringsliv og arbeidsmarked.`
  }
];

export function TopicPopup({ topic }: { topic: typeof sampleTopics[0] }) {
  return (
    <div className="mt-8 mx-auto bg-white rounded-lg shadow-lg p-12 max-w-3xl flex flex-col items-center">
      <div className="flex items-center mb-6">
        <QuestionMarkIcon />
        <h2 className="text-3xl font-extrabold text-gray-900 ml-4">{topic.title}</h2>
      </div>
      <p className="text-gray-700 text-center whitespace-pre-line">{topic.description}</p>
    </div>
  );
}

export default function TopicsRow({ topics, onTopicClick }: { topics: typeof sampleTopics, onTopicClick?: (topic: typeof sampleTopics[0]) => void }) {
  return (
    <div className="bg-white inline-flex px-4 py-3 gap-4 rounded-lg shadow-md mx-auto">
      {topics.map((topic) => (
        <div key={topic.id} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer transition-colors" onClick={() => onTopicClick && onTopicClick(topic)}>
          <span className="flex-shrink-0"><QuestionMarkIcon /></span>
          <span className="text-sm font-medium text-gray-800">{topic.title}</span>
        </div>
      ))}
    </div>
  );
}

export { sampleTopics }; 