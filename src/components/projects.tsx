"use client";
import React from 'react';
import ProjectCard from './project-card';

const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce website built with Spring Boot, React, and MySQL. Includes product management, user authentication, and a shopping cart.",
        imageUrl: "https://placehold.co/600x400.png",
        aiHint: "online shopping",
        projectUrl: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool using microservices architecture. Features real-time updates with WebSockets and a clean, intuitive UI.",
        imageUrl: "https://placehold.co/600x400.png",
        aiHint: "team collaboration",
        projectUrl: "#"
    },
    {
        title: "Blogging API",
        description: "A RESTful API for a blogging platform, enabling CRUD operations for posts and comments, with JWT-based security and role-based access control.",
        imageUrl: "https://placehold.co/600x400.png",
        aiHint: "code screen",
        projectUrl: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="w-full py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12">My Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            aiHint={project.aiHint}
                            projectUrl={project.projectUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
