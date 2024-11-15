import Header from "../Header/Header.jsx";
import css from "../App/App.module.css";
import Hero from "../Hero/Hero.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import SectionOneQuestion from "../SectionOneQuestion/SectionOneQuestion.jsx";
import ProReels from "../ProReels/ProReels.jsx";
import Pakiety from "../Pakiety/Pakiety.jsx";
import Insta from "../Insta/Insta.jsx";
import Reviews from "../ReviewFoto/ReviewFoto.jsx";

function App() {
  return (
    <div className={css.mainDiv}>
      <Header />
      <Hero />
      <AboutMe />
      <Reviews />
      <SectionOneQuestion />
      <ProReels />
      <Pakiety />
      <Insta />
    </div>
  );
}

export default App;
