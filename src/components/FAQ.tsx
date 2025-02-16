import React, { useState } from 'react';

const faqData = [
  {
    question: '¿Qué servicios de IA ofrecen?',
    answer: 'Ofrecemos automatizaciones con Make, centralita virtual con IA, generación de videos con IA, diseño gráfico e incluso desarrollo de páginas web personalizadas.'
  },
  {
    question: '¿Cómo se personalizan las soluciones?',
    answer: 'Trabajamos estrechamente con cada cliente para entender sus necesidades y ofrecer soluciones a medida que se integran perfectamente en sus procesos.'
  },
  {
    question: '¿Cuánto tiempo tardan en implementar una solución?',
    answer: 'El tiempo varía según el servicio. Por ejemplo, nuestras Páginas Web PRO se entregan en tan solo 24 horas, mientras que otros proyectos personalizados pueden requerir más tiempo.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Respuestas a las dudas más comunes sobre nuestros servicios de IA.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4">
              <button 
                onClick={() => toggleAnswer(index)} 
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {item.question}
                </span>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
