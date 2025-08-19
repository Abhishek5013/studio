"use client"
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import SkillProgress from './skill-progress';

const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "React", level: 80 },
    { name: "SQL", level: 88 },
    { name: "Microservices", level: 75 },
    { name: "Cloud (AWS/GCP)", level: 70 },
];

const About = () => {
    return (
        <section id="about" className="w-full py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12">About Me</h2>
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2 flex justify-center">
                         <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-white/20 backdrop-blur-lg border border-white/30">
                            <CardContent className="p-0">
                                <Image
                                    src="https://placehold.co/400x400.png"
                                    alt="Abhishek Yadav"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                    data-ai-hint="man portrait"
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="md:col-span-3 space-y-6">
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            I am a versatile professional with skills in Web Development, Python Programming, 3D Design & Animation, and Software Development. Along with my technical expertise, I possess strong communication and community management skills, which help me effectively collaborate with teams and support customers. My goal is to leverage both my technical knowledge and interpersonal abilities to contribute value in IT as well as customer support roles.
                        </p>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <SkillProgress key={index} skill={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
