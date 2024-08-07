"use client"

import React from "react"
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { Icons } from "./SocialIcons";
import { sendEmail } from "@/lib/sendemail";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {

    const schema = z.object({
        name: z.string().min(2, "Name is required").regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
        email: z.string().email("Please enter a valid email address"),
        message: z.string().min(5, "Message must be at least 10 characters long"),
    })

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const onSubmit = (data: FormData) => {
        sendEmail(data);
    }

    return (
        <div className="w-full max-w-md mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:py-6 bg-white rounded-xl overflow-hidden">
            <div className="space-y-4">
                <div className="text-center">
                    <h2 className="text-xl sm:text-3xl font-bold text-[#2563eb]">Get in Touch</h2>
                    <p className="mt-3 text-black text-sm sm:text-base">
                        Have a question or want to work together? Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('name')}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Your name"
                                className={`block w-full rounded-xl border border-gray-500/25 px-3 py-2 text-black shadow-sm focus:border-[#2563eb] focus:ring-[#2563eb] focus:outline-none ${errors.name ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.name && <p className="mt-2 text-sm text-red-500">{String(errors.name.message)}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('email')}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Your email"
                                className={`block w-full rounded-xl border border-gray-500/25 px-3 py-2 text-black shadow-sm focus:border-[#2563eb] focus:ring-[#2563eb] focus:outline-none ${errors.email ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-500">{String(errors.email.message)}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black">
                            Message
                        </label>
                        <div className="mt-1">
                            <textarea
                                {...register('message')}
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Your message"
                                className={`block w-full rounded-xl border border-gray-500/25 px-3 py-2 text-black shadow-sm focus:border-[#2563eb] focus:ring-[#2563eb] focus:outline-none ${errors.message ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.message && <p className="mt-2 text-sm text-red-500">{String(errors.message.message)}</p>}
                        </div>
                    </div>
                    <div>
                        <Button type="submit" onPress={onOpen} className="w-full rounded-xl justify-center bg-[#2563eb] p-2 text-white hover:bg-black">
                            Submit
                        </Button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm text-black">I&apos;ll get back to you as soon as possible.</p>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                placement={"auto"}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Thank You for Contacting Me!</ModalHeader>
                            <ModalBody>
                                <p>
                                    Thank you for reaching out to me! Your message has been successfully received. I appreciate your interest and will get back to you as soon as possible.
                                </p>
                                <span className="flex flex-col gap-2">
                                    In the meantime, feel free to explore more of my portfolio or connect with me on social media:
                                    <span className="flex items-center flex-row gap-4 m-2">
                                        <Link href={"https://www.linkedin.com/in/shashankgupta944"} className="size-11 p-2 bg-gray-100/80 hover:bg-white rounded-full" target='_blank' rel='noreferrer noopener'><Icons.linkedin /></Link>
                                        <Link href={"https://www.instagram.com/shashank23.10/"} className="size-11 p-2 bg-gray-100/80 hover:bg-white rounded-full" target='_blank' rel='noreferrer noopener'><Icons.instagram /></Link>
                                        <Link href={"https://wa.link/e727fo"} className="size-11 p-2 bg-gray-100/80 hover:bg-white rounded-full " target='_blank' rel='noreferrer noopener'><Icons.whatsapp /></Link>
                                    </span>
                                </span>
                                <span>
                                    If your inquiry is urgent, please don&apos;t hesitate to reach out directly via email at: <Link href={"mailto:shashankgupta944@gmail.com"} className="text-[#2563eb] underline">shashankgupta944@gmail.com</Link>
                                </span>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="ghost" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}