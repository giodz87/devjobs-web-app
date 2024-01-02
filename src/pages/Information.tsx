import { Link } from "react-router-dom";
import { useUserContext } from "../context";

export default function Information() {
  const context = useUserContext();

  const moreInfo = context.companyData && context.companyData[0];
  // unda vkitxo beqas ratom gaxda sachiro !!!^^
  return (
    <div className=" flex flex-col items-center justify-center">
      <p>
        {moreInfo && (
          <div
            className={` ${
              context.sunMoon
                ? "bg-[#ffffff] text-[#19202D]"
                : "bg-[#19202D] text-white"
            }      flex flex-col gap-10  w-[327px] h-[228px] rounded-md relative items-center justify-cente`}
            key={moreInfo.id}
          >
            <div
              style={{ background: moreInfo.logoBackground }}
              className="w-[50px] h-[50px] absolute rounded-2xl flex items-center justify-center top-[-25px] "
            >
              <img src={moreInfo.logo} alt="" />
            </div>
            <p>{moreInfo.company}</p>
            <div>{moreInfo.position}</div>
            <Link to={moreInfo.website}>Company Site</Link>
          </div>
        )}
      </p>
    </div>
  );
}
