"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className=" px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="./" className="text-white flex items-center justify-center font-bold" prefetch={false}>
          <img src="image.png" width={180} alt="" />
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link href="search" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Іздеу
          </Link> 
          <Link href="record" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Жазба
          </Link>
          <Link href="upload" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Жүктеу
          </Link>
          <Link href="about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Біз жайлы
          </Link>
          
        </nav>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white">
          <Link href="record" className="block py-2 text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={toggleMenu}>
            Record
          </Link>
          <Link href="upload" className="block py-2 text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={toggleMenu}>
            Upload
          </Link>
          <Link href="#" className="block py-2 text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={toggleMenu}>
            About
          </Link>
          <Link href="#" className="block py-2 text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={toggleMenu}>
            Sign in
          </Link>
        </nav>
      )}
      <hr />
    </div>
  );
};

export default Header;