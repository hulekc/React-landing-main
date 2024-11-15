import css from "../Header/Header.module.css";
import imagInsta from "../../assets/images/reviews/instagram.png";
import burger from "../../assets/images/reviews/burger-bar.png";
import exit from "../../assets/images/reviews/reject.png";
import { useState } from "react";
import clsx from "clsx";
import { useLanguage } from "../../js/LanguageProvider.jsx"; // Імпортуємо хук

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage(); // Використовуємо хук

    function handleOn() {
        setIsOpen(true);
    }

    function handleOff() {
        setIsOpen(false);
    }

    const text = {
        pl: {
            aboutMe: "O mnie",
            reviews: "Opinii",
            proReels: "ProReels",
            packages: "Pakiety",
            courses: "Kursy",
        },
        en: {
            aboutMe: "About me",
            reviews: "Reviews",
            proReels: "ProReels",
            packages: "Packages",
            courses: "Courses",
        }
    };

    return (
        <>
            <header className={css.headerSection}>
                <div className={css.boxHeader}>
                    <a
                        className={css.hrefImage}
                        href="https://www.instagram.com/tworcza.nails?igsh=dDl5NDQyaTRzaXBn"
                        target="_blank"
                    >
                        <img className={css.insta} src={imagInsta} alt="instagram" />
                    </a>
                    <ul className={css.listHeaderOne}>
                        <li>
                            <a href="#aboutMe">{text[language].aboutMe}</a>
                        </li>
                        <li>
                            <a href="#projects">{text[language].reviews}</a>
                        </li>
                        <li>
                            <a href="#proreels">{text[language].proReels}</a>
                        </li>
                        <li>
                            <a href="#pakiety">{text[language].packages}</a>
                        </li>
                        <li>
                            <a href="#kursy">{text[language].courses}</a>
                        </li>
                    </ul>

                    <div className={css.listButton}>
                        <button onClick={toggleLanguage} className={css.languageSwitch}>
                            {language === 'pl' ? 'EN' : 'PL'} {/* Кнопка для перемикання мови */}
                        </button>
                        <button onClick={handleOn} className={css.burger}>
                            <img src={burger} alt="burger-menu" />
                        </button>
                    </div>
                    
                </div>
            </header>
            <nav className={clsx(css.navHeader, { [css.navOpen]: isOpen, [css.navClosed]: !isOpen })}>
                <button onClick={handleOff} className={css.burgerExit}>
                    <img src={exit} alt="exit" />
                </button>
                <ul className={css.listHeader}>
                    <li>
                        <a href="#aboutMe">{text[language].aboutMe}</a>
                    </li>
                    <li>
                        <a href="#projects">{text[language].reviews}</a>
                    </li>
                    <li>
                        <a href="#proreels">{text[language].proReels}</a>
                    </li>
                    <li>
                        <a href="#pakiety">{text[language].packages}</a>
                    </li>
                    <li>
                        <a href="#kursy">{text[language].courses}</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
