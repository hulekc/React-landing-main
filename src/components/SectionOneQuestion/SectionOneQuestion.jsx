import { useLanguage } from "../../js/LanguageProvider"; // Імпортуємо хук для мови
import css from "../SectionOneQuestion/SectionOneQuestion.module.css";

export default function SectionOneQuestion() {
  const { language } = useLanguage(); // Отримуємо поточну мову

  // Тексти для польської та англійської мов
  const text = {
    pl: {
      mainTitle: "Dla kogo moje szkolenia?",
      secondTitle: "Dla stylistek/instruktorek beauty branży która sprzedaje swoje usługi. Które chcą:",
      list: [
        "- nauczyć się tworzyć trendowe i jednocześnie wyjątkowe rolki",
        "- zacząć współpracę z markami",
        "- rozwijać swoje social media i przyciągać nowych klientów",
        "- tworzyć mega content, który będzie zaczepiał uwagę odbiorców",
        "- dla tych kto docenia swój czas i jest zmęczony tym ze ich Rolki nie przenoszą rezultaty"
      ]
    },
    en: {
      mainTitle: "Who are my trainings for?",
      secondTitle: "For stylists/instructors in the beauty industry who sell their services. Who want to:",
      list: [
        "- learn how to create trendy and unique reels",
        "- start collaborating with brands",
        "- grow their social media and attract new clients",
        "- create amazing content that will grab the audience's attention",
        "- for those who value their time and are tired of their reels not bringing results"
      ]
    }
  };

  return (
    <section className={css.sectionQue}>
      <div className={css.container}>
        <h2 className={css.mainText}>{text[language].mainTitle}</h2>
        <div>
          <h3 className={css.textSecond}>{text[language].secondTitle}</h3>
          <ul className={css.listQue}>
            {text[language].list.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
