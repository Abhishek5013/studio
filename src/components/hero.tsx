"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Typewriter from './typewriter';

const Hero = () => {
  const roles = [
    "3D Generalist",
    "Python Developer",
    "Web Developer",
    "Graphics Designer",
  ];

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="container px-4 md:px-6 z-10">
            <div className="mb-6 animate-fade-in-down">
              <Image
                src="/profile.jpg"
                alt="Abhishek Yadav"
                width={150}
                height={150}
                className="rounded-full object-cover mx-auto border-4 border-white/20 shadow-lg"
                data-ai-hint="man portrait"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-4 animate-fade-in-down text-foreground drop-shadow-md" style={{animationDelay: '0.2s'}}>
                Abhishek Yadav
            </h1>
            <div className="text-xl md:text-2xl font-body text-foreground/80 mb-8 animate-fade-in-down" style={{animationDelay: '0.4s'}}>
                <Typewriter texts={roles} />
            </div>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <a href="/resume.pdf" download>Download Resume</a>
            </Button>
        </div>
    </section>
  );
};

export default Hero;
