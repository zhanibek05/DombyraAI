"use client"
import React, { useState, useEffect } from 'react';
import Fretboard from './fretboard/fretboard';  
import Link from 'next/link';
import {useTranslations} from 'next-intl';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSong, setSelectedSong] = useState(null);
  const [loading, setLoading] = useState(true)

  const t = useTranslations('main');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('https://dombyranewserver-production.up.railway.app/songs/');
        const data = await response.json();
        setSongs(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {!selectedSong ? (
        <>
          
          <input
            type="text"
            placeholder="құстар әні, bella ciao ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 shadow-sm"
          />
          

          
          <div className='flex flex-col items-center font-bold text-3xl mb-5'>{t('head')}</div>
          {loading && 
            <>
            <div className='flex flex-col items-center'>
              <img src="dombyraLOGO.png" className='w-14 animate-spin ' alt="" />
            </div>
           
            </>
            
          }
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
            {filteredSongs.map((song, index) => (
              <>
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                onClick={() => handleSongSelect(song)}
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{song.name}</h3>
                </div>
                <div className='bg-gray-100 h-2'></div>
              </div>
              </>
              
            ))}
            
          </div>
          <div className='pt-10 flex flex-col items-center'>
            <Link href='search' >
              <p className='text-gray-500 hover:text-blue-500'>{t('link')}</p>
            </Link>
            

          </div>
        </>
      ) : (
        <div className="mt-4">
          <button
            onClick={() => setSelectedSong(null)}
            className="mb-4 text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            {t("back")}
          </button>
          <div className="flex flex-col items-center text-2xl font-bold mb-2">{selectedSong.name}</div>
          <Fretboard data={(selectedSong.body)} />
        </div>
      )}
    </div>
  );
};

export default SongList;