import { FaPhp, FaReact, FaNodeJs, FaJs, FaCloud, FaVideo, FaRobot } from "react-icons/fa";

export const siteProps = {
    logo: 'Xd.zaid',
    title: ['Hey, Welcome to my portfolio', 'Hire me for creating and managing webpages', 'Hire me for productivity'],
    owner:"Zaid patel",
    description:'I am a professinal website developer, with a prior knowledge of frontend and backend technplogies like MERN stack with a solid implementation of rest apis and load balancing.',
    instagram: 'https://www.instagram.com/dxdy.dev/',
    facebook: 'https://www.facebook.com/profile.php?id=100079517893783',
    twitter: '',
    medium: '',
    github: 'https://github.com/Zaid-deve',
    email: 'patelzaid721@gmail.com',
    phone: "7990225947",
    youtube:''
};

// projects props
export const projectProps = [
    {
        name: '333-comlimited',
        description: "A basic client website for managing driver information with their respective documents, including PDF processing.",
        github: "https://github.com/Zaid-deve/333comlimited",
        language: "PHP",
        icon: <FaPhp className="text-blue-600 text-2xl" />,
    },
    {
        name: 'connector',
        description: "A website for video and audio calling features using WebRTC and Workerman sockets in PHP.",
        github: "https://github.com/Zaid-deve/connector",
        language: "PHP",
        icon: <FaPhp className="text-blue-600 text-2xl" />,
    },
    {
        name: 'quizapp',
        description: "A quiz app that fetches data from a REST API and provides users with a detailed answer description.",
        github: "https://github.com/Zaid-deve/quizApp",
        language: "JavaScript",
        icon: <FaJs className="text-yellow-500 text-2xl" />,
    },
    {
        name: 'videoPlayer',
        description: "A ReactJS video player that can be used to play videos from a remote server where videos have no preview or player. Also scrapes videos from HTML.",
        github: "https://github.com/Zaid-deve/videoPlayer",
        language: "ReactJS",
        icon: <FaVideo className="text-red-500 text-2xl" />,
    },
    {
        name: 'Secure Nodejs Login',
        description: "A secure login system built with Node.js, Express, and MySQL.",
        github: "https://github.com/Zaid-deve/nodejs-login",
        language: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-2xl" />,
    },
    {
        name: 'fb_downloader_react',
        description: "A Facebook media downloader using a custom REST API. Supports all public video and audio downloads from Facebook.",
        github: "https://github.com/Zaid-deve/fb_downloader_react",
        language: "ReactJS",
        icon: <FaReact className="text-blue-400 text-2xl" />,
    },
    {
        name: 'Cloud-File-System',
        description: "A file management system focused on storing user files on Backblaze B2 using the B2 API. Supports adding, deleting, editing, sharing, and downloading files.",
        github: "https://github.com/Zaid-deve/Cloud-File-System",
        language: "PHP",
        icon: <FaCloud className="text-gray-500 text-2xl" />,
    },
    {
        name: 'telegram_login_clone',
        description: "A Telegram login system clone where users enter their phone number (with country code), and an OTP is sent for validation.",
        github: "https://github.com/Zaid-deve/telegram_login_clone",
        language: "JavaScript",
        icon: <FaRobot className="text-gray-700 text-2xl" />,
    }
];
