'use client'
import { use, useState } from 'react';
import Head from 'next/head';
import Fretboard from '../grif/page';
import Grif from '../components/grif';

export default function Home() {
  
  const [query, setQuery] = useState('');
  const [midiData, setMidiData] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false);
  

  const handleSearch = async (e) => {
    setUploading(true)
    e.preventDefault();
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
      setMidiData(data.midi_data);
      setUploading(false);
      setUploadStatus(true);
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <>
    
    { !uploadStatus &&

      
      <div className="  px-4 h-screen">

       <div className="flex flex-col items-center gap-6 p-6 md:p-8 lg:p-10">
          <h1 className="text-4xl font-bold text-center py-8">
              Әуеннің атын жазыңыз
          </h1>
          
          <div className="flex w-full max-w-md items-center ">
            <input
              disabled={uploading}
              type="search"
              placeholder="safe and sound, happy birthday..(ағылшынша)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full flex-grow pb-0 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
              
            />
            <button
                    disabled={uploading}
                    onClick={handleSearch}
                    className="flex items-center bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {
                    uploading &&
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    }
                    {
                      !uploading &&
                      <p>Іздеу</p>
                    }
                    
            </button>
          </div>
          
      </div>

       <Grif></Grif> 
        
      </div>
    } 
      {
        uploadStatus && 
        <Fretboard data={midiData} ></Fretboard>
      }

    </>
  );
}