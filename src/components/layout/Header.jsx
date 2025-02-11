import { FaHome, FaUser, FaProjectDiagram, FaFirefoxBrowser } from "react-icons/fa";

const Header = ({ siteProps }) => {
    return (
        <header className="h-20 p-4 flex items-center justify-around gap-x-12 gap-y-2 flex-wrap">
            <h3 className="font-bold md:text-3xl text-2xl">{siteProps.logo}</h3>
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <a href="#Home" className="hover:text-[#007bff] flex items-center gap-2 font-semibold text-[15px]">
                            <FaHome className="text-lg" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#About" className="hover:text-[#007bff] flex items-center gap-2 font-semibold text-[15px]">
                            <FaUser className="text-lg" /> About
                        </a>
                    </li>
                    <li>
                        <a href="#Projects" className="hover:text-[#007bff] flex items-center gap-2 font-semibold text-[15px]">
                            <FaProjectDiagram className="text-lg" /> Projects
                        </a>
                    </li>
                    <li>
                        <a href="#Footer" className="hover:text-[#007bff] flex items-center gap-2 font-semibold text-[15px]">
                            <FaFirefoxBrowser className="text-lg" /> Find me online
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
