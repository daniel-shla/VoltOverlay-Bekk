import type { Route } from "./+types/home";
import { useRef, useState, useEffect } from "react";
import CharactersRow, { CharacterPopup } from "../components/CharactersRow";
import Aktuelt, { ThemePopup, ProfileMenu } from "../components/Aktuelt";
import { characters } from "../data/characters";

import nrk from "app/assets/nrk.mp4"

// Import TimeSeekEvent interface from Aktuelt
interface TimeSeekEvent {
  seconds: number;
  segmentTitle: string;
  topicTheme: string;
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "Video Player" }];
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [isUserScrubbing, setIsUserScrubbing] = useState(false);
  const pauseTimerRef = useRef<number | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<typeof characters[0] | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<{ theme: string; question: string } | null>(null);
  
  // Log current time for debugging
  useEffect(() => {
    console.log("Current time state in Home component:", currentTime);
  }, [currentTime]);
  
  const handlePlay = () => {
    if (pauseTimerRef.current) {
      window.clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    setPaused(false);
    setSelectedCharacter(null);
    setSelectedTheme(null);
  };

  const handlePause = () => {
    if (isUserScrubbing) {
      return;
    }
    
    if (pauseTimerRef.current) {
      window.clearTimeout(pauseTimerRef.current);
    }
    
    pauseTimerRef.current = window.setTimeout(() => {
      if (videoRef.current?.paused) {
        // Update current time when paused
        if (videoRef.current) {
          setCurrentTime(videoRef.current.currentTime);
        }
        setPaused(true);
      }
    }, 150);
  };

  const handleSeeking = () => {
    setIsUserScrubbing(true);
    setPaused(false);
  };

  const handleSeeked = () => {
    setTimeout(() => {
      setIsUserScrubbing(false);
      
      if (videoRef.current?.paused) {
        // Update current time when seek is complete
        if (videoRef.current) {
          setCurrentTime(videoRef.current.currentTime);
        }
        setPaused(true);
      }
    }, 200);
  };

  const handleCharacterClick = (character: typeof characters[0]) => {
    setSelectedCharacter(prevCharacter => 
      prevCharacter?.name === character.name ? null : character
    );
    setSelectedTheme(null); // Close theme popup when selecting a character
  };

  const handleThemeClick = (theme: string, question: string) => {
    setSelectedTheme(prevTheme => 
      prevTheme?.theme === theme ? null : { theme, question }
    );
    setSelectedCharacter(null); // Close character popup when selecting a theme
  };

  // Handle time seeking from the theme finder
  const handleTimeSeek = (event: TimeSeekEvent) => {
    if (videoRef.current) {
      // Set the current time of the video
      videoRef.current.currentTime = event.seconds;
      
      // Start playing the video
      videoRef.current.play()
        .then(() => {
          console.log(`Jumped to ${event.seconds}s (${event.segmentTitle} - ${event.topicTheme})`);
        })
        .catch(error => {
          console.error('Error playing after time seek:', error);
        });
      
      // Show a notification (optional)
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-500';
      notification.textContent = `Hopper til: ${event.segmentTitle} - ${event.topicTheme}`;
      document.body.appendChild(notification);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 500);
      }, 3000);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      // Debug log
      console.log("Time update:", videoRef.current.currentTime);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Use a timer to periodically update the current time even when not playing
      const timeUpdateInterval = setInterval(() => {
        if (videoElement) {
          setCurrentTime(videoElement.currentTime);
        }
      }, 500);
      
      // Rest of initialization...
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen().catch(err => {
              console.error('Error attempting to enable fullscreen:', err);
            });
          }
        }).catch(error => {
          console.error('Error playing video:', error);
        });
      }

      return () => {
        clearInterval(timeUpdateInterval);
        if (pauseTimerRef.current) {
          window.clearTimeout(pauseTimerRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && videoRef.current) {
        e.preventDefault();
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="relative w-full h-full">
        <video 
          ref={videoRef} 
          src={nrk} 
          controls 
          className="w-full h-full object-contain"
          onPlay={handlePlay}
          onPause={handlePause}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          onTimeUpdate={handleTimeUpdate}
        />

        {paused && (
          <div className="absolute inset-0 pointer-events-auto" onClick={() => videoRef.current?.play()}>
            <div className="absolute inset-0 bg-black opacity-69"></div>
            
            {/* Pause icon - positioned in the center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 animate-pulse">
              <img src="/pause-256.png" alt="Pause" className="w-32 h-32" />
            </div>
            
            {/* Characters row - positioned at the left top */}
            <div
              className="absolute top-8 left-8"
              onClick={e => e.stopPropagation()}
            >
              <CharactersRow onCharacterClick={handleCharacterClick} />
            </div>
            
            {/* Aktuelt component - positioned at the right top */}
            <div
              className="absolute top-8 right-8"
              onClick={e => e.stopPropagation()}
            >
              <Aktuelt currentTime={currentTime} onThemeClick={handleThemeClick} onTimeSeek={handleTimeSeek} />
            </div>
            
            {/* ProfileMenu component - positioned at the bottom right */}
            <div
              className="absolute bottom-8 right-8"
              onClick={e => e.stopPropagation()}
            >
              <ProfileMenu currentTime={currentTime} onTimeSeek={handleTimeSeek} />
            </div>

            {/* Character popup - shows when a character is selected */}
            {selectedCharacter && (
              <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 
              w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]
              max-w-5xl
              h-auto max-h-[80vh] overflow-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative bg-white rounded-lg shadow-2xl p-8">
                  <button 
                    onClick={() => setSelectedCharacter(null)}
                    className="absolute top-2 right-2 bg-black bg-opacity-40 rounded-full p-1 text-white hover:bg-opacity-60"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <CharacterPopup character={selectedCharacter} />
                </div>
              </div>
            )}
            
            {/* Theme popup - shows when a theme is selected */}
            {selectedTheme && (
              <div
                className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[90vw] max-w-6xl max-h-[60vh] overflow-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative bg-white rounded-lg shadow-2xl">
                  <button 
                    onClick={() => setSelectedTheme(null)}
                    className="absolute top-2 right-2 z-10 bg-black bg-opacity-40 rounded-full p-1 text-white hover:bg-opacity-60"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <ThemePopup theme={selectedTheme.theme} question={selectedTheme.question} />
                </div>
              </div>
            )}
          </div>
        )}  
      </div>
    </div>
  );
}
