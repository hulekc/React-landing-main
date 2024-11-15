import { createContext, useState, useContext } from "react";

// Створюємо контекст
const LanguageContext = createContext();

// Провайдер для контексту
export const LanguageProvider = ( {children} ) => {
    const [language, setLanguage] = useState('pl'); // За замовчуванням польська мова

    // Функція для зміни мови
    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'pl' ? 'en' : 'pl'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Хук для доступу до контексту
export const useLanguage = () => {
    return useContext(LanguageContext);
};
