'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col p-5 rounded-2xl bg-[#F4F5F8] w-full">
      <button 
        onClick={toggleAccordion}
        className="accordion-button flex justify-between gap-1 items-center"
      >
        <span className="font-bold text-2xl text-left">{question}</span>
        <div className={`arrow w-9 h-9 flex shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <Image 
            src="/assets/images/icons/arrow-circle-down.svg" 
            className="transition-all duration-300" 
            alt="icon"
            width={36}
            height={36}
          />
        </div>
      </button>
      <div 
        className={`accordion-content overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[20px] leading-[36px] pt-5">{answer}</p>
      </div>
    </div>
  );
}
