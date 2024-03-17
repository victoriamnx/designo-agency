import DarkLogo from "./components/shared/desktop/logo-dark.png";
import { FirstSection } from "./home-sections/first_section";
import { Footer } from "./home-sections/footer";
import { SecondSection } from "./home-sections/second_section";
import { ThirdSection } from "./home-sections/third_section";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="fixed hamburger-menu w-screen h-24 flex py-9 px-6 bg-primary-white">
        <div>
          <img src={DarkLogo} alt="Designo Logo" className="w-52 h-7" />
        </div>

        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              OUR COMPANY
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              LOCATIONS
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      <div className="home sections">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
    </div>
  );
}
