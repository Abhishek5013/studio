"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Twitter, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { sendMessage } from '@/ai/flows/send-message-flow';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const result = await sendMessage(values);
            if (result && result.success) {
                toast({
                    title: "Message Sent!",
                    description: "Thanks for reaching out. I'll get back to you soon.",
                });
                form.reset();
            } else {
                 toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem sending your message.",
                });
            }
        } catch (error) {
             toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem sending your message.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    const socialLinks = [
        { icon: <Github />, href: "https://github.com" },
        { icon: <Linkedin />, href: "https://linkedin.com" },
        { icon: <Twitter />, href: "https://twitter.com" },
    ];

    return (
        <section id="contact" className="w-full py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12">Get In Touch</h2>
                <div className="max-w-xl mx-auto p-8 rounded-2xl">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your.email@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your message here..." rows={5} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                        </form>
                    </Form>
                    <div className="flex justify-center gap-6 mt-12">
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-transform duration-300 hover:-translate-y-1">
                                {React.cloneElement(link.icon, { className: "w-8 h-8" })}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
