import { Link } from "react-router-dom";
import { useUserContext } from "../context";

export default function Information() {
  const context = useUserContext();
  // const roleData = data.filter((item) => item.role.items.toLowerCase());

  const moreInfo = context.companyData && context.companyData[0];

  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <div>
        {moreInfo && (
          <div>
            <section
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
            </section>
          </div>
        )}
      </div>

      <div>
        {moreInfo && (
          <div>
            <section
              className={` ${
                context.sunMoon
                  ? "bg-[#ffffff] text-[#19202D]"
                  : "bg-[#19202D] text-white"
              }      flex flex-col gap-10  w-[327px]  rounded-md relative items-start px-6 pt-10 justify-cente`}
            >
              <div>
                <div>
                  <p className="text-[#6E8098] text-[16px] font-normal">
                    {" "}
                    {moreInfo.postedAt} . {moreInfo.contract}
                  </p>
                </div>
                <h2 className="text-[#19202D] text-[20px] font-bold">
                  {moreInfo.position}
                </h2>
                <p className="text-[#5964E0] text-[14px] font-bold">
                  {moreInfo.location}
                </p>
              </div>
              <button className="bg-[#5964E0] w-[279px] h-[48px] rounded-[5px] text-[#fff] text-[16px]  font-bold">
                Apply Now
              </button>
              <p className="text-[#6E8098] text-[16px] font-normal leading-6">
                {moreInfo.description}
              </p>

              <h2 className="text-[#19202D] text-[20px] font-bold">
                Requirements
              </h2>
              <p className="text-[#6E8098] text-[16px] font-normal leading-6">
                {" "}
                {moreInfo.requirements.content}
              </p>
              <ul className="list-disc ml-5  text-[#6E8098] text-[16px] font-normal leading-6">
                <li className="mb-2  pl-4">{moreInfo.requirements.items[0]}</li>
                <li className="mb-2 pl-4">{moreInfo.requirements.items[1]}</li>
                <li className="mb-2 pl-4">{moreInfo.requirements.items[2]}</li>
                <li className="mb-2 pl-4">{moreInfo.requirements.items[3]}</li>
              </ul>

              <h2 className="text-[#19202D] text-[20px] font-bold">
                What You Will Do
              </h2>
              <p className="list-disc ml-5  text-[#6E8098] text-[16px] font-normal leading-6">
                {moreInfo.role.content}
              </p>
              <ul className="list-disc ml-5 text-[#6E8098] text-[16px] font-normal leading-6">
                <li className="mb-2  pl-4">{moreInfo.role.items[0]}</li>
                <li className="mb-2 pl-4">{moreInfo.role.items[1]}</li>
                <li className="mb-2 pl-4">{moreInfo.role.items[2]}</li>
                <li className="mb-2 pl-4">{moreInfo.role.items[3]}</li>
              </ul>
            </section>
          </div>
        )}
      </div>
      <div
        className={`${
          context.sunMoon
            ? "bg-[#ffffff] text-[#19202D]"
            : "bg-[#19202D] text-white"
        }  rounded-md w-[375px] h-[96px] flex items-center justify-center`}
      >
        <button className="bg-[#5964E0] w-[279px] h-[48px] rounded-[5px] text-[#fff] text-[16px]  font-bold">
          Apply Now
        </button>
      </div>
    </div>
  );
}
