import React from 'react';

/**
 * Avatar komponenti — Profil rasmi, ism va qisqa BIO
 * Glassmorphism uslubida, animated gradient ring bilan
 */
export default function Avatar({ profile, isDark }) {
    return (
        <div className="flex flex-col items-center text-center fade-in-up">
            {/* Avatar Ring */}
            <div className="relative mb-5">
                <div className="avatar-ring">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-900">
                        <img
                            src={profile.avatarUrl}
                            alt={`${profile.name} avatar`}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                </div>

                {/* Online Status */}
                {profile.isOnline && (
                    <div className="absolute bottom-1 right-1 flex items-center justify-center">
                        <div className="status-online" />
                        <div className="absolute w-10 h-10 rounded-full border-2 border-green-400 opacity-0 animate-ping" />
                    </div>
                )}
            </div>

            {/* Name */}
            <h1
                className={`font-display text-2xl sm:text-3xl font-bold mb-1 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'
                    }`}
            >
                {profile.name}
            </h1>

            {/* Username */}
            <p className="text-sm font-medium bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-3">
                {profile.username}
            </p>

            {/* Bio */}
            <p
                className={`text-sm sm:text-base max-w-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
            >
                {profile.bio}
            </p>

            {/* Status Badge */}
            {profile.statusText && (
                <div
                    className={`mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium ${isDark
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-green-50 text-green-600 border border-green-200'
                        }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {profile.statusText}
                </div>
            )}
        </div>
    );
}
