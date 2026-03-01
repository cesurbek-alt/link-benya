// ============================================
// Firebase Configuration
// ============================================
// O'zingizning Firebase loyihangiz ma'lumotlarini
// .env faylga yozing va ularni shu yerda ishlating.
//
// .env fayl namunasi:
// VITE_FIREBASE_API_KEY=your-api-key
// VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
// VITE_FIREBASE_PROJECT_ID=your-project-id
// VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
// VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
// VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
// VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
// ============================================

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-api-key',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo.firebaseapp.com',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-project',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'demo.appspot.com',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '000000000',
    appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:000:web:000',
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-DEMO',
};

// Firebase ilovasini ishga tushirish
const app = initializeApp(firebaseConfig);

// Firestore ma'lumotlar bazasi
export const db = getFirestore(app);

// Google Analytics (faqat brauzerda ishlaydi)
let analytics = null;
if (typeof window !== 'undefined') {
    try {
        analytics = getAnalytics(app);
    } catch (error) {
        console.warn('Analytics ishlamadi:', error.message);
    }
}
export { analytics };

/**
 * Link bosilganda Analytics-ga event yuborish
 * @param {string} linkTitle — Link nomi
 * @param {string} linkUrl — Link URL manzili
 */
export const trackLinkClick = (linkTitle, linkUrl) => {
    if (analytics) {
        logEvent(analytics, 'link_click', {
            link_title: linkTitle,
            link_url: linkUrl,
            timestamp: new Date().toISOString(),
        });
    }
    // Consoleda ham ko'rsatish (development uchun)
    console.log(`📊 Analytics: "${linkTitle}" bosildi → ${linkUrl}`);
};

export default app;
