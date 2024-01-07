import location from "../../public/assets/desktop/icon-location.svg";
import { useUserContext } from "../context";
import check from "../../public/assets/desktop/icon-check.svg";
export default function FilterByLocation() {
  const context = useUserContext();

  const handlefilter = (e: { target: { value: string } }) => {
    const filterValue = e.target.value.toLowerCase();
    context.setLocation(filterValue);
  };
  const handleFullTime = (e: { target: { checked: boolean } }) => {
    const isFullTime = e.target.checked;
    context.setFullTime(isFullTime);
  };

  return (
    <section
      onClick={() => {
        context.setCheck(!context.check);
      }}
      className={`  w-full h-[100vh] bg-black bg-opacity-70 flex items-center justify-center   absolute top-0 z-10 md:hidden `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={` ${
          context.sunMoon
            ? "bg-[#ffffff] text-[#19202D]"
            : "bg-[#19202D] text-white"
        } z-3   w-[327px]  opacity-100 flex flex-col items-start  justify-between rounded-md`}
      >
        <div className=" relative">
          <input
            className={`${
              context.sunMoon
                ? "bg-[#ffffff] text-[#19202D]"
                : "bg-[#19202D] text-white"
            }   w-[327px]  h-[72px] pl-[57px] rounded-t-md  outline-none cursor-pointer `}
            type="text"
            placeholder="Filter by location…"
            onChange={handlefilter}
          />
          <img
            className=" absolute top-[20px]  left-[24px] "
            src={location}
            alt=""
          />
        </div>
        <div className="w-full bg-[#6E8098] h-[1px] opacity-[0.2]"></div>
        <div className="pl-6 flex flex-row gap-4 py-5">
          <label className=" relative">
            <input
              checked={context.fullTime}
              type="checkbox"
              onChange={handleFullTime}
              className={` ${
                context.sunMoon
                  ? "bg-[#19202D] opacity-[0.1035]"
                  : "bg-[#FFFFFF] opacity-[0.1035]"
              } appearance-none w-[24px] h-[24px]  cursor-pointer`}
            />
            {context.fullTime ? (
              <div className=" w-[24px] h-[24px] absolute top-0 bg-[#5964E0] flex items-center justify-center cursor-pointer">
                <img src={check} alt="Checked" />
              </div>
            ) : (
              ""
            )}
          </label>
          <p className="text-[16px] font-bold">Full Time Only</p>
        </div>
        <button
          onClick={() => {
            context.dataFilter();
            context.setCheck(false);
          }}
          className="w-[279px] h-[48px]  rounded-md bg-[#5964E0]  hover:bg-[#939BF4] text-white ml-6 mb-5"
        >
          Search
        </button>
      </div>
    </section>
  );
}
