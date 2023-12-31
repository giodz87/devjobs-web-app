import data from "../../data.json";
import { useParams } from "react-router-dom";
type formatData = {
  sunMoon: boolean;
};
export default function Home({ sunMoon }: formatData) {
  const params = useParams();

  const companyData = data.filter((item) => item.company.toLowerCase());

  return (
    <div className={`  mt-[70px] flex flex-col gap-12 `}>
      {companyData.map((item) => (
        <div
          className={` ${
            sunMoon ? "bg-[#ffffff] text-[#19202D]" : "bg-[#19202D] text-white"
          }   pl-8    flex flex-col gap-10  w-[327px] h-[228px] rounded-md`}
          key={item.id}
        >
          <img src={"../" + item.logo} alt="" />
          <div className="flex flex-col gap-3">
            <p className=" opacity-50 text-[16px] font-normal">
              {item.postedAt} . {item.contract}
            </p>
            <p className=" text-[20px] font-bold">{item.position}</p>
            <p className=" opacity-50">{item.company}</p>
          </div>
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  );
}
