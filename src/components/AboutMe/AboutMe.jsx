import css from "../AboutMe/AboutMe.module.css"
import imagePathAboutMe from "../../assets/images/about/ania_three-removebg_two.png";
import { AiTwotoneBulb } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { FaLemon } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { RiNumber8 } from "react-icons/ri";
import imageAboutMeOne from "../../assets/images/about/ania_four_lap.jpg";
import imageAboutMeTwo from "../../assets/images/about/ania_two_desc.jpg";
import imageAboutMeThree from "../../assets/images/about/ania_five_lap.jpg";
import camera from "../../assets/images/reviews/camera.png";
import { useLanguage } from "../../js/LanguageProvider.jsx"; // Імпортуємо хук

export default function AboutMe() {
    const { language } = useLanguage(); // Використовуємо хук для отримання поточної мови

    // Тексти для двох мов
    const text = {
        pl: {
            title: "O mnie",
            subtitle: "W przeszłości stylistka paznokci",
            bulletPoints: [
                "#za rok do mnie przyszło 35 tysięcy obserwujących dzięki REELS, bez żadnej reklamy",
                "#ucze stylistki robić zajebiste zdjęcia od podstaw",
                "#ucze robić rolki które przynoszą rezultaty, dzięki którym zrasta dochód"
            ],
            courseTitle: "Online kurs „InstaPaznokcie” przeszło 200+ stylistek",
            courseDetails: "#znam jak prowadzić instagram ze by zarabiać",
            achievementsTitle: "Moje osiągnięcia i wiedza specjalistyczna",
            achievements: [
                { icon: RiNumber8, description: "8 lat w beauty branże" },
                { icon: PiVideoFill, description: "Autorka online szkolenia ProReels" },
                { icon: FaInstagramSquare, description: "Autorka online kursu InstaPaznokcie" },
                { icon: AiTwotoneBulb, description: "Tworcza" },
                { icon: FaLemon, description: "Reels na kilka🍋 wyświetleń" },
                { icon: GrUserExpert, description: "Ekspert z tworzenia contentu" }
            ]
        },
        en: {
            title: "About Me",
            subtitle: "In the past, a nail stylist",
            bulletPoints: [
                "#In a year, 35 thousand followers came to me thanks to REELS, without any ads",
                "#I teach stylists to take amazing photos from scratch",
                "#I teach how to create reels that bring results, increasing income"
            ],
            courseTitle: "Online course 'InstaNails' with over 200+ stylists",
            courseDetails: "#I know how to run Instagram to make money",
            achievementsTitle: "My Achievements and Expertise",
            achievements: [
                { icon: RiNumber8, description: "8 years in the beauty industry" },
                { icon: PiVideoFill, description: "Creator of the online training ProReels" },
                { icon: FaInstagramSquare, description: "Creator of the online course InstaNails" },
                { icon: AiTwotoneBulb, description: "Creative" },
                { icon: FaLemon, description: "Reels with millions🍋 views" },
                { icon: GrUserExpert, description: "Expert in content creation" }
            ]
        }
    };

    return (
        <section id="aboutMe" className={css.sectionAbout}>
            <h2 className={css.mainText}>{text[language].title}</h2>

            <div className={css.divContainer}>
                <img className={css.imageMe} src={imagePathAboutMe} alt="Ania" />
                <div>
                    <div className={css.divContent}>
                        <img className={css.ribbon} src={camera} alt="ribbon" />
                        <h3 className={css.textSkils}>{text[language].subtitle}</h3>
                        <ul className={css.listMe}>
                            {text[language].bulletPoints.map((point, index) => (
                                <li key={index}>
                                    <p className={css.descrAbout}><span className={css.span}>{point.split(" ")[0]}</span> {point.slice(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <h3 className={css.textSkils}>{text[language].courseTitle}</h3>
                        <ul>
                            <li>
                                <p className={css.descrAbout}><span className={css.span}>{text[language].courseDetails.split(" ")[0]}</span> {text[language].courseDetails.slice(1)}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={css.divImages}>
                        <div className={css.imageReviewContainer}>
                            <img className={css.imageReview} src={imageAboutMeTwo} alt="aniaTwo" />
                        </div>
                        <div className={css.imageReviewContainer}>
                            <img className={css.imageReview} src={imageAboutMeThree} alt="aniaThree" />
                        </div>
                    </div>
                </div>

            </div>

            <div className={css.divAchi}>
                <h2 className={css.textAchi}>{text[language].achievementsTitle}</h2>
                <div className={css.divSkills}>
                    <ul className={css.listAchi}>
                        {text[language].achievements.map((item, index) => (
                            <li key={index} className={css.itemAchi}>
                                <item.icon size="40px" color="#A8539D" className={css.icon} />
                                <p className={css.descrAchi}>- {item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <img className={css.imageSkills} src={imageAboutMeOne} alt="fotoAnia" />
                </div>
            </div>
        </section>
    );
}
