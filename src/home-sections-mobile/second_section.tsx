import Arrow from "../components/shared/desktop/icon-right-arrow.svg";
export function SecondSection() {
  return (
    <div className="px-6 flex flex-col gap-6 mt-36">
      <div className="bg-[url('./src/components/home/mobile/image-web-design.jpg')] project1 flex flex-col items-center justify-center gap-3 bg-primary-black rounded-2xl">
        <div className=" bg-[#00000090] flex  flex-col w-full items-center justify-center py-24 rounded-2xl">
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
      </div>

      <div className="bg-[url('./src/components/home/mobile/image-app-design.jpg')] project2 flex flex-col items-center justify-center gap-3 bg-primary-black rounded-2xl">
        <div className="flex  flex-col w-full items-center justify-center py-24 bg-[#00000090] rounded-2xl">
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
          </div>
        </div>
      </div>

      <div className="bg-[url('src/components/home/mobile/image-graphic-design.jpg')] project3 flex flex-col items-center justify-center gap-3 bg-primary-black rounded-2xl">
        <div className="flex  flex-col w-full items-center justify-center py-24 bg-[#00000090] rounded-2xl">
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
    </div>
  );
}
