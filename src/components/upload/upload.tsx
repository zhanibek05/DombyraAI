"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import Fretboard from "../fretboard/fretboard";
import Grif from "../../components/grif";
import Footer from "../../components/footer";
import Link from "next/link";

interface MidiData {
  data?: Record<string, [number, number] | any> | null;
}

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [midiNumbers, setMidiNumbers] = useState<MidiData | any>(null);
  const [uploadStatus, setUploadStatus] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    if (!file) {
      setMessage('Файлды таңдаңыз');
      setUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('https://dombyranewserver-production.up.railway.app/upload/', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMidiNumbers(data.midi_data);
      console.log(data.midi_data);
      setMessage('File Uploaded successfully!');
      setUploadStatus(true);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className=" px-4">
        {!uploadStatus && (
          <>
            <div className="flex flex-col items-center gap-6 p-6 md:p-8 lg:p-10">
              <div className="max-w-md w-full px-4">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-center py-8">Керекті әуенді таңда</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 rounded-md border">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept="audio/*"
                    className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  <button
                    type="submit"
                    className="w-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-900 font-medium rounded-lg text-md px-4 py-1.5 flex justify-center items-center me-2 mb-2"
                  >
                    {uploading && (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {uploading ? <div>Күтіңіз...</div> : <div>Жүктеу</div>}
                  </button>
                  {message && <p>{message}</p>}
                  
                </form>
                
              </div>
              
              {uploading &&
                <>
                <img src="dombyraLOGO.png" className='w-14 animate-spin' alt="" />
                <p className='text-gray-500'>1-2 минут</p>
                </>
              }

              <h1 className="text-l font-bold" >Немесе <Link className="text-blue-500 underline" href="record">таспаға</Link> жаз</h1>
            </div>
          
            
          </>
        )}
        {uploadStatus && <Fretboard data={midiNumbers} />}
      </div>
      
    </>
  );
}