import { FunctionComponent } from "react";
import Navbar from "../navbar";
import { FcCollect } from "react-icons/fc";
import "./baseLayout.module.css";
interface Props {
  children: React.ReactNode;
}

const BaseLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-50 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8 ">
          {children}
        </div>
        <div className="flex flex-row">
          <div className="pl-[440px] box">
            <div className="bg-zinc-200 flex flex-row min-h-[200px] min-w-[320px] py-4 content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="blue"
                className="w-10 h-10 ml-4">
                <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
              </svg>
              <br />
              <br />
              <h1 className="text-semibold text-blue-400 text-xl ml-2">
                Ihr Portemonnaie einrichten
                <p className="text-[14px] text-lime-700 p-2">
                  Gehen Sie zu
                  <a
                    className="cursor-pointer text-blue-400"
                    href="
              https://metamask.io">
                    metamask.io &nbsp;
                  </a>
                  und öffnen <br /> Sie ein Account, und wie einfach funk-
                  <br />
                  tioniert kannst du hier in dieses Video <br />
                  <a
                    className="cursor-pointer text-blue-400"
                    href="https://www.youtube.com/watch?v=itdGFLfKGVE">
                    VIDEO &nbsp;
                  </a>
                  sehen
                </p>
              </h1>
            </div>
          </div>
          <div className="pl-[40px]">
            <div className="bg-zinc-200 flex flex-row min-h-[200px] min-w-[320px] py-4">
              <FcCollect className="w-10 h-10" />
              HALLO
            </div>
          </div>
          <div className="pl-[40px]">
            <div className="bg-lime-400 flex flex-row min-h-[200px] min-w-[320px] py-4">
              HALLO
            </div>
          </div>
          <div className="pl-[40px]">
            <div className="bg-lime-400 flex flex-row min-h-[200px] min-w-[320px] py-4">
              HALLO
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
