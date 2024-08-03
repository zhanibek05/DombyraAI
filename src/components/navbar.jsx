"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './language';
import {useTranslations} from 'next-intl';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navbar');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-white shadow-md">
        <Link href="./" className="flex items-center justify-center font-bold" prefetch={false}>
          <img src="image.png" width={180} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 sm:gap-6">
          <Link href="main" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
            {t('main')}
          </Link>
          <Link href="search" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
            {t('search')}
          </Link>
          <Link href="upload" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
            {t('upload')}
          </Link>
          <Link href="about" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
            {t('about')}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button onClick={toggleMenu} className="ml-2 p-2 rounded-md hover:bg-gray-100">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <Link href="main" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
              {t('main')}
            </Link>
            <Link href="search" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
              {t('search')}
            </Link>
            <Link href="upload" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
              {t('upload')}
            </Link>
            <Link href="about" className="text-sm font-medium hover:text-indigo-600 transition-colors" prefetch={false}>
              {t('about')}
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;