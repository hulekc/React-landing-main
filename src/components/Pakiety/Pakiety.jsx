import css from "../Pakiety/Pakiety.module.css";
import gift from "../../assets/images/reviews/gift-box.png";
import clsx from "clsx";
import { useLanguage } from "../../js/LanguageProvider.jsx"; // Імпортуємо хук для мови
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"; // Імпортуємо axios

const stripePromise = loadStripe('pk_live_51QKOCeFhNgTlpvpSHo1hkgln2LH8EIPPEru1PLetMl6rUH1lpFhfQm0KfPE5xFvZMG3XcboZOJaRLuC1Qmivtgn400GhwfmWsa');

export default function Pakiety() {
  const { language } = useLanguage();

  // Тексти для двох мов
  const text = {
    pl: {
      title: "Do wyboru:",
      package1: "Pakiet1: Tylko oglądać",
      package2: "Pakiet2: Standart",
      package3: "Pakiet Vip:",
      price: "Cena",
      buy: "Kupić",
      access: "dostęp do 5 moduły",
      groupChat: "dostęp do czatu grupowego",
      zoom: "zoom",
      homework: "sprawdzanie pracy domowej i odwrotna info.",
      bonus: "dostęp do bonusu 6 moduły",
      vipBonus: "bonus online kurs „InstaPaznokcie”",
      noAccess: "Brak dostępu do kursów",
    },
    en: {
      title: "Choose from:",
      package1: "Package 1: View Only",
      package2: "Package 2: Standard",
      package3: "VIP Package:",
      price: "Price",
      buy: "Buy",
      access: "access to 5 modules",
      groupChat: "access to group chat",
      zoom: "zoom",
      homework: "homework checking and feedback.",
      bonus: "access to bonus 6 modules",
      vipBonus: "bonus online course 'InstaPaznokcie'",
      noAccess: "No available packages",
    }
  };

  const handleBuy = async (priceId) => {
    const stripe = await stripePromise;
    console.log(stripe,"dkfjdkfjdkfjdfj")
    try {
      const response = await axios.post('https://backend-client-50dq.onrender.com/create-checkout-session', {
        priceId
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const session = response.data;

      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Помилка під час створення сесії:", error);
    }
  };

  return (
    <section id="pakiety" className={css.sectionPak}>
      <div className={css.containerPak}>
        <h2 className={css.textPakiety}>{text[language].title}</h2>
        <ul className={css.listPak}>
          <li>
            <div>
              <p>- {text[language].access}</p>
              <p>- {text[language].groupChat}</p>
            </div>
            <a className={css.linkPakBronze}>{text[language].package1}</a>
            <div className={css.divBuy}>
              <span>
                <p className={css.priceSmall}>420 PLN</p>
                <p className={clsx(css.descrBuy, css.bronze)}>{text[language].price}: <span className={css.spanBuy}>380 PLN</span></p>
              </span>
              <button onClick={() => handleBuy('price_1QKRhJFhNgTlpvpSdLJ5jJXL')} className={css.button3D}>
                {text[language].buy}
              </button>
            </div>
          </li>
          <li>
            <div>
              <p>- {text[language].access}</p>
              <p>- {text[language].groupChat}</p>
              <p>- {text[language].zoom}</p>
              <p>- {text[language].homework}</p>
              <div className={clsx(css.boxGift, css.megaBoxSilver)}>
                <img className={css.gift} src={gift} alt="gift" />
                <p className={css.bonus}>- {text[language].bonus}</p>
              </div>
            </div>
            <a className={css.linkPakSilver}>{text[language].package2}</a>
            <div className={css.divBuy}>
              <span>
                <p className={css.priceSmall}>690 PLN</p>
                <p className={clsx(css.descrBuy, css.silver)}>{text[language].price}: <span className={css.spanBuy}>590 PLN</span></p>
              </span>
              <button onClick={() => handleBuy('prod_RCoUDI77sjgHRM')} className={css.button3D}>
                {text[language].buy}
              </button>
            </div>
          </li>
          <li>
            <div>
              <p>- {text[language].access}</p>
              <p>- osobny czat</p>
              <p>- osobne zoom</p>
              <p>- osobna analiza</p>
              <div className={css.megaBox}>
                <div className={css.boxGift}>
                  <img className={css.gift} src={gift} alt="gift" />
                  <p className={css.bonus}>- {text[language].bonus}</p>
                </div> 
                <div className={css.boxGift}>
                  <img className={css.gift} src={gift} alt="gift" />
                  <p className={css.bonus}>- {text[language].vipBonus}</p>
                </div>
              </div>
            </div>
            <a className={css.linkPakGold}>{text[language].package3}</a>
            <div className={css.divBuy}>
              <span>
                <p className={css.priceSmall}>1500 PLN</p>
                <p className={clsx(css.descrBuy, css.gold)}>{text[language].price}: <span className={css.spanBuy}>1350 PLN</span></p>
              </span>
              <button onClick={() => handleBuy('prod_RCoVIfVMEGPN19')} className={css.button3D}>
                {text[language].buy}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
