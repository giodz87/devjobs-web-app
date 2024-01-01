import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import logo from "../assets/desktop/logo.svg";
import bg from "../assets/mobile/bg-pattern-header.svg";
import { useUserContext } from "../context";

export default function Header() {
  const context = useUserContext();
  return (
    <>
      <img src={bg} alt="" />
      <div className=" absolute top-[-20px] flex felx-row justify-between items-center h-36 w-[375px] px-6 ">
        <img src={"../../" + logo} alt="Logo" />

        <div className="flex felx-row justify-between items-center gap-4">
          <img src={sun} alt="" />
          <div
            onClick={() => context.setSunMoon(!context.sunMoon)}
            className="w-12 h-6 bg-[#ffffff] rounded-xl relative"
          >
            <div
              className={`w-3.5 h-3.5 rounded-full bg-[#5964E0] absolute top-[5px] ${
                context.sunMoon ? "left-1" : "right-1"
              } `}
            ></div>
          </div>
          <img src={moon} alt="" />
        </div>
      </div>
    </>
  );
}
