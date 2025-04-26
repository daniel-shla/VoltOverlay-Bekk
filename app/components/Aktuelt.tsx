import React, { useEffect } from "react";

// Import the manus data directly to avoid import issues
const manusData = {
  "segments": [
    {
      "title": "Start",
      "timeStart": "0:00",
      "timeEnd": "0:45",
      "topics": [
        {
          "theme": "Intro",
          "question": "Introduksjon til programmet"
        }
      ]
    },
    {
      "title": "News Monologue",
      "timeStart": "0:45",
      "timeEnd": "3:00",
      "topics": [
        {
          "theme": "Antibiotika-resistens",
          "question": "En viktig sak hvor norske kyr har blitt smittet av antibiotikaresistente bakterier. Hva er konsekvensene av dette for landbruket og helsesystemet?"
        },
        {
          "theme": "Julekalender",
          "question": "Erna Solberg åpner første luke. Hvordan fungerer julekalendere i Norge, og hva kan de fortelle oss om kultur og tradisjoner?"
        },
        {
          "theme": "Krisemøte og alkohol",
          "question": "Politiet besøker statsministerens krisemøte og oppdager en overraskende mengde alkohol. Hva er bakgrunnen for slike møter, og hva innebærer det for våre ledere?"
        }
      ]
    },
    {
      "title": "Politics",
      "timeStart": "3:00",
      "timeEnd": "10:00",
      "topics": [
        {
          "theme": "Regjeringsforhandlinger",
          "question": "Venstre og KrF bryter forhandlingene. Erna Solberg omtaler situasjonen som mer en \"samtaleterapi\" enn faktiske forhandlinger. Hva er konsekvensene av dette bruddet for den politiske situasjonen i Norge?"
        },
        {
          "theme": "Politisk miljødebatt",
          "question": "Diskusjon om hvordan det er vanskelig å gjennomføre reell miljøpolitikk med FRP i regjeringen. Hva innebærer dette for fremtidige miljøtiltak og samarbeid?"
        }
      ]
    },
    {
      "title": "Immigrasjon",
      "timeStart": "10:00",
      "timeEnd": "15:00",
      "topics": [
        {
          "theme": "Innvandringspolitikk",
          "question": "Diskusjon om innvandringspolitikk og integreringstiltak"
        },
        {
          "theme": "Grensekontroll",
          "question": "Hvordan håndteres grensekontroll og asylsøkere?"
        }
      ]
    },
    {
      "title": "Kvikkass",
      "timeStart": "15:00",
      "timeEnd": "17:00",
      "topics": [
        {
          "theme": "Kvikkass",
          "question": "Et firma fått mye oppmerksomhet for problemer med distribusjon av lørdagsaviser i distriktene."
        },
        {
          "theme": "Avisdistribusjon",
          "question": "Hvorfor er det utfordrende at lørdagsavisene ikke når frem til abonnentene?"
        }
      ]
    },
    {
      "title": "Skole & språk",
      "timeStart": "17:00",
      "timeEnd": "19:00",
      "topics": [
        {
          "theme": "Norskundervisning",
          "question": "Diskusjonen om hvordan norskundervisningen i skolen oppleves som for teoretisk."
        },
        {
          "theme": "Kritikk av lærebøker",
          "question": "NRKs litteraturjournalist klager over lærebokas kompleksitet."
        }
      ]
    },
    {
      "title": "Museum & helse",
      "timeStart": "19:00",
      "timeEnd": "22:00",
      "topics": [
        {
          "theme": "Destruksjon av utstoppede dyr",
          "question": "Stavanger museum skal destruere gamle utstoppede dyr på grunn av høyt arsenikkinnhold."
        },
        {
          "theme": "Kulturelle referanser",
          "question": "Humoristiske betraktninger om innholdet i julemiddagen i Stavanger."
        }
      ]
    },
    {
      "title": "Internasjonalt",
      "timeStart": "22:00",
      "timeEnd": "25:00",
      "topics": [
        {
          "theme": "Reaksjoner i USA",
          "question": "Det spekuleres i om grunnen til at USA angrer på at de ikke ga Jon Almås flere sjanser."
        },
        {
          "theme": "Moskva og vodka-reklame",
          "question": "Det legges merke til at Almås har hatt noe annet enn vann i glasset under programmene sine."
        }
      ]
    },
    {
      "title": "Ordoppgave",
      "timeStart": "25:00",
      "timeEnd": "27:00",
      "topics": [
        {
          "theme": "Ordoppgave",
          "question": "Deltakerne skal gjette et nytt ord basert på oppgitte ledetråder."
        },
        {
          "theme": "Kreativ språkbruk",
          "question": "Forsøk på å lage nye ord med humoristiske konnotasjoner."
        }
      ]
    },
    {
      "title": "Avslutning",
      "timeStart": "27:00",
      "timeEnd": "60:00",
      "topics": [
        {
          "theme": "Avskjed med programmet",
          "question": "Deltakerne og programlederen forbereder seg på avslutningen av Nytt på Nytt."
        },
        {
          "theme": "Hedersplakett",
          "question": "Guri Skavlan, prosjektleder for programmet, får anerkjennelse for sitt arbeid."
        },
        {
          "theme": "Overgang til ny leder",
          "question": "Introduksjonen av Bård Tufte Johansen som ny programleder."
        }
      ]
    }
  ]
};

// Import the placeholder descriptions
const loremDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia malesuada urna, et mollis ipsum dictum et. Fusce eu lorem vel nisi finibus tempor.",
  "Phasellus consequat arcu at justo pellentesque, ac commodo justo lobortis. Vestibulum vel odio eu magna feugiat consectetur. Cras ornare tempus quam.",
  "Maecenas vitae erat in lorem ultricies porttitor. Donec tempor libero nec diam venenatis, vel lacinia massa vulputate. Proin egestas magna non dolor.",
  "Etiam feugiat nibh in dui molestie, vel fermentum nunc venenatis. Nulla facilisi. Cras venenatis justo vel orci cursus, non sagittis metus tincidunt.",
  "Suspendisse potenti. Ut efficitur arcu eget nisi dictum, ac faucibus justo tincidunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  "Curabitur eleifend, odio nec feugiat commodo, ipsum neque lacinia orci. Praesent euismod, justo vel vehicula hendrerit, nisi libero efficitur nibh.",
  "Fusce fermentum purus a elit finibus, in dictum nulla tempus. Nullam fermentum lacus vitae luctus ultricies. Donec luctus nibh nec enim lacinia.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  "Vivamus in risus sed nisi facilisis tempor vel vel nunc. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
  "Integer tincidunt felis eget magna condimentum, nec vehicula nisl tempus. Sed ut perspiciatis unde omnis iste natus. Nemo enim ipsam voluptatem."
];

// Add a description to each topic in the data
manusData.segments.forEach(segment => {
  segment.topics.forEach((topic, index) => {
    const descIndex = (index + segment.title.length) % loremDescriptions.length;
    topic.description = loremDescriptions[descIndex];
  });
});

// Improved utility function to convert MM:SS or MM:SS:FF format to seconds
function timeToSeconds(timeStr: string): number {
  try {
    // Handle potential HH:MM:SS format
    if (timeStr.includes(":")) {
      const parts = timeStr.split(":");
      
      if (parts.length === 2) {
        // MM:SS format
        const [minutes, seconds] = parts.map(Number);
        if (isNaN(minutes) || isNaN(seconds)) {
          console.error(`Invalid time format: ${timeStr}`);
          return 0;
        }
        return minutes * 60 + seconds;
      } else if (parts.length === 3) {
        // HH:MM:SS format
        const [hours, minutes, seconds] = parts.map(Number);
        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
          console.error(`Invalid time format: ${timeStr}`);
          return 0;
        }
        return hours * 3600 + minutes * 60 + seconds;
      }
    }
    
    // If we get here, format wasn't recognized
    console.error(`Unrecognized time format: ${timeStr}`);
    return 0;
  } catch (error) {
    console.error(`Error converting time: ${timeStr}`, error);
    return 0;
  }
}

interface AktueltProps {
  currentTime: number; // Current video time in seconds
  onThemeClick?: (theme: string, question: string) => void;
}

export function ThemePopup({ theme, question }: { theme: string; question: string }) {
  // Get a random description for this theme
  const descIndex = Math.abs(theme.length) % loremDescriptions.length;
  const description = loremDescriptions[descIndex];
  
  return (
    <div className="w-full h-full max-w-full max-h-full bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{theme}</h2>
      <p className="text-gray-700 whitespace-pre-line mb-4">{question}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Beskrivelse:</h3>
        <p className="text-gray-600 whitespace-pre-line">{description}</p>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Fakta:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
          </ul>
        </div>
        
        <div className="mt-4 text-right">
          <span className="text-xs text-gray-400">Kilde: Nytt på Nytt, {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}

// Get a color for each theme based on the segment title
function getThemeColor(segmentTitle: string): string {
  const colors: Record<string, string> = {
    "Start": "bg-emerald-500",
    "News Monologue": "bg-blue-500",
    "Politics": "bg-red-500",
    "Immigrasjon": "bg-amber-500",
    "Kvikkass": "bg-purple-500",
    "Skole & språk": "bg-cyan-500",
    "Museum & helse": "bg-green-500",
    "Internasjonalt": "bg-orange-500",
    "Ordoppgave": "bg-pink-500",
    "Avslutning": "bg-indigo-500"
  };
  
  return colors[segmentTitle] || "bg-gray-500";
}

// Icon for each theme category
function getSegmentIcon(segmentTitle: string): React.ReactNode {
  switch(segmentTitle) {
    case "Start":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>;
    case "News Monologue":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>;
    case "Politics":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>;
    case "Immigrasjon":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>;
    case "Kvikkass":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
    case "Skole & språk":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>;
    case "Museum & helse":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>;
    case "Internasjonalt":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
    case "Ordoppgave":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>;
    case "Avslutning":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>;
    default:
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>;
  }
}

export default function Aktuelt({ currentTime, onThemeClick }: AktueltProps) {
  // Debug logging for time detection
  useEffect(() => {
    if (currentTime > 900) { // Only log for times > 15 minutes
      console.log(`Checking segments for time: ${currentTime} seconds (${Math.floor(currentTime/60)}:${Math.floor(currentTime%60).toString().padStart(2, '0')})`);
    }
  }, [currentTime]);

  // Find the current segment based on currentTime
  const currentSegment = manusData.segments.find(segment => {
    const startTime = timeToSeconds(segment.timeStart);
    const endTime = timeToSeconds(segment.timeEnd);
    const isInSegment = currentTime >= startTime && currentTime <= endTime;
    
    // Extra debug logging for times > 15 minutes
    if (currentTime > 900) {
      console.log(`Segment "${segment.title}": ${startTime}s-${endTime}s, current: ${currentTime}s, match: ${isInSegment}`);
    }
    
    return isInSegment;
  });

  // Always render a placeholder even if no segment is found, for debugging
  if (!currentSegment) {
    return (
      <div className="flex flex-col p-4 rounded-xl shadow-lg mx-auto max-w-xs backdrop-blur-md bg-black/40 border border-white/10">
        <div className="flex items-center mb-3">
          <div className="bg-red-500 p-2 rounded-lg mr-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white">Ingen aktive temaer</h3>
        </div>
        <p className="text-white/70 text-sm mb-3">Nåværende tid: {Math.floor(currentTime/60)}:{Math.floor(currentTime%60).toString().padStart(2, '0')}</p>
        <div className="text-xs text-white/50 mt-1 border-t border-white/10 pt-3">
          <p className="font-medium mb-1">Tilgjengelige segmenter:</p>
          <div className="max-h-32 overflow-y-auto">
            {manusData.segments.map((seg, idx) => (
              <div key={idx} className="flex items-center mb-1 opacity-70 hover:opacity-100">
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: getThemeColor(seg.title).replace('bg-', '') }}></span>
                <span>{seg.title} ({seg.timeStart} - {seg.timeEnd})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Get the background color class for the current segment
  const segmentColorClass = getThemeColor(currentSegment.title);
  const segmentIcon = getSegmentIcon(currentSegment.title);

  return (
    <div className="flex flex-col p-4 rounded-xl shadow-lg mx-auto max-w-xs backdrop-blur-md bg-black/40 border border-white/10">
      <div className="flex items-center mb-4">
        <div className={`${segmentColorClass} p-2 rounded-lg mr-3`}>
          {segmentIcon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{currentSegment.title}</h3>
          <p className="text-white/70 text-xs">
            {currentSegment.timeStart} - {currentSegment.timeEnd}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 mt-1">
        {currentSegment.topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => onThemeClick && onThemeClick(topic.theme, topic.question)}
            className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center p-3 backdrop-blur-sm bg-white/10 rounded-lg border border-white/10 hover:border-white/30 transition-colors">
              <div className="mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                {index + 1}
              </div>
              <div className="text-left">
                <h4 className="font-medium text-white">{topic.theme}</h4>
                <p className="text-xs text-white/70 line-clamp-1 group-hover:line-clamp-none transition-all">
                  {topic.question.length > 60 ? `${topic.question.substring(0, 60)}...` : topic.question}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <div className="text-xs text-white/70">
          Nåværende tid: {Math.floor(currentTime/60)}:{Math.floor(currentTime%60).toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white/50 px-2 py-1 rounded-full bg-white/5">
          {currentSegment.topics.length} emner
        </div>
      </div>
    </div>
  );
} 