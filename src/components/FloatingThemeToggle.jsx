import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const FloatingThemeToggle = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="fixed bottom-8 right-8 z-40"
        >
            <ThemeToggle
                size="lg"
                showTooltip={true}
                className="shadow-2xl hover:shadow-3xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
            />
        </motion.div>
    );
};

export default FloatingThemeToggle;
