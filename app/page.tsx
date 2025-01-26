import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import WorkButton from "./components/work";
import ContactDetails from "./components/ContactDetails";
import About from "./components/about";
import Projects from "./components/projects";
import Education from "./components/education";
import Certifications from "./components/certifications";
import Skills from "./components/skills";
import ContactMe from "./components/contactMe";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KN13247PTG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KN13247PTG');
            `,
          }}
        />
      </Head>
      
    <div className="flex justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen max-w-[60rem] px-6 pb-10 pt-7 sm:px-10 lg:px-10 leading-relaxed w-full h-full">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Nahom 
        <span className="text-gray-300" > Garefo </span>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="flex flex-col my-16 gap-4 text-center animate-fade-in">

        <WorkButton />

        <h2 className="text-sm text-zinc-500 ">
          I'm building things for the fun of it and  to solve real problems out there.
        </h2>

        <ContactDetails />

        <About />

        <Projects />

        <Education />

        <Certifications />

        <Skills />

        <ContactMe />

        <Footer />




      </div> 
      </div>

      <SpeedInsights />

     





    </div>
    </>
  );

}
