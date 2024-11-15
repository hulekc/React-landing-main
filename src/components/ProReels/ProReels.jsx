import css from "../ProReels/ProReels.module.css";
import { useLanguage } from "../../js/LanguageProvider.jsx"; // Імпортуємо хук для мови

export default function ProReels() {
  const { language } = useLanguage(); // Отримуємо поточну мову

  // Тексти для польської та англійської мов
  const text = {
    pl: {
      title: "ProReels",
      descriptionTitle: "REELS BEZ WYPALENIA.",
      list: [
        "Praktykujący kurs na którym ty nauczysz się tworzyć Reels,i zamiast wypalenia przyciągniesz klientów.",
        "Dowiesz się wszystki triki, i jak przyciągać nowych obserwatorów w twój blog.",
        "Ty napewno zejdziesz z martwego punktu.",
        "Dowiesz się jakie urządzenia potrzebujesz dla nagrania zajebistych rolek.",
        "Nie zostanie pytania „ Co musze nagrywać?”.",
        "Dowiesz się najważniejszych haków montażu i będziesz sprzedawać swoi usługi przez Reels, dzięki czemu otrzymasz spektakularne rezultaty."
      ],
      startSoon: "Niedługo Start.",
      access: "Dostęp 6 miesiąca.",
      module: [
        { title: "1 Moduł", items: ["Oświetlenie", "Schematy Oświetlenia", "Nagranie Siebie", "Nagranie Tematyczne"] },
        { title: "2 Moduł", items: ["Gdzie szukać pomysły?", "Prawidłowe napisanie scenariusza", "Okładki Reels", "Formaty i opis"] },
        { title: "3-4 Moduł", items: ["Jak nagrywać MK część praktyczna", "Jak montować, pełna znajomość z aplikacjami do montowania", "Praktyka montowania krok po kroku", "Inspiracji, przejścia"] },
        { title: "5 Moduł", items: ["Nagranie siebie praktyka", "montowanie"] },
        { title: "6 tydzień bonus: Moduł", items: ["Wizualna strona Instagram", "Bazowe sprzedaży"] }
      ]
    },
    en: {
      title: "ProReels",
      descriptionTitle: "REELS WITHOUT BURNOUT.",
      list: [
        "A practical course where you will learn how to create Reels, and instead of burnout, you will attract clients.",
        "You will learn all the tricks and how to attract new followers to your blog.",
        "You will definitely get unstuck.",
        "You will learn what equipment you need to record amazing Reels.",
        "There will be no more questions like 'What should I record?'",
        "You will learn the most important editing hacks and start selling your services through Reels, achieving spectacular results."
      ],
      startSoon: "Starting soon.",
      access: "Access for 6 months.",
      module: [
        { title: "Module 1", items: ["Lighting", "Lighting Schemes", "Recording Yourself", "Thematic Recording"] },
        { title: "Module 2", items: ["Where to find ideas?", "Correct script writing", "Reels Thumbnails", "Formats and descriptions"] },
        { title: "Modules 3-4", items: ["How to record MK, practical part", "How to edit, full knowledge of editing apps", "Editing practice step by step", "Inspiration, transitions"] },
        { title: "Module 5", items: ["Recording yourself - practice", "Editing"] },
        { title: "Bonus Week 6: Module", items: ["Visual aspect of Instagram", "Basic sales"] }
      ]
    }
  };

  return (
    <section id="proreels" className={css.sectionPro}>
      <div className={css.containerPro}>
        <h2 className={css.textPro}>{text[language].title}</h2>
        <div className={css.boxText}>
          <h3 className={css.descrPro}>{text[language].descriptionTitle}</h3>
          <ul className={css.descList}>
            {text[language].list.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <p className={css.descrCzas}>
            {text[language].startSoon}<br />
            {text[language].access}
          </p>
        </div>
        <ul className={css.listPro}>
          {text[language].module.map((module, index) => (
            <li key={index} className={css.itemPro}>
              <h3>{module.title}</h3>
              <ul>
                {module.items.map((item, idx) => (
                  <li key={idx}>
                    <p>- {item}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
