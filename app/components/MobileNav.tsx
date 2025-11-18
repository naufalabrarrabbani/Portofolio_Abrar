'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleNav}
        className="open-mobile-nav w-8 h-8 flex flex-col justify-center items-center gap-[6px] sm:hidden relative"
      >
        <span className="w-7 h-[3px] bg-white rounded-full"></span>
        <span className="w-7 h-[3px] bg-white rounded-full"></span>
        <span className="w-7 h-[3px] bg-white rounded-full"></span>
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          onClick={toggleNav}
          className="fixed inset-0 bg-black/70 z-[45] sm:hidden"
        />
      )}

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'translate-x-0' : 'translate-x-full'} max-w-[300px] w-full bg-gradient-to-br from-portto-black via-gray-900 to-portto-purple h-screen fixed top-0 right-0 z-[50] transition-transform duration-300 ease-in-out shadow-2xl`}>
        {/* Close Button */}
        <button 
          onClick={toggleNav}
          className="absolute top-[30px] right-[30px] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
        >
          <span className="relative w-6 h-6">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[2px] bg-white rotate-45 rounded-full group-hover:w-6 transition-all duration-300"></span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[2px] bg-white -rotate-45 rounded-full group-hover:w-6 transition-all duration-300"></span>
          </span>
        </button>

        <div className="flex flex-col h-full justify-center items-center gap-[40px] p-8">
          <ul className="flex flex-col gap-[35px] items-center">
            <li>
              <Link href="/" onClick={handleLinkClick} className="font-semibold text-xl text-white hover:text-portto-light-gold transition-all duration-300 hover:scale-110 block">
                Home
              </Link>
            </li>
            <li>
              <a href="#Services" onClick={handleLinkClick} className="font-semibold text-xl text-white hover:text-portto-light-gold transition-all duration-300 hover:scale-110 block">
                Services
              </a>
            </li>
            <li>
              <a href="#Testimonials" onClick={handleLinkClick} className="font-semibold text-xl text-white hover:text-portto-light-gold transition-all duration-300 hover:scale-110 block">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={handleLinkClick} className="font-semibold text-xl text-white hover:text-portto-light-gold transition-all duration-300 hover:scale-110 block">
                Projects
              </a>
            </li>
            <li>
              <a href="#FAQ" onClick={handleLinkClick} className="font-semibold text-xl text-white hover:text-portto-light-gold transition-all duration-300 hover:scale-110 block">
                FAQ
              </a>
            </li>
          </ul>
          <Link href="/assets/doc/CV-Naufal Abrar.pdf" target="_blank" className="bg-portto-light-gold font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_0_#FFE7C280] hover:scale-105 text-center text-portto-black mt-4">
            Hire Me
          </Link>
          
          {/* Decorative Element */}
          <Image 
            src="/assets/images/Ellipse.svg" 
            className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-20 pointer-events-none" 
            alt="decoration"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
