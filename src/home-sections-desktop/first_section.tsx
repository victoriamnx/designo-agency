export function FirstSectionD() {
  return (
    <div className="flex justify-between bg-[url('./src/components/home/desktop/bg-pattern-hero-home.svg')] bg-no-repeat bg-right bg-primary-peach px-24 rounded-[15px] overflow-hidden">
      <div className="py-36">
        <div className="flex flex-col gap-3">
          <h1 className="text-primary-white text-5xl font-medium font-['Jost'] leading-[48px]">
            Award-winning custom <br></br> designs and digital <br></br>branding
            solutions
          </h1>
          <p className="text-primary-white text-base font-normal font-['Jost'] leading-relaxed">
            With over 10 years in the industry, we are experienced in <br></br>{" "}
            creating fully responsive websites, app design, and engaging{" "}
            <br></br>brand experiences. Find out more about our services.
          </p>
        </div>
        <button className="w-[152px] h-14 bg-primary-white rounded-lg text-secondary-dark_grey text-[15px] font-medium font-['Jost'] uppercase tracking-wide mt-10">
          Learn More
        </button>
      </div>

      <div className="w-[500px] h-[800px] overflow-hidden bg-[url('./src/components/home/desktop/image-hero-phone.png')] bg-no-repeat bg-center relative -bottom-[100px] "></div>
    </div>
  );
}
