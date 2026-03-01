import { useState, useEffect } from 'react';

/**
 * Dark/Light tema boshqaruvi uchun custom hook
 * LocalStorage-da saqlanadi va system preference-ni aniqlaydi
 */
export function useTheme() {
    const [isDark, setIsDark] = useState(() => {
        // LocalStorage-dan olish
        const saved = localStorage.getItem('mylink-theme');
        if (saved !== null) {
            return saved === 'dark';
        }
        // System preference
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return true; // Default: dark
    });

    useEffect(() => {
        localStorage.setItem('mylink-theme', isDark ? 'dark' : 'light');

        // HTML elementiga class qo'shish
        if (isDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return { isDark, toggleTheme };
}
