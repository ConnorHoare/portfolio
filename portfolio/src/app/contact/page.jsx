'use client'
import { useRef } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

import { ContactImage } from "../../../assets";

const page = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_743qioo', 'contact_form', form.current, '7UWCXSXcTOPSdkRRB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="flex">
        <div className="flex-col">
            <p>Contact</p>
            <p>Get In Touch</p>
            <Image src={ContactImage} />
        </div>
        <div>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
        </div>
    )
}

export default page