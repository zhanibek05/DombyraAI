'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './fretboard.module.css'
import * as Tone from 'tone';

interface FretboardProps {
  data?: Record<string, [number, number] | any> | null;
}

const Fretboard: React.FC<FretboardProps> = ({data}) => {
  const length = data ? Object.entries(data).length : 0;
  const numberOfFrets = 20;
  const fretMarkPositions = [2, 5, 7, 10, 12, 14];
  const noteFlat = ["C", 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const noteSharp = ["C", 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const orderedNotes = ["G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6"];
  const accidentals = 'flats';
  const dombyraTuning = [2, 7];

  const [playSpeed, setPlaySpeed] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [curTab, setCurTab] = useState<number>(0);
  const [octave, setOctave] = useState<number>(0);
  const [instrument, setInstrument] = useState<string>("synth");
  const [digitalNotes, setDigitalNotes] = useState<number[] >([]);

  useEffect(() => {
    if (data) {
      setDigitalNotes(Object.values(data).map(item => item[0]));
    } else {
      setDigitalNotes([]);
    }
  }, [data]);

  const curTabRef = useRef<number>(curTab);
  const isPlayingRef = useRef<boolean>(isPlaying);

  const [synth, setSynth] = useState<Tone.Synth | null>(null);
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null);


  useEffect(() => {
    if (typeof window !== 'undefined'){
      setSynth(new Tone.Synth().toDestination());

      setSampler(new Tone.Sampler({
        urls: {
          "G4": "G4.mp3", 
          "Ab4": "Ab4.mp3", 
          "A4": "A4.mp3", 
          "Bb4": "Bb4.mp3",
          "B4": "B4.mp3",
          "C5": "C5.mp3", 
          "Db5": "Db5.mp3", 
          "D5": "Db5.mp3", 
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
        baseUrl: "/notes/"
      }).toDestination());
    }
  }, [])

  

  const timer = (ms: number) => new Promise(res => setTimeout(res, ms));

  const showTabs = async (tabs: { [key: string]: [number, number] } = {}) => {
    for (let i = curTab; i < length; i++) {
      if (!isPlayingRef.current) {
        setCurTab(i);
        break;
      }
      let tab = tabs[i][0];
      
      const note = orderedNotes[tab + Number(octave)];
      const string = document.querySelector('[string_number="2"]');
      const fret = string?.querySelector(`div[data-note="${note}"]`) as HTMLElement;
      if (fret) {
        fret.style.setProperty('--noteDotOpacity', '2');
      }

      const progressElement = document.getElementById("progress") as HTMLProgressElement;
      if (progressElement) {
        progressElement.value = i + 1;
      }

      if (instrument === 'dombyra' && sampler) {
        if(orderedNotes.includes(note)){
          Tone.loaded().then(() => {
            sampler.triggerAttackRelease(note, "4n");
          });
        }
        
      }
      else if (instrument === 'synth' && synth) {
        if(orderedNotes.includes(note)){
          synth.triggerAttackRelease(note, "8n");
        }
        
      }

      await timer(tabs[i][1] * 1000 / playSpeed);
      if (fret) {
        fret.style.setProperty('--noteDotOpacity', '0');
      }

      await timer(playSpeed * tabs[i][1]);
      if (i === Object.keys(tabs).length - 1) {
        setCurTab(0);
        setIsPlaying(false);
        break;
      }
    }
  };

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    curTabRef.current = curTab;

    if (isPlaying && data) {
      showTabs(data);
    }
  }, [isPlaying, data, curTab]);

  const generateNoteNames = (noteIndex: number, accidentals: string): string => {
    noteIndex = noteIndex % 12;
    if (accidentals === 'flats') {
      return noteFlat[noteIndex];
    } else if (accidentals === 'sharps') {
      return noteSharp[noteIndex];
    }
    return '';
  };

  const handleButtonClick = () => {
    setIsPlaying(prev => !prev);
  };

  const Playback = () => {
    setCurTab(0);
    const progressElement = document.getElementById("progress") as HTMLProgressElement;
    if (progressElement) {
      progressElement.value = 0;
    }
  };

  useEffect(() => {
    const fretboard = document.querySelector(`.${styles.fretboard}`);
    if (fretboard) {
      let string1 = document.createElement('div');
      string1.classList.add(styles.string);
      string1.setAttribute('string_number', '1');
      fretboard.appendChild(string1);

      for (let fret = 0; fret <= numberOfFrets; fret++) {
        let noteFret = document.createElement("div");
        noteFret.classList.add(styles.noteFret);
        string1.appendChild(noteFret);

        let noteName = generateNoteNames((fret + dombyraTuning[0]), accidentals);
        noteFret.setAttribute('data-note', noteName);

        if (fretMarkPositions.includes(fret)) {
          noteFret.classList.add(styles.fretmark);
        }
      }

      let string2 = document.createElement('div');
      string2.classList.add(styles.string);
      string2.setAttribute("string_number", "2");
      fretboard.appendChild(string2);

      for (let fret = 0; fret <= numberOfFrets; fret++) {
        let noteFret = document.createElement("div");
        noteFret.classList.add(styles.noteFret);
        string2.appendChild(noteFret);

        let noteName = orderedNotes[fret];
        noteFret.setAttribute('data-note', noteName);
      }
    }
  }, []);

  return (
    <div  className='pt-10 h-full'>
     
      <div className='flex items-center justify-between mx-20'>
        <select
          id="octave"
          value={octave}
          onChange={e => setOctave(Number(e.target.value))}
          className="bg-white border border-gray-300 rounded px-2 py-1"
        >
          <option value={12}>Октава+1</option>
          <option value={0}>Октава</option>
          <option value={-12}>Октава-1</option>
        </select>
        <select
          id="instrument"
          value={instrument}
          onChange={e => setInstrument(e.target.value)}
          className="bg-white border border-gray-300 rounded px-2 py-1"
        >
          <option value='synth'>Синтезатор</option>
          <option value="dombyra">Домбыра</option>
        </select>
      </div>
      <div className={styles.fretboard}></div>
      <div className="flex flex-col items-center justify-center pt-12">
        <progress className='w-full h-2 rounded-full transition-w-0.5' id='progress' max={length} value={0} />
        <div className='flex items-center justify-center py-5'>
          <div className="flex flex-col items-center space-y-4 p-2 rounded-lg">
            <div className="flex space-x-4">
              <button
                onClick={handleButtonClick}
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-700"
              >
                {isPlaying ? (
                  <span>&#10074;&#10074;</span>
                ) : (
                  <span>&#9654;</span>
                )}
              </button>
              <button
                onClick={Playback}
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-700"
              >
                &#8634;
              </button>
            </div>
            <div>
              <select
                id="speed"
                value={playSpeed}
                onChange={e => setPlaySpeed(Number(e.target.value))}
                className="bg-white border border-gray-300 rounded px-2 py-1"
              >
                <option value={0.25}>0.25x</option>
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Сандық ноталар</h1>
        <div className="flex items-center justify-center p-4">
          <div className="max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {digitalNotes.map((item, index) => (
                  <span key={index}> <span className='font-bold'>{item}</span> ({orderedNotes[item]}) - </span>
                ))}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Барлық сандық ноталар астыңғы ішек үшін.
                <strong>0</strong> - ашық ішек, <strong>1</strong> - бірінші перне, <strong>2</strong> - екінші перне болып 19 ға дейін кете береді.
                Жанындағы жақшадағы әріптер ноталары
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fretboard;