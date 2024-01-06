import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../context";
import data from "../../data.json";
import { useEffect } from "react";

export default function Information() {
  const context = useUserContext();
  const params = useParams();
  const locationData = data.find(
    (item) => item.location.toLowerCase() === params.location?.toLowerCase()
  );
  useEffect(() => {
    context.setSearchHidden(false);
  }, []);
  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <div>
        {locationData && (
          <div>
            <section
              className={` ${
                context.sunMoon
                  ? "bg-[#ffffff] text-[#19202D]"
                  : "bg-[#19202D] text-white"
              }  -translate-y-4   flex flex-col gap-10  w-[327px] h-[228px] rounded-md relative items-center justify-cente`}
              key={locationData.id}
            >
              <div
                style={{ background: locationData.logoBackground }}
                className="w-[50px] h-[50px] absolute rounded-2xl flex items-center justify-center top-[-25px] "
              >
                <img src={locationData.logo} alt="" />
              </div>
              <div className="flex flex-col items-center justify-between gap-3">
                <p className="mt-[50px] text-[20px] font-bold">
                  {locationData.company}
                </p>
                <p>{locationData.company}.com</p>
              </div>
              <Link
                to={locationData?.website}
                className="w-[147px] h-[48px] rounded-[5px] bg-[#cdd0ec] flex items-center justify-center "
              >
                <p className=" opacity-100 text-[#5964E0] text-[16px] font-bold">
                  Company Site
                </p>
              </Link>
            </section>
          </div>
        )}
      </div>

      <div>
        {locationData && (
          <div>
            <section
              className={` ${
                context.sunMoon
                  ? "bg-[#ffffff] text-[#19202D]"
                  : "bg-[#19202D] text-white"
              }      flex flex-col gap-10  w-[327px]  rounded-md relative items-start px-6 pt-10 justify-cente`}
            >
              <div className="flex flex-col items-start gap-3">
                <div>
                  <p className="text-[#6E8098] text-[16px] font-normal">
                    {" "}
                    {locationData.postedAt} . {locationData.contract}
                  </p>
                </div>
                <h2 className="text-[#19202D] text-[20px] font-bold">
                  {locationData.position}
                </h2>
                <p className="text-[#5964E0] text-[14px] font-bold">
                  {locationData.location}
                </p>
              </div>
              <button className="bg-[#5964E0] w-[279px] h-[48px] rounded-[5px] text-[#fff] text-[16px]  font-bold">
                Apply Now
              </button>
              <p className="text-[#6E8098] text-[16px] font-normal leading-6">
                {locationData.description}
              </p>

              <h2 className="text-[#19202D] text-[20px] font-bold">
                Requirements
              </h2>
              <p className="text-[#6E8098] text-[16px] font-normal leading-6">
                {" "}
                {locationData.requirements.content}
              </p>
              <ul className="list-disc ml-5  text-[#6E8098] text-[16px] font-normal leading-6">
                <li className="mb-2  pl-4">
                  {locationData.requirements.items[0]}
                </li>
                <li className="mb-2 pl-4">
                  {locationData.requirements.items[1]}
                </li>
                <li className="mb-2 pl-4">
                  {locationData.requirements.items[2]}
                </li>
                <li className="mb-2 pl-4">
                  {locationData.requirements.items[3]}
                </li>
              </ul>

              <h2 className="text-[#19202D] text-[20px] font-bold">
                What You Will Do
              </h2>
              <p className="list-disc   text-[#6E8098] text-[16px] font-normal leading-6">
                {locationData.role.content}
              </p>
              <ul className="list-decimal ml-5 text-[16px] font-normal leading-6 pb-[40px]">
                <li className="mb-2  pl-4 text-[#5964E0]">
                  <p className=" text-[#6E8098]">
                    {" "}
                    {locationData.role.items[0]}
                  </p>
                </li>
                <li className="mb-2  pl-4 text-[#5964E0]">
                  <p className=" text-[#6E8098]">
                    {" "}
                    {locationData.role.items[1]}
                  </p>
                </li>{" "}
                <li className="mb-2  pl-4 text-[#5964E0]">
                  <p className=" text-[#6E8098]">
                    {" "}
                    {locationData.role.items[2]}
                  </p>
                </li>{" "}
                <li className="mb-2  pl-4 text-[#5964E0]">
                  <p className=" text-[#6E8098]">
                    {" "}
                    {locationData.role.items[3]}
                  </p>
                </li>
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
