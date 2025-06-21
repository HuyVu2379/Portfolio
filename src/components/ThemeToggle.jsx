import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = ({ size = 'md', showTooltip = true, className = '' }) => {
    const { isDark, toggleTheme } = useTheme();

    const sizeClasses = {
        sm: 'p-2 h-8 w-8',
        md: 'p-3 h-12 w-12',
        lg: 'p-4 h-16 w-16'
    };

    const iconSizes = {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6'
    };

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative ${sizeClasses[size]} rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group ${className}`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center justify-center"
            >
                {isDark ? (
                    <Sun className={`${iconSizes[size]} text-yellow-500`} />
                ) : (
                    <Moon className={`${iconSizes[size]} text-indigo-600`} />
                )}
            </motion.div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                    {isDark ? 'Light mode' : 'Dark mode'}
                </div>
            )}
        </motion.button>
    );
};

export default ThemeToggle;
