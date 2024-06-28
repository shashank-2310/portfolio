import React from 'react'
import ContactGlobe from './ContactGlobe'
import ContactForm from './ContactForm'

const ContactMe = () => {
    return (
        <section className='size-full flex flex-col gap-8 lg:gap-12 overflow-hidden my-8 sm:my-0' id='contact'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center uppercase text-white tracking-wider'>Contact Me</h1>
            <div className="flex justify-center items-center lg:flex-row flex-col gap-0 size-full">
                <div className="size-full">
                    <ContactForm />
                </div>
                <div className="size-full hidden lg:block overflow-hidden">
                    <ContactGlobe />
                </div>
            </div>
        </section>
    )
}

export default ContactMe