import DarkLogo from "../components/shared/desktop/logo-light.png";
import Facebook from "../components/shared/desktop/icon-facebook.svg";
import Instagram from "../components/shared/desktop/icon-instagram.svg";
import Twitter from "../components/shared/desktop/icon-twitter.svg";
import Youtube from "../components/shared/desktop/icon-youtube.svg";
import Pinterest from "../components/shared/desktop/icon-pinterest.svg";

export function Footer() {
  return (
    <div className="bg-primary-black w-screen flex flex-col items-center px-6">
      <div className="relative -top-16 text-center">
        <div className="mb-16 flex flex-col mx-6 px-6 py-16 items-center justify-center bg-primary-peach rounded-2xl text-center text-primary-white gap-8">
          <div className="flex flex-col">
            <h1 className="font-medium text-3xl leading-9">
              Let’s talk about your project
            </h1>
            <p className="font-normal text-sm">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="w-40 h-14 bg-primary-white uppercase text-primary-black rounded-lg py-5 px-6 flex items-center justify-center font-medium">
            Get in touch
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src={DarkLogo} alt="" className="w-[202px]" />
          <div className="w-full m-8 px-6 h-[1px] bg-secondary-dark_grey"></div>
          <nav className="flex flex-col text-center gap-8">
            <a
              href=""
              className="text-primary-white text-sm font-normal leading-4 tracking-[2px]"
            >
              OUR COMPANY
            </a>
            <a
              href=""
              className="text-primary-white text-sm font-normal leading-4 tracking-[2px]"
            >
              LOCATIONS
            </a>
            <a
              href=""
              className="text-primary-white text-sm font-normal leading-4 tracking-[2px]"
            >
              CONTACT
            </a>
          </nav>
        </div>

        <div className="mt-10 gap-10 flex flex-col mb-10 text-[#8d8d8d]">
          <div>
            <h1 className="font-bold text-base leading-6 ">
              Designo Central Office
            </h1>
            <p className="font-normal text-base leading-6">
              3886 Wellington Street<br></br> Toronto, Ontario M9C 3J5
            </p>
          </div>
          <div>
            <h1 className="font-bold text-base leading-6 ">
              Contact Us (Central Office)
            </h1>
            <p>
              P : +1 253-863-8967<br></br> M : contact@designo.co
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <img src={Facebook} alt="" />
          <img src={Youtube} alt="" />
          <img src={Twitter} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
    </div>
  );
}
