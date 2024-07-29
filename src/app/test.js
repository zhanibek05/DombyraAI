import Sampler from "tone";

const synth = new Tone.Synth().toDestination();

  const sampler = new Tone.Sampler({
    urls:{
      "G4": "G4.mp3", 
      "Ab4": "Ab4.mp3", 
      "A4": "A4.mp3", 
      "Bb4": "Bb4.mp3",
      "B4": "B4.mp3",
      "C5": "C5.mp3", 
      "Db5": "Db5.mp3", 
      "D5": "D5.mp3", 
      "Eb5": "Eb5.mp3", 
      "E5": "E5.mp3", 
      "F5": "F5.mp3", 
      "Gb5": "Gb5.mp3", 
      "G5": "G5.mp3", 
      "Ab5": "Ab5.mp3", 
      "A5": "A5.mp3", 
      "Bb5": "Bb5.mp3", 
      "B5": "B5.mp3", 
      "C6": "C6.mp3", 
      "Db6": "Db6.mp3", 
      "D6": "Db6.mp3"
    },
    baseUrl:"public/notes/"
  }).toDestination();



  sampler.triggerAttack("G4", "4n");

  // synth.triggerAttackRelease(note, "8n");