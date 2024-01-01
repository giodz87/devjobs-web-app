import iconFilter from "../assets/mobile/icon-filter.svg";
import search from "../assets/desktop/icon-search.svg";

import { useUserContext } from "../context";
export default function () {
  const context = useUserContext();

  const handleSearch = (e: { target: { value: string } }) => {
    const searchValue = e.target.value.toLowerCase();
    context.setSearch(searchValue);
  };
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
        onChange={handleSearch}
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
