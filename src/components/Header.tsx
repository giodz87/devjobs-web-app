import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import logo from "../assets/desktop/logo.svg";
import bg from "../assets/mobile/bg-pattern-header.svg";
type changeColor = {
  sunMoon: boolean;
  setSunMoon: (sunMoon: boolean) => void;
};

export default function Header({ sunMoon, setSunMoon }: changeColor) {
  return (
    <>
      <img src={bg} alt="" />
      <div className=" absolute top-[-20px] flex felx-row justify-between items-center h-36 w-[375px] px-6 ">
        <img src={logo} alt="" />

        <div className="flex felx-row justify-between items-center gap-4">
          <img src={sun} alt="" />
          <div
            onClick={() => setSunMoon(!sunMoon)}
            className="w-12 h-6 bg-[#ffffff] rounded-xl relative"
          >
            <div
              className={`w-3.5 h-3.5 rounded-full bg-[#5964E0] absolute top-[5px] ${
                sunMoon ? "left-1" : "right-1"
              } `}
            ></div>
          </div>
          <img src={moon} alt="" />
        </div>
      </div>
    </>
  );
}
