"use client";

import { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
};

const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < text.length) {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(text.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === text.length) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
      }
    };

    typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, speed]);

  return (
    <span className="font-code">
      {displayedText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
};

export default Typewriter;
