"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Typewriter from './typewriter';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient -z-10"></div>
        <div className="container px-4 md:px-6 z-10">
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-4 text-foreground animate-fade-in-down" style={{animationDelay: '0.2s'}}>
                Abhishek Yadav
            </h1>
            <div className="text-xl md:text-2xl font-body text-foreground/80 mb-8 animate-fade-in-down" style={{animationDelay: '0.4s'}}>
                <Typewriter text="Java Full Stack Developer" />
            </div>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <Link href="#contact">Hire Me</Link>
            </Button>
        </div>
    </section>
  );
};

export default Hero;
