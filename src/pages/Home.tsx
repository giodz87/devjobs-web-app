import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

import { useUserContext } from "../context";
import { Link } from "react-router-dom";
export default function Home() {
  const context = useUserContext();

  return (
    <div className={`mt-[90px] flex flex-col gap-12 relative `}>
      {context.dataMap.map(
        (item: {
          id: Key | null | undefined;
          logoBackground: any;
          logo: string | undefined;
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
            }   pl-8    flex flex-col gap-10  w-[327px] h-[228px] rounded-md relative`}
            key={item.id}
          >
            <div
              style={{ background: item.logoBackground }}
              className="w-[50px] h-[50px] absolute rounded-2xl flex items-center justify-center top-[-25px] "
            >
              <img src={item.logo} alt="" />
            </div>
            <div className="flex flex-col gap-3 pt-12">
              <p className=" opacity-50 text-[16px] font-normal">
                {item.postedAt} . {item.contract}
              </p>
              <p className=" text-[20px] font-bold">{item.position}</p>
              <p className=" opacity-50">{item.company}</p>
            </div>
            <Link
              to={"/information"}
              onClick={() => {
                context.setSearchHidden(false);
              }}
              className="text-[#5964E0] text-[14px] font-bold "
            >
              {item.location}
            </Link>
          </div>
        )
      )}
    </div>
  );
}
