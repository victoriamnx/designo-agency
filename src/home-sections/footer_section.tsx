import DarkLogo from "../components/shared/desktop/logo-light.png";
import Facebook from "../components/shared/desktop/icon-facebook.svg";
import Instagram from "../components/shared/desktop/icon-instagram.svg";
import Twitter from "../components/shared/desktop/icon-twitter.svg";
import Youtube from "../components/shared/desktop/icon-youtube.svg";
import Pinterest from "../components/shared/desktop/icon-pinterest.svg";

export function Footer() {
  return (
    <div className="bg-primary-black w-screen flex flex-col items-center px-6">
      <div className="relative -top-10 flex flex-col mx-6 px-6 py-16 items-center justify-center bg-primary-peach rounded-2xl">
        <h1>Let’s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button>Get in touch</button>
      </div>

      <div className="flex flex-col items-center">
        <img src={DarkLogo} alt="" className="w-[202px]"/>
        <nav>
          <a href="">OUR COMPANY</a>
          <a href="">LOCATIONS</a>
          <a href="">CONTACT</a>
        </nav>
      </div>

      <div>
        <h1>Designo Central Office</h1>
        <p>3886 Wellington StreetToronto, Ontario M9C 3J5</p>
      </div>

      <div>
        <h1>Contact Us (Central Office)</h1>
        <p>P : +1 253-863-8967 M : contact@designo.co</p>
      </div>

      <div className="flex gap-4">
        <img src={Facebook} alt="" />
        <img src={Youtube} alt="" />
        <img src={Twitter} alt="" />
        <img src={Pinterest} alt="" />
        <img src={Instagram} alt="" />
      </div>
    </div>
  );
}
