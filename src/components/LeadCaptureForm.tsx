
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'buyer' | 'seller' | 'investor';
  language: 'english' | 'spanish';
}

const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'buyer',
    language: 'english'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        type: 'buyer',
        language: 'english'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  const currentLanguage = formData.language;
  
  const translations = {
    english: {
      title: 'Request a Free Consultation',
      subtitle: 'Let\'s discuss your real estate goals in Tampa and Miami.',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Tell us about your real estate goals',
      type: 'I am a:',
      buyer: 'Buyer',
      seller: 'Seller',
      investor: 'Investor',
      button: 'Schedule Consultation',
      submitting: 'Submitting...',
      success: 'Thank you! We will contact you shortly.'
    },
    spanish: {
      title: 'Solicitar una Consulta Gratuita',
      subtitle: 'Hablemos sobre sus objetivos inmobiliarios en Tampa y Miami.',
      name: 'Su Nombre',
      email: 'Correo Electrónico',
      phone: 'Número de Teléfono',
      message: 'Cuéntenos sobre sus objetivos inmobiliarios',
      type: 'Soy un:',
      buyer: 'Comprador',
      seller: 'Vendedor',
      investor: 'Inversionista',
      button: 'Programar Consulta',
      submitting: 'Enviando...',
      success: '¡Gracias! Nos pondremos en contacto con usted pronto.'
    }
  };
  
  const text = translations[currentLanguage];

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold font-playfair">{text.title}</h3>
        <div className="flex items-center">
          <span className={`mr-2 text-sm ${formData.language === 'english' ? 'text-luxury-gold font-medium' : ''}`}>EN</span>
          <label className="language-toggle">
            <input 
              type="checkbox" 
              className="language-toggle-input sr-only" 
              checked={formData.language === 'spanish'}
              onChange={() => setFormData({
                ...formData,
                language: formData.language === 'english' ? 'spanish' : 'english'
              })}
            />
            <span className="language-toggle-slider"></span>
          </label>
          <span className={`ml-2 text-sm ${formData.language === 'spanish' ? 'text-luxury-gold font-medium' : ''}`}>ES</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{text.subtitle}</p>
      
      {isSuccess ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-md text-center">
          {text.success}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {text.name}
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {text.email}
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {text.phone}
              </label>
              <input 
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              {text.type}
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
            >
              <option value="buyer">{text.buyer}</option>
              <option value="seller">{text.seller}</option>
              <option value="investor">{text.investor}</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {text.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-gold flex justify-center items-center"
          >
            {isSubmitting ? text.submitting : text.button}
          </button>
        </form>
      )}
    </div>
  );
};

export default LeadCaptureForm;
