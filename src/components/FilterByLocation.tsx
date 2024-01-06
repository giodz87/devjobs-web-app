import location from "../../public/assets/desktop/icon-location.svg";
import { useUserContext } from "../context";
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
      className=" w-full h-[100vh] bg-black bg-opacity-70 flex items-center justify-center   absolute top-0 z-10 md:hidden "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="z-3  bg-white w-[327px]  opacity-100 flex flex-col items-start  justify-between rounded-md"
      >
        <div className=" relative">
          <input
            className="w-[327px]  h-[72px] pl-[57px] rounded-t-md "
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
          <input
            checked={context.fullTime}
            type="checkbox"
            onChange={handleFullTime}
          />
          <strong>Full Time Only</strong>
        </div>
        <button
          onClick={() => {
            context.dataFilter();
            context.setCheck(false);
          }}
          className="w-[279px] h-[48px]  rounded-md bg-[#5964E0] text-white ml-6 mb-5"
        >
          Search
        </button>
      </div>
    </section>
  );
}
