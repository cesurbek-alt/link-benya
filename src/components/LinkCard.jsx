import React from 'react';
import { trackLinkClick } from '../config/firebase';

/**
 * LinkCard komponenti — Har bir link uchun glassmorphism kartochka
 *
 * Props:
 * - link: { id, title, url, icon: IconComponent, color, description }
 * - isDark: boolean
 * - index: number (animation delay uchun)
 */
export default function LinkCard({ link, isDark, index }) {
    const { title, url, icon: Icon, color, description } = link;

    /**
     * Link bosilganda:
     * 1. Google Analytics-ga event yuborish
     * 2. Yangi tabda ochish
     */
    const handleClick = (e) => {
        e.preventDefault();

        // Analytics-ga yuborish
        trackLinkClick(title, url);

        // Yangi tabda ochish
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <a
            href={url}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            id={`link-card-${link.id}`}
            className={`
        block w-full rounded-2xl px-5 py-4 cursor-pointer ripple
        fade-in-up delay-${(index + 2) * 100}
        ${isDark ? 'glass-card' : 'glass-card-light'}
      `}
            style={{ animationDelay: `${(index + 2) * 0.1}s` }}
        >
            <div className="flex items-center gap-4">
                {/* Icon Container */}
                <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300"
                    style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                    }}
                >
                    <Icon
                        className="text-lg transition-all duration-300"
                        style={{ color }}
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                    <h3
                        className={`font-semibold text-sm sm:text-base truncate ${isDark ? 'text-white' : 'text-gray-900'
                            }`}
                    >
                        {title}
                    </h3>
                    {description && (
                        <p
                            className={`text-xs mt-0.5 truncate ${isDark ? 'text-gray-500' : 'text-gray-500'
                                }`}
                        >
                            {description}
                        </p>
                    )}
                </div>

                {/* Arrow */}
                <div
                    className={`flex-shrink-0 transition-transform duration-300 ${isDark ? 'text-gray-600' : 'text-gray-400'
                        }`}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
}
