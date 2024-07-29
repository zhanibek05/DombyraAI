"use client"
import Link from "next/link";
import { useState } from "react"



export default function Main() {

    return (
      <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-gray-220">
        <main className="flex flex-col items-center justify-center flex-grow">
          <h1 className="mb-8 text-2xl font-bold text-center">Play any melody on dombyra</h1>
          <button className="relative flex items-center justify-center w-64 h-64 border-4 border-gray-900 rounded-full hover:scale-110 transition-transform duration-300">
            <div className="absolute flex items-center justify-center w-48 h-48 border-4 border-gray-800 rounded-full animate-pulse">
              <PlayIcon className="w-16 h-16 text-red-500 " />
            </div>
          </button>
          <p className="mt-4 text-red-500 animate-bounce">Record</p>
          <p>or upload music:</p>
          <div className="rounded-md flex  justify-center bg-gray-800 text-white w-24">
            <Link  href="upload" >Upload</Link>
          </div>
          
        </main>
      </div>
    )
  }
  
  
  
  
  function PlayIcon(props) {
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
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    )
  }