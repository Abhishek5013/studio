"use client";

import { useState, useEffect } from 'react';

type TypewriterProps = {
  texts: string[];
  speed?: number;
};

const Typewriter = ({ texts, speed = 100 }: TypewriterProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingTimeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < currentText.length) {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentText.length) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, texts, textIndex, speed]);

  return (
    <span className="font-code">
      {displayedText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
};

export default Typewriter;
