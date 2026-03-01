import React from 'react';
import { trackLinkClick } from '../config/firebase';

/**
 * SocialFooter — Ijtimoiy tarmoq piktogrammalari
 * Footer qismida ikonkalar bilan ko'rsatiladi
 */
export default function SocialFooter({ socialLinks, isDark }) {
    const handleSocialClick = (e, link) => {
        e.preventDefault();
        trackLinkClick(`Social: ${link.label}`, link.url);
        window.open(link.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="fade-in-up" style={{ animationDelay: '1.2s' }}>
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
                {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.id}
                            href={link.url}
                            onClick={(e) => handleSocialClick(e, link)}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`social-${link.id}`}
                            className={`
                social-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center
                ${isDark
                                    ? 'bg-white/5 border border-white/10 hover:border-white/25'
                                    : 'bg-gray-900/5 border border-gray-200 hover:border-gray-400'
                                }
              `}
                            title={link.label}
                            aria-label={link.label}
                        >
                            <Icon
                                className="text-base sm:text-lg transition-colors duration-300"
                                style={{ color: link.color }}
                            />
                        </a>
                    );
                })}
            </div>

            {/* Divider */}
            <div
                className={`w-16 h-px mx-auto mb-4 ${isDark
                        ? 'bg-gradient-to-r from-transparent via-purple-500/30 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-purple-300/50 to-transparent'
                    }`}
            />

            {/* Copyright */}
            <div className="text-center space-y-1">
                <p
                    className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'
                        }`}
                >
                    Built with{' '}
                    <span className="text-pink-500 animate-pulse inline-block">♥</span>{' '}
                    using React & Tailwind
                </p>
                <p
                    className={`text-xs ${isDark ? 'text-gray-700' : 'text-gray-300'
                        }`}
                >
                    © {new Date().getFullYear()} MyLink Hub
                </p>
            </div>
        </footer>
    );
}
