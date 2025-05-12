
import React, { useState } from 'react';

const LanguageToggle: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="flex items-center">
      <span className={`mr-2 text-sm font-medium ${language === 'en' ? 'text-luxury-gold' : 'text-luxury-charcoal'}`}>EN</span>
      <label className="language-toggle">
        <input 
          type="checkbox" 
          className="language-toggle-input sr-only" 
          checked={language === 'es'}
          onChange={toggleLanguage}
        />
        <span className="language-toggle-slider"></span>
      </label>
      <span className={`ml-2 text-sm font-medium ${language === 'es' ? 'text-luxury-gold' : 'text-luxury-charcoal'}`}>ES</span>
    </div>
  );
};

export default LanguageToggle;
