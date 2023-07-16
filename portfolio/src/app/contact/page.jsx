'use client'
import { useRef } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

import { ContactImage } from "../../../assets";

const page = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="md:flex md:flex-row flex-col space-y-4 md:space-y-0 w-full md:justify-around justify-center py-10 items-center">
            <div className="flex-col space-y-10">
                <div className="text-center md:text-left">
                    <p className="bg-gradient-to-r from-purple-2 to-pink-2 text-transparent bg-clip-text font-bold text-lg w-full md:w-1/3 dark:text-blue-4">Contact</p>
                    <p className="font-bold text-purple-2 text-4xl dark:text-white">Get In Touch</p>
                </div>
                <Image src={ContactImage} className="mx-auto md:mx-0" alt="contact image"/>
            </div>
            <div className="md:w-1/3 w-full p-10 bg-white dark:bg-grey-5 rounded drop-shadow-2xl flex-col space-y-10 shadow-blue-1">
                <p className="text-purple-2 font-bold text-2xl dark:text-white">Send Me a Message</p>
                <form className="flex flex-col space-y-6" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col">
                        <label className="font-semibold text-purple-3 dark:text-grey-3">Name</label>
                        <input type="text" name="user_name" className="border dark:border-grey-1 dark:bg-grey-8 py-2 px-2 rounded focus:ring-0 focus:outline-blue-1" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-purple-3 dark:text-grey-3">Email</label>
                        <input type="email" name="user_email" className="border dark:border-grey-1 dark:bg-grey-8 py-2 px-2 rounded focus:ring-0 focus:outline-blue-1" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-purple-3 dark:text-grey-3">Message</label>
                        <textarea name="message" className="border dark:border-grey-1 dark:bg-grey-8 px-2 h-36 resize-none rounded focus:ring-0 focus:outline-blue-1 py-2" />
                    </div>
                    <input type="submit" value="Send Message" className="border bg-blue-1 dark:border-none  dark:bg-blue-4 text-white py-2 rounded" />
                </form>
            </div>
        </div>
    )
}

export default page