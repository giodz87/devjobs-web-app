import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

import { useUserContext } from "../context";

export default function Home() {
  const context = useUserContext();
  return (
    <div className={`  mt-[70px] flex flex-col gap-12 `}>
      {context.companyData.map(
        (item: {
          id: Key | null | undefined;
          logo: string;
          postedAt:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          contract:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          position:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          company:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          location:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => (
          <div
            className={` ${
              context.sunMoon
                ? "bg-[#ffffff] text-[#19202D]"
                : "bg-[#19202D] text-white"
            }   pl-8    flex flex-col gap-10  w-[327px] h-[228px] rounded-md`}
            key={item.id}
          >
            <img
              className="w-[40px] h-[40px]"
              src={"../../" + item.logo}
              alt=""
            />

            <div className="flex flex-col gap-3">
              <p className=" opacity-50 text-[16px] font-normal">
                {item.postedAt} . {item.contract}
              </p>
              <p className=" text-[20px] font-bold">{item.position}</p>
              <p className=" opacity-50">{item.company}</p>
            </div>
            <p className="text-[#5964E0] text-[14px] font-bold ">
              {item.location}
            </p>
          </div>
        )
      )}
    </div>
  );
}
