'use client';

import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './components/MobileNav';
import Accordion from './components/Accordion';

export default function Home() {
  return (
    <div className="text-portto-black font-poppins">
      {/* Header Section */}
      <section id="Header" className="flex flex-col gap-[50px] sm:gap-[100px] bg-portto-black relative pb-[120px] sm:pb-[120px]">
        <nav className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px] relative z-[70] px-6 sm:px-0">
          <Link href="/" className="flex shrink-0 h-fit w-fit">
            <Image src="/assets/images/logos/logo.svg" alt="logo" width={120} height={40} />
          </Link>
          <MobileNav />
          <div className="hidden sm:flex gap-[50px] items-center">
            <ul className="flex gap-[50px] items-center text-white">
              <li>
                <Link href="/" className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#Services" className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#Testimonials" className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#Projects" className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#FAQ" className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300">
                  FAQ
                </a>
              </li>
            </ul>
            <button className="bg-portto-light-gold font-bold text-lg p-[14px_30px] rounded-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
              Hire Me
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero container max-w-[1130px] mx-auto flex flex-col sm:flex-row justify-between items-center relative px-6 sm:px-0">
          <div className="flex flex-col gap-5 sm:gap-[50px] h-fit w-fit text-white z-10">
            <p className="font-semibold text-lg sm:text-2xl">I&apos;m Abrar 👋</p>
            <h1 className="font-extrabold text-[42px] sm:text-[80px] leading-[60px] sm:leading-[90px]">
              Professional Dev & Startup Enthusiast
            </h1>
            <button className="font-bold text-lg sm:text-[26px] sm:leading-[39px] rounded-full sm:rounded-[30px] p-[12px_30px] sm:p-[30px_40px] bg-portto-purple w-fit transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]">
              Explore Now
            </button>
          </div>
          <div className="flex max-w-[471px] max-h-[567px] z-10 mt-0 sm:mt-0">
            <Image 
              src="/assets/images/hero-image.png" 
              className="w-full h-full object-contain" 
              alt="hero image"
              width={471}
              height={567}
              priority
            />
          </div>
          <Image 
            src="/assets/images/Ellipse.svg" 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/3 sm:top-1/2" 
            alt="background icon"
            width={400}
            height={400}
          />
        </div>

        {/* Stats Section */}
        <div className="stats container max-w-[1130px] mx-auto bg-gradient-to-r from-[#FFEDD3] to-[#FFCD83] flex flex-row gap-[10px] sm:gap-0 justify-between items-center px-[20px] sm:px-[100px] py-[18px] sm:py-0 rounded-[20px] sm:rounded-[30px] w-[calc(100vw-32px)] sm:w-full h-[110px] sm:h-[180px] absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2 z-10">
          <div className="text-center w-fit h-fit">
            <p className="font-extrabold text-[22px] sm:text-[40px] leading-[28px] sm:leading-[60px]">95%</p>
            <p className="font-semibold text-[10px] sm:text-lg leading-tight">Client<br className="sm:hidden" />Satisfaction</p>
          </div>
          <div className="text-center w-fit h-fit">
            <p className="font-extrabold text-[22px] sm:text-[40px] leading-[28px] sm:leading-[60px]">7</p>
            <p className="font-semibold text-[10px] sm:text-lg">Projects</p>
          </div>
          <div className="text-center w-fit h-fit">
            <p className="font-extrabold text-[22px] sm:text-[40px] leading-[28px] sm:leading-[60px]">10+</p>
            <p className="font-semibold text-[10px] sm:text-lg leading-tight">Tech<br className="sm:hidden" />Tools</p>
          </div>
          <div className="text-center w-fit h-fit">
            <p className="font-extrabold text-[22px] sm:text-[40px] leading-[28px] sm:leading-[60px]">9/10</p>
            <p className="font-semibold text-[10px] sm:text-lg">Successful</p>
          </div>
          <div className="text-center w-fit h-fit">
            <p className="font-extrabold text-[22px] sm:text-[40px] leading-[28px] sm:leading-[60px]">5</p>
            <p className="font-semibold text-[10px] sm:text-lg">Certification</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Services" className="container max-w-[1130px] mx-auto pt-[100px] sm:pt-[200px] pb-[50px] sm:pb-[100px] px-6 sm:px-0">
        <div className="flex flex-col gap-[30px] sm:gap-[60px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[20px]">
            <div className="flex flex-col gap-[15px]">
              <h2 className="font-extrabold text-[32px] sm:text-[50px] leading-[48px] sm:leading-[60px]">
                What I Can Do <br className="hidden sm:block" />
                <span className="text-portto-purple">For You</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-[500px]">
                I provide high-quality services to help you build amazing digital products that users love.
              </p>
            </div>
            <Link href="#services" className="hidden sm:flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-portto-purple to-portto-black rounded-full w-fit h-fit px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View All Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
            {/* Service 1 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-portto-purple/30 transition-all duration-500 hover:shadow-2xl hover:shadow-portto-purple/10 hover:-translate-y-2">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-portto-purple to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image src="/assets/images/icons/crown.svg" className="w-8 h-8 object-contain filter brightness-0 invert" alt="icon" width={32} height={32} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-portto-light-gold rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-portto-purple transition-colors duration-300">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creating beautiful and intuitive user interfaces that provide exceptional user experiences.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Figma', 'Miro', 'Prototyping'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-portto-purple/10 text-portto-purple text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-portto-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-portto-green/10 hover:-translate-y-2">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-portto-green to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image src="/assets/images/icons/code.svg" className="w-8 h-8 object-contain filter brightness-0 invert" alt="icon" width={32} height={32} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-portto-light-gold rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-portto-green transition-colors duration-300">
                    Web Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building responsive and performant web applications using modern technologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['React', 'Next.js', 'Laravel'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-portto-green/10 text-portto-green text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-portto-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-portto-red/10 hover:-translate-y-2">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-portto-red to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image src="/assets/images/icons/3dcube.svg" className="w-8 h-8 object-contain filter brightness-0 invert" alt="icon" width={32} height={32} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-portto-light-gold rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-portto-red transition-colors duration-300">
                    Workflow Automation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Implementing machine learning solutions and data analysis for business insights.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python', 'N8n', 'Analytics'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-portto-red/10 text-portto-red text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Service Card */}
          <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-portto-black via-gray-900 to-portto-purple overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-portto-purple/20 to-portto-light-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 flex flex-col gap-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-portto-light-gold flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" className="text-portto-black"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-2xl">Full-Stack Solutions</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  End-to-end development services from concept to deployment. I handle everything from design to backend implementation.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Full-Stack', 'UI/UX', 'Database Design', 'API Development'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link href="#contact" className="inline-flex items-center gap-2 font-bold text-lg bg-portto-light-gold text-portto-black rounded-full px-8 py-4 w-fit transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-portto-light-gold/20 to-portto-purple/20 backdrop-blur flex items-center justify-center">
                  <div className="w-32 h-32 rounded-xl bg-portto-light-gold/30 backdrop-blur flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-portto-light-gold rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-portto-purple rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <Link href="#services" className="sm:hidden text-center font-bold text-lg bg-gradient-to-r from-portto-purple to-portto-black rounded-full w-full h-fit p-[14px_30px] text-white transition-all duration-300 hover:scale-105">
            View All Services
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="Projects" 
        className="w-full flex flex-col py-[50px] sm:py-[100px] px-6 sm:px-0 bg-project-background"
      >
        <div className="flex flex-col gap-[10px] mb-[30px] sm:mb-[50px]">
          <h2 className="font-extrabold text-[40px] sm:text-[50px] leading-[70px] text-center text-white">Great Projects</h2>
          <p className="text-lg text-center text-white">Working with awesome team</p>
        </div>
        
        {/* Desktop Project Slider */}
        <div className="projects w-full hidden sm:flex flex-col mb-[30px] overflow-hidden">    
          <div className="group/slider slider flex flex-nowrap w-max items-center">
            <div className="project-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
              {/* Project 1: Learning Hijaiyyah */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails1.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Learning Hijaiyyah <br />With Gamification
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://iqrafun.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Project 2: UI/UX Case Study */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails2.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      UI/UX Case Study <br />Campaign.com
                    </p>
                    <p className="text-lg text-[#BABABC]">UI/UX Bootcamp</p>
                  </div>
                  <Link href="https://medium.com/@naufalabrarrabbanii/ui-ux-case-study-fitur-gamifikasi-pada-aplikasi-campaign-com-38f57f1a2548" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Project 3: Online Knitting Class */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails3.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Online Knitting <br />Class Platform
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://rajutclass.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="project-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
              {/* Duplicate Project 1: Learning Hijaiyyah */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails1.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Learning Hijaiyyah <br />With Gamification
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://iqrafun.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Duplicate Project 2: UI/UX Case Study */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails2.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      UI/UX Case Study <br />Campaign.com
                    </p>
                    <p className="text-lg text-[#BABABC]">UI/UX Bootcamp</p>
                  </div>
                  <Link href="https://medium.com/@naufalabrarrabbanii/ui-ux-case-study-fitur-gamifikasi-pada-aplikasi-campaign-com-38f57f1a2548" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Duplicate Project 3: Online Knitting Class */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails3.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Online Knitting <br />Class Platform
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://rajutclass.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row of Projects */}
        <div className="projects w-full hidden sm:flex flex-col overflow-hidden">    
          <div className="group/slider slider flex flex-nowrap w-max items-center">
            <div className="project-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
              {/* Project 1: Learning Hijaiyyah */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails1.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Learning Hijaiyyah <br />With Gamification
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://iqrafun.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Project 2: UI/UX Case Study */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails2.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      UI/UX Case Study <br />Campaign.com
                    </p>
                    <p className="text-lg text-[#BABABC]">UI/UX Bootcamp</p>
                  </div>
                  <Link href="https://medium.com/@naufalabrarrabbanii/ui-ux-case-study-fitur-gamifikasi-pada-aplikasi-campaign-com-38f57f1a2548" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Project 3: Online Knitting Class */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails3.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Online Knitting <br />Class Platform
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://rajutclass.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="project-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
              {/* Duplicate Project 1: Learning Hijaiyyah */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails1.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Learning Hijaiyyah <br />With Gamification
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://iqrafun.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Duplicate Project 2: UI/UX Case Study */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails2.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      UI/UX Case Study <br />Campaign.com
                    </p>
                    <p className="text-lg text-[#BABABC]">UI/UX Bootcamp</p>
                  </div>
                  <Link href="https://medium.com/@naufalabrarrabbanii/ui-ux-case-study-fitur-gamifikasi-pada-aplikasi-campaign-com-38f57f1a2548" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Duplicate Project 3: Online Knitting Class */}
              <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute flex items-center justify-center bg-gray-100">
                  <Image 
                    src="/assets/images/thumbnails/thumbnails3.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="thumbnail"
                    width={608}
                    height={408}
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center z-10">
                    <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                      Online Knitting <br />Class Platform
                    </p>
                    <p className="text-lg text-[#BABABC]">Website Development</p>
                  </div>
                  <Link href="https://rajutclass.id" target="_blank" className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
                    View Details
                  </Link>
                  <Image 
                    src="/assets/images/Ellipse.svg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2" 
                    alt="background icon"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Projects */}
        <div className="project-container-mobile flex sm:hidden flex-col gap-[30px]">
          {[1, 2, 3].map((num) => (
            <div key={`mobile-${num}`} className="group w-full rounded-[30px] border border-white p-4 bg-[#FFFFFF33] backdrop-blur relative">
              <Link href="/details" className="block w-full aspect-[16/10] rounded-[25px] overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image 
                  src={`/assets/images/thumbnails/thumbnails${num}.png`} 
                  className="max-w-full max-h-full object-contain" 
                  alt="thumbnail"
                  width={400}
                  height={250}
                />
              </Link>
            </div>
          ))}
          <Link href="/details" className="mx-auto font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="Workflow" className="container max-w-[1130px] mx-auto pt-[50px] sm:pt-[100px] pb-[120px] sm:pb-[180px] relative px-6 sm:px-0">
        <div className="flex flex-col gap-[50px] justify-center">
          <h2 className="font-extrabold text-[32px] sm:text-[50px] leading-[48px] sm:leading-[70px] text-center">
            My Workflow Suitable <br />For Any Project
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-center px-[21.5px] sm:px-0 gap-[70px] sm:gap-0">
            <div className="sm:w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
              <div className="flex-none">
                <Image src="/assets/images/icons/messages-notif.svg" alt="icon" width={80} height={80} />
              </div>
              <div className="flex flex-col gap-[10px] text-center">
                <p className="font-extrabold text-[22px] leading-[33px]">Research & Validate</p>
                <p className="text-lg leading-[34px]">Ensuring all requirements were matching with market conditions</p>
              </div>
            </div>
            <div className="sm:w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
              <div className="flex-none">
                <Image src="/assets/images/icons/programming-notif.svg" alt="icon" width={80} height={80} />
              </div>
              <div className="flex flex-col gap-[10px] text-center">
                <p className="font-extrabold text-[22px] leading-[33px]">Building with Teams</p>
                <p className="text-lg leading-[34px]">Working with agile framework to product a better results</p>
              </div>
            </div>
            <div className="sm:w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
              <div className="flex-none">
                <Image src="/assets/images/icons/like-notif.svg" alt="icon" width={80} height={80} />
              </div>
              <div className="flex flex-col gap-[10px] text-center">
                <p className="font-extrabold text-[22px] leading-[33px]">Deliver to Clients</p>
                <p className="text-lg leading-[34px]">We bring an instant results to the clients so that they are happys</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="container max-w-[1130px] mx-auto bg-gradient-to-r from-portto-purple to-portto-black rounded-[20px] sm:rounded-[30px] absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2 w-[calc(100vw-32px)] sm:w-full z-20 overflow-hidden">
          {/* Background Pattern */}
          <Image 
            src="/assets/images/Ellipse.svg" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20" 
            alt="pattern"
            width={200}
            height={200}
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-row items-center justify-between gap-[20px] sm:gap-[40px] px-[25px] sm:px-[60px] py-[25px] sm:py-[40px]">
            {/* Left Content */}
            <div className="flex flex-col gap-[15px] sm:gap-[20px] text-white flex-1">
              <h3 className="font-extrabold text-[22px] sm:text-[36px] leading-[28px] sm:leading-[44px]">
                Let&apos;s Work Together!
              </h3>
              <p className="text-[12px] sm:text-base leading-[18px] sm:leading-[26px] opacity-90">
                Ready to bring your ideas to life?
              </p>
              <Link 
                href="#contact" 
                className="font-bold text-[14px] sm:text-lg bg-portto-light-gold text-portto-black rounded-full px-[25px] sm:px-[35px] py-[12px] sm:py-[16px] transition-all duration-300 hover:shadow-[0_10px_30px_0_#FFE7C280] hover:scale-105 text-center w-fit"
              >
                Start a Project
              </Link>
            </div>

            {/* Right Illustration */}
            <div className="flex-shrink-0 relative w-[100px] sm:w-[180px] h-[100px] sm:h-[180px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/assets/images/flame-75.svg" 
                  className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px]" 
                  alt="3d cube"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="Testimonials" className="bg-[#F4F5F8] pt-[140px] sm:pt-[180px]">
        <div className="container max-w-[1130px] mx-auto pb-[50px] sm:pb-[100px] px-6 sm:px-0">
          <h2 className="font-extrabold text-[32px] sm:text-[50px] leading-[48px] sm:leading-[70px] text-center">
            I Have Delivered Success <br />For All My Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] sm:gap-[30px] mt-[50px]">
            <div className="card-testi bg-white rounded-[30px] flex flex-col p-5 gap-5">
              <div className="h-[60px] flex shrink-0 items-center">
                <Image src="/assets/images/logos/logo_npc.png" alt="logo" width={180} height={60} className="object-contain" />
              </div>
              <p className="font-semibold text-[22px] leading-[40px]">
                &quot;Collaborating with Naufal on that project was so much fun, and he just has this ability to create user-centric products that everyone loves.&quot;
              </p>
              <div className="flex h-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image key={star} src="/assets/images/icons/Star.svg" alt="star" width={32} height={32} />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[70px] rounded-full h-[70px] shrink-0 overflow-hidden">
                  <Image src="/assets/images/photo/photo1.jpg" alt="photo" width={70} height={70} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-xl leading-[30px]">Zaima Firoos</p>
                  <p className="text-lg text-[#878C9C]">PM PLN NPC</p>
                </div>
              </div>
            </div>
            <div className="card-testi bg-white rounded-[30px] flex flex-col p-5 gap-5">
              <div className="h-[60px] flex shrink-0">
                <Image src="/assets/images/logofix.png" alt="logo" width={100} height={60} />
              </div>
              <p className="font-semibold text-[22px] leading-[40px]">
                &quot;He helped create the digital platform for our knitting class events <a href="https://rajutclass.id" target="_blank" rel="noopener noreferrer" className="italic text-portto-purple hover:underline">rajutclass.id</a>, complete with payment gateway integration, and I&apos;m very happy with the result.&quot;
              </p>
              <div className="flex h-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image key={star} src="/assets/images/icons/Star.svg" alt="star" width={32} height={32} />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[70px] rounded-full h-[70px] shrink-0 overflow-hidden">
                  <Image src="/assets/images/photo/photo2.jpg" alt="photo" width={70} height={70} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-xl leading-[30px]">Sindi Nadira</p>
                  <p className="text-lg text-[#878C9C]">Founder Rajut Class</p>
                </div>
              </div>
            </div>
            <Link href="#testimonials" className="sm:hidden mx-auto font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="FAQ" className="container max-w-[1130px] mx-auto px-6 sm:px-0">
        <div className="flex flex-col sm:flex-row gap-[50px] sm:gap-[70px] items-center pt-[50px] sm:pt-[100px] pb-[100px] sm:pb-[150px]">
          <div className="flex flex-col gap-[30px]">
            <div className="w-20 h-20 flex shrink-0 rounded-full bg-portto-purple items-center justify-center">
              <Image src="/assets/images/icons/messages.svg" alt="icon" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-extrabold text-[32px] sm:text-[50px] leading-[48px] sm:leading-[70px]">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#878C9C]">If you have any question please contact me.</p>
            </div>
            <Link href="#contact" className="bg-portto-black font-bold text-lg text-white rounded-full p-[14px_30px] w-fit transition-all duration-300 hover:bg-white hover:text-portto-black hover:ring hover:ring-portto-black">
              Contact Me
            </Link>
          </div>
          <div className="flex flex-col gap-[30px] sm:w-[603px] shrink-0">
            <Accordion 
              question="How do I work usually?"
              answer="As a freelancer, my work process is characterized by flexibility, self-discipline, and a strong emphasis on client communication."
            />
            <Accordion 
              question="How much I charge per project?"
              answer="I don't charge hourly. I charge based on the project brief and given timeline to finish that particular project."
            />
            <Accordion 
              question="Can I work full-time?"
              answer="I don't work full-time. At this moment, I prefer to work remotely and based on the certain project only."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portto-black text-white pb-[50px] border-t-[10px] border-portto-purple px-[30px] sm:px-0">
        <div className="container max-w-[1130px] mx-auto flex flex-col sm:flex-row justify-between pt-[50px] sm:pt-[100px] pb-[50px] mb-[50px] relative border-b border-[#585867] gap-[50px] sm:gap-0">
          <Image 
            src="/assets/images/Ellipse.svg" 
            className="absolute h-[300px] top-[70px] right-0 sm:-left-[20px] z-0" 
            alt="icon"
            width={300}
            height={300}
          />
          <div className="flex shrink-0 h-fit z-10">
            <Image src="/assets/images/logos/logo.svg" alt="logo" width={120} height={40} />
          </div>
          <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[100px] z-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Explore</p>
              <Link href="#services" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                Services
              </Link>
              <Link href="#testimonials" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                Testimonials
              </Link>
              <Link href="#about" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                About
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Services</p>
              <Link href="#" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                UI/UX Design
              </Link>
              <Link href="#" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                Web Development
              </Link>
              <Link href="#" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                Workflow Automation
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">About</p>
              <Link href="#" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                My Profile
              </Link>
              <Link href="#" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                How do I work
              </Link>
              <Link href="#" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300">
                Achievements
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Connect</p>
              <Link href="tel:+12208 1996" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]">
                <Image src="/assets/images/icons/call.svg" alt="icon" width={25} height={25} />
                +62 857 7958 5233
              </Link>
              <Link href="#" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]">
                <Image src="/assets/images/icons/linkedin.svg" alt="icon" width={25} height={25} />
                Naufal Abrar Rabbani
              </Link>
              <Link href="" className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]">
                <Image src="/assets/images/icons/email.svg" alt="icon" width={25} height={25} />
                naufalabrarrabbanii@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <p className="text-sm text-[#A0A0AC] sm:text-center">All Rights Reserved. Naufal Abrar Rabbani.</p>
      </footer>
    </div>
  );
}
