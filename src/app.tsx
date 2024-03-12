import DarkLogo from "./components/shared/desktop/logo-dark.png";
import { FirstSection } from "./sections/first_section";
import { SecondSection } from "./sections/second_section";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col mb-10">
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

      <FirstSection />

      <SecondSection />
    </div>
  );
}
