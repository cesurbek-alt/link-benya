import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './config/firebase';
import { useTheme } from './hooks/useTheme';
import { profile as fallbackProfile, links as fallbackLinks, socialLinks as fallbackSocials } from './data/links';

import Avatar from './components/Avatar';
import LinkCard from './components/LinkCard';
import SocialFooter from './components/SocialFooter';
import ThemeToggle from './components/ThemeToggle';

/**
 * MyLink Hub — Asosiy ilova komponenti
 *
 * Linklar Firestore-dan yuklanadi.
 * Agar Firestore bo'sh yoki ulanish bo'lmasa,
 * fallback data (src/data/links.js) ishlatiladi.
 */
export default function App() {
    const { isDark, toggleTheme } = useTheme();
    const [profileData, setProfileData] = useState(fallbackProfile);
    const [linksData, setLinksData] = useState(fallbackLinks);
    const [socialsData, setSocialsData] = useState(fallbackSocials);
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState('local'); // 'firebase' yoki 'local'

    // ============================================
    // Firestore-dan ma'lumotlarni yuklash
    // ============================================
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Linklar kolleksiyasini olish
                const linksRef = collection(db, 'links');
                const linksQuery = query(linksRef, orderBy('order', 'asc'));
                const linksSnap = await getDocs(linksQuery);

                if (!linksSnap.empty) {
                    const firebaseLinks = linksSnap.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setLinksData(firebaseLinks);
                    setDataSource('firebase');
                }

                // Profil ma'lumotlarini olish
                const profileRef = collection(db, 'profile');
                const profileSnap = await getDocs(profileRef);

                if (!profileSnap.empty) {
                    setProfileData(profileSnap.docs[0].data());
                }
            } catch (error) {
                console.warn('Firestore ulanmadi, lokal data ishlatilmoqda:', error.message);
                setDataSource('local');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ============================================
    // Loading Screen
    // ============================================
    if (loading) {
        return (
            <div
                className={`min-h-screen flex items-center justify-center ${isDark ? 'gradient-bg' : 'gradient-bg-light'
                    }`}
            >
                <div className="flex flex-col items-center gap-4">
                    {/* Animated Logo */}
                    <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 animate-pulse" />
                        <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 animate-ping opacity-20" />
                    </div>
                    <p
                        className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}
                    >
                        Yuklanmoqda...
                    </p>
                </div>
            </div>
        );
    }

    // ============================================
    // Main Layout
    // ============================================
    return (
        <div
            className={`relative min-h-screen overflow-hidden ${isDark ? 'gradient-bg' : 'gradient-bg-light'
                }`}
        >
            {/* Floating Orbs (background decoration) */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />

            {/* Theme Toggle Button */}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-12 sm:py-16">
                {/* Container */}
                <div className="w-full max-w-md mx-auto space-y-8">

                    {/* ---- Avatar & Bio Section ---- */}
                    <section id="profile-section">
                        <Avatar profile={profileData} isDark={isDark} />
                    </section>

                    {/* ---- Links Section ---- */}
                    <section id="links-section" className="space-y-3">
                        {linksData.map((link, index) => (
                            <LinkCard
                                key={link.id}
                                link={link}
                                isDark={isDark}
                                index={index}
                            />
                        ))}
                    </section>

                    {/* ---- Visitor Counter Badge ---- */}
                    <div
                        className="fade-in-up flex justify-center"
                        style={{ animationDelay: '1.1s' }}
                    >
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium ${isDark
                                    ? 'bg-white/5 text-gray-500 border border-white/10'
                                    : 'bg-gray-100 text-gray-400 border border-gray-200'
                                }`}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            {dataSource === 'firebase' ? 'Firebase' : 'Demo'} rejimda
                        </div>
                    </div>

                    {/* ---- Social Footer ---- */}
                    <section id="social-section" className="pt-4 pb-8">
                        <SocialFooter socialLinks={socialsData} isDark={isDark} />
                    </section>
                </div>
            </main>
        </div>
    );
}
