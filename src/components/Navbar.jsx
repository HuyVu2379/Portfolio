import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollSpy, useScrollToSection } from '../hooks/useScrollSpy';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const activeSection = useScrollSpy(['home', 'about', 'projects', 'skills', 'contact']);
    const scrollToSection = useScrollToSection();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
    ]; return (<motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 fixed top-0 w-screen z-50 transition-all duration-300"
    >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                {/* Logo/Brand */}
                <div className="flex-shrink-0 flex items-center">
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Vu Quoc Huy
                        </h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Software Developer</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:justify-center flex-1">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${activeSection === item.id
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-200 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`}></span>
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>                {/* Theme Toggle & Mobile menu button */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle size="md" showTooltip={true} />

                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden"
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeSection === item.id
                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium mx-3 text-center"
                    >
                        Contact Me
                    </button>
                </div>
            </motion.div>
        )}
    </motion.nav>
    );
};
export default Navbar;