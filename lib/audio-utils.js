"use client"
import { useEffect, useRef } from 'react';

// Custom hook for audio playback
export function useAudio(src) {
  const audio = useRef(null);

  useEffect(() => {
    audio.current = new Audio(src);
    return () => {
      if (audio.current) {
        audio.current.pause();
        audio.current = null;
      }
    };
  }, [src]);

  const play = () => {
    if (audio.current) {
      // Reset the audio to the beginning
      audio.current.currentTime = 0;
      // Play the audio
      audio.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
  };

  const stop = () => {
    if (audio.current) {
      audio.current.pause();
      audio.current.currentTime = 0;
    }
  };

  return { play, stop };
}

// Function to speak text using the Web Speech API
export function speak(text, options = {}) {
  if (!('speechSynthesis' in window)) {
    console.error("Speech synthesis not supported");
    return;
  }
  
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Set default options
  utterance.lang = options.lang || 'en-US';
  utterance.volume = options.volume || 1;
  utterance.rate = options.rate || 1;
  utterance.pitch = options.pitch || 1;
  
  window.speechSynthesis.speak(utterance);
  
  return utterance;
}