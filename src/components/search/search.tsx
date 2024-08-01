'use client'

import React, { useState } from 'react';
import Fretboard from '../fretboard/fretboard';
import Grif from '../../components/grif';
import Footer from '../../components/footer';
import Link from 'next/link';

interface MidiData {
  data?: Record<string, [number, number] | any> | null;
}

export default function Search() {
  const [query, setQuery] = useState<string>('');
  const [midiData, setMidiData] = useState<MidiData | any>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    if(query == ""){
      alert("empty query");
      return null
    }
    e.preventDefault();
    setUploading(true);
    try {
      const response = await fetch('https://dombyranewserver-production.up.railway.app/download/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.midi_data);
      setMidiData(data.midi_data);
      setUploading(false);
      setUploadStatus(true);
    } catch (error) {
      setIsError(true)
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <div className='h-screen px-4'>
      {!uploadStatus && (
        <div className="px-4 h-screen">
          <div className="flex flex-col items-center gap-6 p-6 md:p-8 lg:p-10">
            <h1 className="text-4xl font-bold text-center py-8">
              Әуеннің атын жазыңыз
            </h1>
            <form onSubmit={handleSearch} className="flex w-full max-w-md items-center">
              <input
                disabled={uploading}
                type="search"
                placeholder="safe and sound, happy birthday..(ағылшынша)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full flex-grow pb-0 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                disabled={uploading}
                className="flex items-center bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {uploading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <p>Іздеу</p>
                )}
              </button>
            </form>
            {
              uploading && 
              <>
              <img src="dombyraLOGO.png" className='w-14 animate-spin' alt="" />
              <p className='text-gray-500'>1-2 минут</p>
              </>
              }
            {
              isError &&
              <div>
                <p className='text-gray-500'>Өкінішке орай бір жерде қате кетті. Қолжетімді <Link className='text-blue-500 ' href="main">әуендерді</Link> үйренсеңіз болады</p>
              </div>
            }
          </div>
          
        </div>
      )}
      {uploadStatus && midiData && (
        <Fretboard data={midiData} />
      )}
      
    </div>
  );
}