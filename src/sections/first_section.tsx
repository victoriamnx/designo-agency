import "../index.css";
import FrameIllustration from "../components/home/desktop/image-hero-phone.png";

export function FirstSection() {
  return (
    <div className="first_section flex flex-col pt-20 bg-primary-peach h-auto overflow-hidden items-center gap-6 mt-14">
      <div className=" flex flex-col gap-4 px-6">
        <h1 className="font-medium text-3xl text-primary-white text-center">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="font-normal text-primary-white leading-7 text-center ">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
      </div>
      <button className="w-40 h-14 bg-primary-white uppercase text-primary-black rounded-lg py-5 px-6 flex items-center justify-center font-medium">
        Learn more
      </button>
      <img
        src={FrameIllustration}
        alt="Frame Illsutration"
        className="FrameIllustration"
      />
    </div>
  );
}
