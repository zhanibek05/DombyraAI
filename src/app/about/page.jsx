import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Бұл сайт қазақ халқының ұлттық аспабы домбыраны үйрену үшін жасалған. 
            Музыкалық туындыны өзіңізге ыңғайлы түрде жүктеңіз, бірер минут күтіңіз және экраннан қайталаңыз. 
            Әзірге бұл бета нұсқа және кейбір вокалдық немесе диапазоны күрделі әуендерді толықтай домбыраға айналдыра алмайды. 
            Тағы да айта кететін жайт, сайтта тек домбыраның астыңғы ішегіне арнап айналдырады, егер домбырада ойнай алсаңыз 
            эксперимент жасап әртүрлі нұсқада ойнаудан қорықпаңыз, бәрі сіздің қиялыңызға байланысты байланысты.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Сұрақтар бойынша <a className='text-blue-500' href="https://t.me/z_beisenov">@z_beisenov</a>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default AboutPage;