"use client";

import { useState, useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';

type SkillProgressProps = {
  skill: string;
  level: number;
};

const SkillProgress = ({ skill, level }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setProgress(level), 300);
          return () => clearTimeout(timer);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [level]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <Progress value={progress} className="h-2 [&>div]:bg-primary" />
    </div>
  );
};

export default SkillProgress;
