"use client"

import Link from "next/link";
import { useState } from "react"
import Fretboard from "../grif/page";
import Grif from "../components/grif"

export default function Upload() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [midiNumbers, setMidiNumbers] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    setUploading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);


    try {
      const res = await fetch('https://dombyranewserver-production.up.railway.app/upload/', {
        method: 'POST',
        body: formData,
      });

      if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMidiNumbers(data.midi_data);
      console.log(data.midi_data)
      setMessage('File Uploaded successfully!');
      setUploadStatus(true);
      
      
    } catch (error) {
      console.error('Error uploading file:', error)
      
    }
  };

    return(

      <div className="px-4 h-screen">
        {!uploadStatus && 
        <>
          <div  className=" flex flex-col  items-center gap-6 p-6 md:p-8 lg:p-10">
          <div className="max-w-md w-full px-4 ">
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
                className=" w-full text-white bg-black hover:bg-gray-800 
                      focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-900 
                      font-medium rounded-lg text-md px-4 py-1.5 flex justify-center items-center me-2 mb-2"
                      >
                  {
                    uploading &&
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  }
                  
                {uploading ? <div>Күтіңіз...</div> : <div>Жүктеу</div>}
              </button>
              {message && <p>{message}</p>}
            </form>
            
            
          </div>
        </div>
        <Grif></Grif>
        </>
        }
        
        {
           uploadStatus && <Fretboard data={midiNumbers} ></Fretboard>
        }
        
            
      </div>

      
      
        
    )
}