import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollSpy';

const Footer = () => {
    const scrollToSection = useScrollToSection();

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        hover: {
            scale: 1.1,
            y: -2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (<motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
        className="w-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
            {/* Bottom section */}
            <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>and lots of ☕ by Vu Quoc Huy</span>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                        © 2025 All rights reserved.
                    </span>
                    <motion.button
                        onClick={scrollToTop}
                        variants={linkVariants}
                        whileHover="hover"
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="Back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </div>
    </motion.footer>
    );
};

export default Footer;
