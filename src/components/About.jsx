import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Heart, Cpu, Rocket } from 'lucide-react';

const About = () => {
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

    const stats = [
        { icon: Code, label: "Projects Completed", value: "5" },
        { icon: Rocket, label: "Production-Ready Projects", value: "2" },
        { icon: Heart, label: "Years of Passion", value: "3+" },
        { icon: Cpu, label: "Technologies Used", value: "10+" }
    ]; return (
        <section ref={ref} id="about" className="w-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <motion.div
                className="max-w-6xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            I'm a final-year <span className="text-blue-600 dark:text-blue-400 font-semibold">Software Engineering</span> sstudent
                            has a passion for building real web applications that make a difference. With 3 years of experience, has been exposed to many programming languages ​​during his time studying at school, especially confident with frameworks Nodejs, React, Spring boot
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            My goal is to become a fullstack engineer who builds meaningful and scalable products
                            that solve real problems and create value for users worldwide.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation', "Read English Documents"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
