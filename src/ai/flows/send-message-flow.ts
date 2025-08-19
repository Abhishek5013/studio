'use server';
/**
 * @fileOverview A flow to handle sending a message from the contact form.
 *
 * - sendMessage - A function that handles the message sending process.
 * - SendMessageInput - The input type for the sendMessage function.
 * - SendMessageOutput - The return type for the sendMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const SendMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The content of the message.'),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

const SendMessageOutputSchema = z.object({
  success: z.boolean(),
});
export type SendMessageOutput = z.infer<typeof SendMessageOutputSchema>;

export async function sendMessage(input: SendMessageInput): Promise<SendMessageOutput> {
  return sendMessageFlow(input);
}

const sendMessageFlow = ai.defineFlow(
  {
    name: 'sendMessageFlow',
    inputSchema: SendMessageInputSchema,
    outputSchema: SendMessageOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate an email sending service here.
    // For example, using a service like Resend, SendGrid, or Nodemailer.
    // For this prototype, we'll just log the message to the console.
    console.log('New message received:');
    console.log('Name:', input.name);
    console.log('Email:', input.email);
    console.log('Message:', input.message);
    console.log('Recipient:', 'abhsihekyadav8952@gmail.com');

    // Here you would add the logic to send the email.
    // For example:
    // await sendEmail({
    //   to: 'abhsihekyadav8952@gmail.com',
    //   from: 'portfolio@example.com',
    //   subject: `New message from ${input.name}`,
    //   html: `<p>Name: ${input.name}</p><p>Email: ${input.email}</p><p>Message: ${input.message}</p>`,
    // });

    return { success: true };
  }
);
