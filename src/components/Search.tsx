import iconFilter from "../assets/mobile/icon-filter.svg";
import search from "../assets/desktop/icon-search.svg";

type formatData = {
  sunMoon: boolean;
};

export default function ({ sunMoon }: formatData) {
  return (
    <div
      className={`  ${
        sunMoon ? "bg-[#ffffff]" : "bg-[#19202D]"
      } w-[327px] h-20 flex flex-row items-center  justify-center gap-6 rounded-md absolute  top-24 `}
    >
      <input
        className={` ${
          sunMoon ? "bg-[#ffffff] text-black" : "bg-[#19202D] text-white"
        }`}
        type="text"
        placeholder="Filter by title…"
      />
      <div className=" flex flex-row gap-6 items-center justify-center">
        <img src={iconFilter} alt="" />
        <button className=" bg-red-300 w-12 h-12 rounded-md relative flex items-center justify-center">
          <img className=" " src={search} alt="" />
        </button>
      </div>
    </div>
  );
}
