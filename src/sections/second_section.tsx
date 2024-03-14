import Arrow from "../components/shared/desktop/icon-right-arrow.svg";
export function SecondSection() {
  return (
    <div className="px-6 flex flex-col gap-6 mt-36">
      <div className="project1 flex flex-col py-24 items-center justify-center gap-3 bg-primary-black rounded-2xl">
        <div id="view">
          <img src="components/images/icon-view.svg" alt="Icon View" />
        </div>
        <h1 className="font-medium text-3xl leading-9 tracking-[1.4px] uppercase text-primary-white">
          Web Design
        </h1>
        <div className="flex items-center  gap-4">
          <a
            href=""
            className="font-normal text-base tracking-[5px] text-primary-white uppercase"
          >
            View Projects
          </a>
          <img src={Arrow} alt="" className="w-1 h-2" />
        </div>
      </div>

      <div className="background">
        <div className="inner"></div>
      </div>

      <div className="project2 flex flex-col py-24 items-center justify-center gap-3 bg-primary-black rounded-2xl">
        <h1 className="font-medium text-3xl leading-9 tracking-[1.4px] uppercase text-primary-white">
          App Design
        </h1>
        <div className="flex items-center  gap-4">
          <a
            href=""
            className="font-normal text-base tracking-[5px] text-primary-white uppercase"
          >
            View Projects
          </a>
          <img src={Arrow} alt="" className="w-1 h-2" />
        </div>{" "}
      </div>
      <div className="project3 flex flex-col py-24 items-center justify-center gap-3 bg-primary-black rounded-2xl">
        <h1 className="font-medium text-3xl leading-9 tracking-[1.4px] uppercase text-primary-white">
          Graphic Design
        </h1>
        <div className="flex items-center  gap-4">
          <a
            href=""
            className="font-normal text-base tracking-[5px] text-primary-white uppercase"
          >
            View Projects
          </a>
          <img src={Arrow} alt="" className="w-1 h-2" />
        </div>{" "}
      </div>
    </div>
  );
}
