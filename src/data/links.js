import {
    FaGlobe,
    FaGithub,
    FaTelegram,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    FaBriefcase,
    FaBook,
    FaEnvelope,
    FaCode,
    FaPinterest,
    FaTiktok,
} from 'react-icons/fa';

// ============================================
// Profil ma'lumotlari — Jasurbek Telovov
// ============================================
export const profile = {
    name: 'Jasurbek Telovov',
    username: '@cesurcesurbek',
    bio: 'Texnologiya ishqibozi 🚀 | Kreativ kontent yaratuvchi | Har kuni yangilik, har kuni o\'sish!',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jasurbek&backgroundColor=b6e3f4&accessories=prescription02&clothing=blazerAndSweater&clothesColor=3c4f5c&eyebrow=defaultNatural&eyes=default&facialHair=beardLight&facialHairColor=2c1b18&hairColor=2c1b18&mouth=smile&skinColor=d08b5b&top=shortFlat',
    statusText: 'Yangi loyihalarga ochiqman',
    isOnline: true,
};

// ============================================
// Asosiy linklar
// ============================================
export const links = [
    {
        id: 1,
        title: 'Telegram Kanal',
        url: 'https://t.me/djazur',
        icon: FaTelegram,
        color: '#0ea5e9',
        description: 'Menga Telegramda yozing',
    },
    {
        id: 2,
        title: 'Instagram',
        url: 'https://instagram.com/djazur',
        icon: FaInstagram,
        color: '#e1306c',
        description: 'Rasmlar va hikoyalar',
    },
    {
        id: 3,
        title: 'YouTube Kanal',
        url: 'https://youtube.com/@jasurbekofficial',
        icon: FaYoutube,
        color: '#ef4444',
        description: 'Video darsliklar va kontentlar',
    },
    {
        id: 4,
        title: 'GitHub',
        url: 'https://github.com/cesurcesurbek',
        icon: FaGithub,
        color: '#a855f7',
        description: 'Loyihalar va kodlar',
    },
    {
        id: 5,
        title: 'Pinterest',
        url: 'https://pinterest.com/cesurcesurbek',
        icon: FaPinterest,
        color: '#e60023',
        description: 'Ilhom va g\'oyalar',
    },
    {
        id: 6,
        title: 'TikTok',
        url: 'https://tiktok.com/@cesurcesurbek',
        icon: FaTiktok,
        color: '#25f4ee',
        description: 'Qisqa videolar',
    },
    {
        id: 7,
        title: 'Menga Yozing',
        url: 'mailto:cesurcesurbek@gmail.com',
        icon: FaEnvelope,
        color: '#ec4899',
        description: 'Email: cesurcesurbek@gmail.com',
    },
];

// ============================================
// Ijtimoiy tarmoq piktogrammalari (footer)
// ============================================
export const socialLinks = [
    { id: 's1', icon: FaTelegram, url: 'https://t.me/djazur', label: 'Telegram', color: '#0ea5e9' },
    { id: 's2', icon: FaInstagram, url: 'https://instagram.com/djazur', label: 'Instagram', color: '#e1306c' },
    { id: 's3', icon: FaYoutube, url: 'https://youtube.com/@jasurbekofficial', label: 'YouTube', color: '#ef4444' },
    { id: 's4', icon: FaGithub, url: 'https://github.com/cesurcesurbek', label: 'GitHub', color: '#a855f7' },
    { id: 's5', icon: FaPinterest, url: 'https://pinterest.com/cesurcesurbek', label: 'Pinterest', color: '#e60023' },
    { id: 's6', icon: FaTiktok, url: 'https://tiktok.com/@cesurcesurbek', label: 'TikTok', color: '#25f4ee' },
];
