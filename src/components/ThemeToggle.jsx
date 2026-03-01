import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

/**
 * ThemeToggle — Dark/Light rejim almashtirish tugmasi
 * Glassmorphism uslubida, smooth animatsiya bilan
 */
export default function ThemeToggle({ isDark, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            className={`
        theme-toggle fixed top-5 right-5 z-50
        w-11 h-11 rounded-full flex items-center justify-center
        backdrop-blur-xl border cursor-pointer
        ${isDark
                    ? 'bg-white/10 border-white/15 text-yellow-400 hover:bg-white/20'
                    : 'bg-gray-900/10 border-gray-300 text-indigo-600 hover:bg-gray-900/20'
                }
      `}
            aria-label={isDark ? 'Light mode-ga o\'tish' : 'Dark mode-ga o\'tish'}
            title={isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
        >
            {isDark ? (
                <FaSun className="text-base" />
            ) : (
                <FaMoon className="text-base" />
            )}
        </button>
    );
}
