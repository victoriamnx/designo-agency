import DarkLogo from "./components/shared/desktop/logo-dark.png";
import { FirstSection } from "./home-sections-mobile/first_section";
import { Footer } from "./home-sections-mobile/footer_section";
import { SecondSection } from "./home-sections-mobile/second_section";
import { ThirdSection } from "./home-sections-mobile/third_section";
import { FirstSectionD } from "./home-sections-desktop/first_section";
import { SecondSectionD } from "./home-sections-desktop/second_section";
import { ThirdSectionD } from "./home-sections-desktop/third_section";
import { FooterD } from "./home-sections-desktop/footer_section";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="min-[700px]:hidden">
        <div className="fixed hamburger-menu w-screen h-24 flex py-9 px-6 bg-primary-white z-50">
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

        <div className="mt-64 max-[700px]:hidden">
          <h1>Hello World</h1>
        </div>

        <div>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Footer />
        </div>
      </div>

      <div className="max-[700px]:hidden px-40">
        <div className="flex justify-between items-center py-16">
          <img src={DarkLogo} alt="" className="w-[202px]" />
          <nav className="flex gap-11">
            <a href="">OUR COMPANY</a>
            <a href="">LOCATIONS</a>
            <a href="">CONTACT</a>
          </nav>
        </div>
        <FirstSectionD />
        <SecondSectionD />
        <ThirdSectionD />
        <FooterD />
      </div>
    </div>
  );
}
