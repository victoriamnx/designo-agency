import PassionateImg from "../components/home/desktop/illustration-passionate.svg";
import ResoucerfulImg from "../components/home/desktop/illustration-resourceful.svg";
import FriendlyImg from "../components/home/desktop/illustration-friendly.svg";

export function ThirdSection() {
  return (
    <div className="flex flex-col px-6 mt-24 gap-20 mb-10">
      <div className="flex flex-col items-center text-center gap-8">
        <img src={PassionateImg} alt="" />
        <h1 className="uppercase text-xl leading-6 tracking-[5px]">
          Passionate
        </h1>
        <p className="text-sm font-normal leading-6">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-8">
        <img src={ResoucerfulImg} alt="" />
        <h1 className="uppercase text-xl leading-6 tracking-[5px]">
          Resourceful
        </h1>
        <p className="text-sm font-normal leading-6">
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-8">
        <img src={FriendlyImg} alt="" />
        <h1 className="uppercase text-xl leading-6 tracking-[5px]">Friendly</h1>
        <p className="text-sm font-normal leading-6">
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
    </div>
  );
}
