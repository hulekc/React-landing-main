import css from "../Hero/Hero.module.css"
import imagePath from "../../assets/images/about/ania_one_tablet.jpg";
import imagePathDesktop from "../../assets/images/about/ania_one_desc.jpg";
import { useLanguage } from "../../js/LanguageProvider.jsx"; // Імпортуємо хук

export default function Hero() {
    const { language } = useLanguage(); // Використовуємо хук

    const text = {
        pl: {
            heading: (
                <>
                    Naucz się <br /> tworzyć rolki,<br /> dzięki którym<br /> zwiększysz swój{' '}
                    <span className={css.spanText}>dochód x2</span>
                </>
            ),
            description: "Hej, jestem Ania i ja napewno wiem jak zrobić ze by twój content przynosił Ci większy dochód.",
            button1: "Dowiedz się więcej",
            button2: "Dołącz do kursu"
        },
        en: {
            heading: (
                <>
                    Learn how to create reels,<br /> that will double<br /> your income{' '}
                    <span className={css.spanText}>x2</span>
                </>
            ),
            description: "Hey, I'm Ania and I definitely know how to make your content bring you more income.",
            button1: "Learn More",
            button2: "Join the Course"
        }
    };
    

    return (
        <section className={css.divHero}>
            <div>
            <h1 className={css.heroText}>{text[language].heading}</h1>
                <div className={css.divBack}>
                    <p className={css.heroDescr}>{text[language].description}</p>
                </div>

                <div className={css.divButton}>
                    <a className={css.heroButton} href="#aboutMe">{text[language].button1}</a>
                    <a className={css.heroButton} href="#proreels">{text[language].button2}</a>
                </div>
            </div>
            <img className={css.image} src={imagePath} alt="ania" />
            <img className={css.imageDesc} src={imagePathDesktop} alt="ania" />
        </section>
    );
}
