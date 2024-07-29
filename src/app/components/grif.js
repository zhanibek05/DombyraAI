"use client"

import React, { useEffect, useState, useRef } from 'react';
import styles from '../grif/grif.module.css';
import * as Tone from 'tone';




const Grif = ({ data }) => {
  let length = 0;
  
  
  if(data){
    length = Object.entries(data).length;
  }
  
  
  
  const numberOfFrets = 20; // число ладов
  const fretMarkPositions = [2, 5, 7, 10, 12, 14]; // позиции маркеров на домбре
  const noteFlat = ["C", 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const noteSharp = ["C", 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const orderedNotes = ["G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6"];
  const accidentals = 'flats';
  const dombyraTuning = [2, 7];

  

  


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
    baseUrl:"/notes/"
  }).toDestination();
  

  const generateNoteNames = (noteIndex, accidentals) => {
    noteIndex = noteIndex % 12;
    if (accidentals === 'flats') {
      return noteFlat[noteIndex];
    } else if (accidentals === 'sharps') {
      return noteSharp[noteIndex];
    }
  };


  useEffect(() => {
    const fretboard = document.querySelector(`.${styles.fretboard}`);
    let string1 = document.createElement('div');
    string1.classList.add(styles.string);
    string1.setAttribute('string_number', 1);
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
    string2.setAttribute("string_number", 2);
    fretboard.appendChild(string2);

    for (let fret = 0; fret <= numberOfFrets; fret++) {
      let noteFret = document.createElement("div");
      noteFret.classList.add(styles.noteFret);
      string2.appendChild(noteFret);

      let noteName = orderedNotes[fret];
      noteFret.setAttribute('data-note', noteName);
    }
  }, []);

  return (
    <div  className=''>

      <div className={styles.fretboard}></div>
    
    </div>
  );
};

export default Grif;



