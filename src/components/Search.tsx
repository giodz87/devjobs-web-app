import iconFilter from "../../public/assets/mobile/icon-filter.svg";
import searchbg from "../../public/assets/logos/searchbg.svg";
import lightFilter from "../../public/assets/logos/Path.svg";
import search from "../../public/assets/desktop/icon-search.svg";
import location from "../../public/assets/desktop/icon-location.svg";
import check from "../../public/assets/desktop/icon-check.svg";
import { useUserContext } from "../context";
export default function () {
  const context = useUserContext();

  const handleFilter = (e: { target: { value: string } }) => {
    const filterValue = e.target.value.toLowerCase();
    context.setLocation(filterValue);
  };

  const handleFullTime = (e: { target: { checked: boolean } }) => {
    const isFullTime = e.target.checked;
    context.setFullTime(isFullTime);
  };
  console.log(context.location, context.search);
  return (
    <>
      <div
        className={`  ${
          context.sunMoon ? "bg-[#ffffff]" : "bg-[#19202D]"
        } w-[327px] h-20 flex flex-row items-center  justify-center gap-6 rounded-md absolute  top-24 md:hidden`}
      >
        <input
          className={` ${
            context.sunMoon
              ? "bg-[#ffffff] text-black"
              : "bg-[#19202D] text-white"
          } outline-none cursor-pointer`}
          type="text"
          onChange={(e) => {
            context.setSearch(e.target.value);
          }}
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
          <button
            onClick={() => {
              context.dataFilter();
            }}
            className="w-12 h-12 rounded-md relative flex items-center justify-center  hover:bg-[#939BF4]"
          >
            <img className=" " src={searchbg} alt="" />
          </button>
        </div>
      </div>

      <section
        className={` ${
          context.sunMoon ? "bg-[#ffffff]" : "bg-[#19202D] text-white"
        }  hidden md:flex md:flex-row md:items-center md:justify-center  translate-y-[-50px] rounded-md `}
      >
        <div className=" relative">
          <img
            className=" absolute top-[30px] left-[24px]"
            src={search}
            alt="search"
          />
          <input
            className={` ${
              context.sunMoon ? "bg-[#ffffff]" : "bg-[#19202D] border-[#6E8098]"
            }  w-[222px] h-[80px] border-r-[1px] pl-[68px]  rounded-l-lg xl:w-[466px] outline-none cursor-pointer`}
            type="text"
            placeholder="Filter by title…"
            alt="Search img"
            onChange={(e) => {
              context.setSearch(e.target.value);
            }}
          />
        </div>
        <div className=" relative">
          <img
            className=" absolute top-[30px] left-[24px]"
            src={location}
            alt="Location search img"
          />
          <input
            className={` ${
              context.sunMoon
                ? "bg-[#ffffff]"
                : "bg-[#19202D]  border-[#6E8098]"
            }  w-[213px] h-[80px] pl-[57px] border-r-[1px] xl:w-[300px] outline-none cursor-pointer`}
            type="text"
            placeholder="Filter by location…"
            onChange={handleFilter}
          />
        </div>
        <div className="flex flex-row items-center justify-around  pl-[20px] w-[252px] h-[80px] xl:w-[345px] ">
          <div className="flex flex-row items-center gap-4">
            <label className=" relative">
              <input
                checked={context.fullTime}
                type="checkbox"
                onChange={handleFullTime}
                className={` ${
                  context.sunMoon
                    ? "bg-[#19202D] opacity-[0.1035]"
                    : "bg-[#FFFFFF] opacity-[0.1035]"
                } appearance-none w-[24px] h-[24px] cursor-pointer `}
              />
              {context.fullTime ? (
                <div className=" w-[24px] h-[24px] absolute top-0 bg-[#5964E0] flex items-center justify-center cursor-pointer">
                  <img src={check} alt="Checked" />
                </div>
              ) : (
                ""
              )}
            </label>
            <p className="text-[16px]  font-bold">Full Time </p>
          </div>
          <button
            onClick={() => {
              context.dataFilter();
            }}
            className="bg-[#5964E0] hover:bg-[#939BF4] ml-[12px] rounded-[5px] w-[80px] h-12  text-white text-[16px] font-bold xl:w-[123px] cursor-pointer"
          >
            Search
          </button>
        </div>
      </section>
    </>
  );
}
