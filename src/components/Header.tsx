import { useUserContext } from "../context";

export default function Header() {
  const context = useUserContext();
  return (
    <>
      <img
        className="flex md:hidden"
        src="./assets/mobile/bg-pattern-header.svg"
        alt=""
      />
      <img
        className=" hidden md:flex md:w-full lg:hidden "
        src="./assets/tablet/bg-pattern-header.svg"
        alt=""
      />
      <img
        className=" hidden lg:flex w-full"
        src="./assets/desktop/bg-pattern-header.svg"
        alt=""
      />
      <div className=" absolute top-[-20px] flex felx-row justify-between items-center h-36 w-[375px] px-6 md:w-full md:px-10  xl:px-[165px]">
        <img src="./assets/desktop/logo.svg" alt="Logo" />

        <div className="flex felx-row justify-between items-center gap-4">
          <img src="./assets/desktop/icon-sun.svg" alt="" />
          <div
            onClick={() => context.setSunMoon(!context.sunMoon)}
            className="w-12 h-6 bg-[#ffffff] rounded-xl relative"
          >
            <div
              className={`w-3.5 h-3.5 rounded-full bg-[#5964E0]   hover:bg-[#939BF4] absolute top-[5px] cursor-pointer ${
                context.sunMoon ? "left-1" : "right-1"
              } `}
            ></div>
          </div>
          <img src="./assets/desktop/icon-moon.svg" alt="" />
        </div>
      </div>
    </>
  );
}
