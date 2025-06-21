import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
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

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
                { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
                { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-800" },
                { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-blue-500" },
                { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 85, color: "from-green-500 to-green-700" },
                { name: "Spring Boot", level: 80, color: "from-green-600 to-emerald-600" },
                { name: "Express.js", level: 85, color: "from-gray-600 to-gray-800" },
                { name: "RESTful APIs", level: 90, color: "from-purple-500 to-pink-500" }
            ]
        },
        {
            title: "Database & Tools",
            skills: [
                { name: "MongoDB", level: 85, color: "from-green-500 to-green-700" },
                { name: "PostgreSQL", level: 80, color: "from-blue-600 to-indigo-600" },
                { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
                { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
                { name: "Firebase", level: 80, color: "from-yellow-500 to-orange-500" }
            ]
        }
    ];

    const technologies = [
        "React", "React Native", "Node.js", "Spring Boot", "MongoDB", "PostgreSQL",
        "Docker", "Firebase", "Git", "TypeScript", "Tailwind CSS",
        "Express.js", "Socket.IO", "JWT", "Redis", "Postman", "Figma", "Microservices", "Trello", "Jenkins"
    ]; return (
        <section ref={ref} id="skills" className="w-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <motion.div
                className="max-w-6xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                {/* Skill Categories with Progress Bars */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            variants={itemVariants}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technology Tags */}
                <motion.div variants={itemVariants} className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
                        Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={index}
                                variants={itemVariants}
                                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-default"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
