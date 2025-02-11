import { motion } from "framer-motion";

export default function Projects({ projects }) {
    return (
        <motion.div 
            id="Projects"
            className="h-full md:p-12 p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <motion.h2 
                    className="font-bold md:text-3xl text-2xl mb-1"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    My Projects
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    See what I have made and which tech stack I have covered
                </motion.p>

                <div className="mt-10 flex flex-wrap items-start justify-center gap-x-12 gap-y-6">
                    {
                        projects.map((item, key) => (
                            <motion.div 
                                key={key} 
                                className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: key * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-5">
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <span className="text-sm font-bold text-white">{item.language}</span>
                                    </div>
                                    <div className="mt-3">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {item.name}
                                        </h5>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-3 py-3 text-sm font-medium text-white bg-gray-700 w-full rounded-full hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        View on GitHub
                                    </a>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    );
}
