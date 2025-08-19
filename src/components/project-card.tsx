import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    aiHint: string;
    projectUrl: string;
};

const ProjectCard = ({ title, description, imageUrl, aiHint, projectUrl }: ProjectCardProps) => {
    return (
        <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col bg-white/10 backdrop-blur-lg border border-white/20">
            <CardHeader className="p-0">
                <div className="overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={aiHint}
                    />
                </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full group/button hover:bg-accent hover:text-accent-foreground transition-colors bg-white/20 border-white/30">
                    <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
