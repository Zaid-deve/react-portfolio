import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaMedium, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer({ siteProps }) {
    return (
        <footer className="flex flex-col items-center justify-center py-6 bg-gray-800 text-white" id="Footer">
            <h3 className="font-bold md:text-3xl text-2xl">{siteProps.logo}</h3>
            <div className="flex gap-x-10 gap-y-5 flex-col sm:flex-row mt-7">
                {siteProps.facebook && (
                    <a href={siteProps.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl">
                        <FaFacebook />
                    </a>
                )}
                {siteProps.twitter && (
                    <a href={siteProps.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl">
                        <FaTwitter />
                    </a>
                )}
                {siteProps.instagram && (
                    <a href={siteProps.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 text-2xl">
                        <FaInstagram />
                    </a>
                )}
                {siteProps.github && (
                    <a href={siteProps.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl">
                        <FaGithub />
                    </a>
                )}
                {siteProps.medium && (
                    <a href={siteProps.medium} target="_blank" rel="noopener noreferrer" className="hover:text-black text-2xl">
                        <FaMedium />
                    </a>
                )}
                {siteProps.email && (
                    <a href={`mailto:${siteProps.email}`} className="hover:text-red-400 text-2xl">
                        <FaEnvelope />
                    </a>
                )}
                {siteProps.phone && (
                    <a href={`tel:${siteProps.phone}`} className="hover:text-green-400 text-2xl">
                        <FaPhone />
                    </a>
                )}
            </div>
            <p className="text-sm mt-5">&copy; {new Date().getFullYear()} {siteProps.owner}. All rights reserved.</p>
        </footer>
    );
}
