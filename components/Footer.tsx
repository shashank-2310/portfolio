import Image from "next/image"
import Link from "next/link"
import { links } from "./NavLinks"
import ScrollLink from "./ScrollLink"
import { Icons } from "./SocialIcons"

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white p-4 sm:p-8 lg:py-10 lg:px-8 w-full">
            <div className="w-full px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="flex items-center justify-center md:justify-start">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h4 className="text-lg font-medium">Quick Links</h4>
                    <nav className="flex flex-col gap-2 items-center">
                        <Link href={"/"} className='hover:text-blue-400'>Home</Link>
                        {links.map((link) => (
                            <ScrollLink key={link.name} href={link.href} className='hover:text-blue-400'>{link.name}</ScrollLink>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4">
                    <h4 className="text-lg font-medium">Follow Me</h4>
                    <div className="flex-center gap-4 lg:gap-6">
                        <Link href={"https://www.linkedin.com/in/shashankgupta944"} className="size-6" target='_blank' rel='noreferrer noopener'><Icons.linkedin /></Link>
                        <Link href={"https://www.instagram.com/shashank23.10/"} className="size-6" target='_blank' rel='noreferrer noopener'><Icons.instagram /></Link>
                        <Link href={"https://twitter.com/shashankgupta_2"} className="size-6" target='_blank' rel='noreferrer noopener'><Icons.twitter /></Link>
                        <Link href={"https://wa.link/e727fo"} className="size-6" target='_blank' rel='noreferrer noopener'><Icons.whatsapp /></Link>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6 text-center text-sm sm:text-base">
                Made with ❤️ by Shashank Gupta.
            </div>
        </footer>
    )
}