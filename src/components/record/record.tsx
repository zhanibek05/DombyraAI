"use client";

import React, { useState, useRef } from "react";
import Fretboard from "../fretboard/fretboard";
import Footer from "../../components/footer";
import { useTranslations } from "next-intl";

interface MidiData {
  data?: Record<string, [number, number] | any> | null;
}

interface PlayIconProps extends React.SVGProps<SVGSVGElement> {
  isRecording: boolean;
}

const PlayIcon: React.FC<PlayIconProps> = ({ isRecording, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points={isRecording ? "3 3 3 20 22 20 22 3" : "6 3 20 12 6 21 6 3"} />
    </svg>
  );
};

export default function Record() {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string>('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [isShowTabs, setIsShowTabs] = useState<boolean>(false);
  const [tabs, setTabs] = useState<MidiData|any>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const t = useTranslations("record")

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  const showTabs = () => {
    if (blob) {
      setUploading(true);
      sendAudioFileToServer(blob);
    }
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = event => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
          audioChunksRef.current = [];
          const audioURL = window.URL.createObjectURL(audioBlob);
          setAudioURL(audioURL);
          setBlob(audioBlob);
        };

        mediaRecorderRef.current.start();
      })
      .catch(err => {
        console.error('Error accessing microphone:', err);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const sendAudioFileToServer = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.mp3');

    try {
      const response = await fetch('https://dombyranewserver-production.up.railway.app/upload/', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        console.log('Audio file uploaded successfully');
        const data = await response.json();
        console.log(data);
        setTabs(data.midi_data);
        setUploading(false);
        setIsShowTabs(true);
      } else {
        console.error('Failed to upload audio file');
      }
    } catch (error) {
      console.error('Error uploading audio file:', error);
    }
  };

  return (
    <div>
      {!isShowTabs && (
        <div className="flex flex-col items-center justify-between min-h-screen py-0 bg-gray-220">
          <main className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-4xl font-bold text-center py-8">
              {t('head')}
            </h1>
            <button
              disabled={uploading}
              onClick={handleButtonClick}
              className="relative flex items-center justify-center w-64 h-64 border-4 border-gray-900 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <div className="absolute flex items-center justify-center w-48 h-48 border-4 border-gray-800 rounded-full animate-pulse">
                <PlayIcon isRecording={isRecording} className="w-16 h-16 text-red-600" />
              </div>
            </button>
            {isRecording && <p className="mt-4 text-red-500 animate-bounce">{t('rec')}</p>}
            
            {audioURL && (
              <div className="flex flex-col items-center justify-between">
                <audio src={audioURL} controls className="mt-4 rounded-md bg-gray-220" />
                <button 
                  type="button" 
                  className="m-5 text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center me-2 mb-2"
                  onClick={showTabs}
                >
                  {uploading && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {uploading ? <div>{t('wait')}...</div> : <div>{t('note')}</div>}
                </button>
              </div>
            )}
          </main>
        </div>
      )}

      {isShowTabs && <Fretboard data={tabs} />}
      
      <Footer />
    </div>
  );
}