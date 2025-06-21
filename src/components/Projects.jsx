import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Search } from 'lucide-react';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const projects = [
        {
            name: "Zalo Meta Clone",
            desc: "Real-time chat application with file sharing, and group messaging",
            longDesc: "A comprehensive chat application built with modern web technologies featuring real-time messaging, file sharing, and group management.",
            tech: ["React", "TypeScript", "Node.js", "Socket.IO", "MongoDB", "React Native", "Firebase", "Cloudinary", "JWT", "Jenkins", "Docker"],
            github: "https://huyvu2379.github.io/Zalo-meta-clone",
            website: "https://zalo-meta-web-chi.vercel.app",
            demo: null,
            icon: Smartphone,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            name: "Bicycle E-commerce",
            desc: "Microservice-based e-commerce platform with payment integration",
            longDesc: "A scalable e-commerce platform built with microservices architecture, featuring user authentication, product catalog, shopping cart, and payment processing.",
            tech: ["Spring Boot", "React", "Docker", "PostgreSQL", "Redis", "JWT", "MongoDB", "API Gateway"],
            github: ["https://github.com/HuyVu2379/Bicycle_E-commerce_FE", "https://github.com/HuyVu2379/Bicycle_E-commerce_BE"],
            website: "https://bicycle-e-commerce-fe.vercel.app",
            demo: null,
            icon: Globe,
            gradient: "from-green-500 to-emerald-500"
        },
        {
            name: "Job Seeking",
            desc: "",
            longDesc: "Created a web application to manage job-seeking processes, including user role assignment, email communication, and data handling with a user-friendly interface.",
            tech: ["Spring Boot", "MySQL", "MariaDB", "JPA", "MySQL", "Thymeleaf", "Bootstrap"],
            github: "https://github.com/HuyVu2379/WWW_Week05",
            website: null,
            demo: "https://www.youtube.com/watch?v=example",
            icon: Search,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            name: "Portfolio Website",
            desc: "Responsive portfolio website with dark mode and smooth animations",
            longDesc: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, smooth animations, and optimized performance.",
            tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            github: "https://github.com/yourrepo/portfolio",
            website: "https://your-portfolio.com",
            icon: Code,
            gradient: "from-orange-500 to-red-500"
        }
    ]; return (
        <section ref={ref} id="projects" className="w-screen py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <motion.div
                className="max-w-6xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills in full-stack development
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mr-4`}>
                                        <project.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.name}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.longDesc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                                    >
                                        <Github className="h-4 w-4" />
                                        Code
                                    </a>
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={itemVariants} className="text-center mt-12">
                    <a
                        href="https://github.com/HuyVu2379"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <Github className="h-5 w-5" />
                        View All Projects
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
