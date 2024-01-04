import iconFilter from "../../public/assets/mobile/icon-filter.svg";
import searchbg from "../../public/assets/logos/searchbg.svg";
import lightFilter from "../../public/assets/logos/Path.svg";
import { useUserContext } from "../context";
export default function () {
  const context = useUserContext();

  return (
    <div
      className={`  ${
        context.sunMoon ? "bg-[#ffffff]" : "bg-[#19202D]"
      } w-[327px] h-20 flex flex-row items-center  justify-center gap-6 rounded-md absolute  top-24 `}
    >
      <input
        className={` ${
          context.sunMoon
            ? "bg-[#ffffff] text-black"
            : "bg-[#19202D] text-white"
        }`}
        type="text"
        onChange={(e) => context.setSearch(e.target.value)}
        placeholder="Filter by title…"
      />
      <div className=" flex flex-row gap-6 items-center justify-center">
        <div
          onClick={() => {
            context.setCheck(!context.check);
          }}
        >
          {context.sunMoon ? (
            <img src={iconFilter} alt="" />
          ) : (
            <img src={lightFilter} alt="" />
          )}
        </div>
        <button className=" bg-red-300 w-12 h-12 rounded-md relative flex items-center justify-center">
          <img className=" " src={searchbg} alt="" />
        </button>
      </div>
    </div>
  );
}
