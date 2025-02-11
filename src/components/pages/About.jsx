import { FaUser, FaCode, FaGraduationCap, FaFileDownload } from "react-icons/fa";
import aboutImg from '/src/assets/images/about.png';
import resume from '/src/assets/My Resume (4)-1.pdf'

export default function About() {
    return (
        <div className="h-full" id="About">
            <div className="flex container mx-auto h-full items-center justify-around px-5">
                <div className="md:p-10 p-5 rounded-xl bg-black text-white w-full flex gap-4 items-center justify-around">
                    <div className='min-w-[420px] md:block hidden'>
                        <div className='h-[240px] mt-4' style={{
                            background: `url(${aboutImg}) center no-repeat`,
                            backgroundSize: 'contain'
                        }}></div>
                    </div>
                    <div className='text-md'>
                        {/* Who Am I Section */}
                        <h2 className="font-bold md:text-3xl text-2xl mb-6 text-center md:text-left flex items-center gap-2">
                            <FaUser className="text-blue-600 text-3xl" />
                            Who am I?
                        </h2>
                        <p className="text-gray-300 leading-relaxed ps-8">
                            Hey there! I am <span className="font-semibold text-blue-600">Zaid Patel</span>, a passionate web designer, developer, and project manager. I turn ideas into interactive and scalable digital experiences.
                        </p>

                        {/* My Skillset */}
                        <div className='mt-10'>
                            <hr />
                            <h2 className="font-bold text-xl my-3 flex items-center gap-2">
                                <FaCode className="text-green-600 text-2xl" />
                                My Skillset
                            </h2>
                            <p className="text-gray-300 ps-8">
                                I specialize in backend development with <span className="font-semibold">PHP, Node.js, MongoDB, MySQL</span>, and have hands-on experience with almost all modern frontend JavaScript frameworks.
                            </p>
                            <p className="text-gray-300 mt-2 ps-8">
                                Beyond coding, I have a strong grasp of UI/UX design tools like <span className="font-semibold">Figma and Photoshop</span> to bring creative ideas to life.
                            </p>
                        </div>

                        {/* My Educational Journey */}
                        <div className='mt-10'>
                            <hr />
                            <h2 className="font-bold text-xl my-3 flex items-center gap-2">
                                <FaGraduationCap className="text-purple-600 text-2xl" />
                                My Educational Journey
                            </h2>
                            <p className="text-gray-300 ps-8">
                                I completed my 10th and 12th in English medium, where I developed a deep understanding of computers and accounting.
                            </p>
                            <p className="text-gray-300 mt-2 ps-8">
                                Currently, I am in the final stretch of my <span className="font-semibold">Bachelor of Computer Applications (BCA)</span>, expected to graduate in the next few months.
                            </p>
                        </div>

                        {/* Resume Download */}
                        <a href={resume} download="Zaid-patel-resume" className='btn bg-gray-700 py-3 text-md text-white md:px-10 px-4 font-bold rounded-full block w-max ms-auto mt-12 flex items-center gap-2'>
                            <FaFileDownload className="text-white text-xl" />
                            Download my resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
