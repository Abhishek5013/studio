"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Code2 className="h-8 w-8 text-primary" />
          <span>Abhishek</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "font-medium transition-colors hover:text-primary relative",
                activeSection === link.id ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.title}
               {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:flex bg-white/20 hover:bg-white/30 text-foreground backdrop-blur-sm border border-white/30 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <Link href="#contact">Hire Me</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
