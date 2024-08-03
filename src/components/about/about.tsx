import React from 'react';
import { useTranslations } from 'next-intl';

const About = () => {

  const t = useTranslations('about')
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {t('description')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('questions')} <a className='text-blue-500' href="https://t.me/z_beisenov">@z_beisenov</a>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default About;