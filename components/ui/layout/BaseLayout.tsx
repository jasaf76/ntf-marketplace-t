import { FunctionComponent } from "react";
import Navbar from "../navbar";
import { FcCollect } from "react-icons/fc";
import "./baseLayout.module.css";
import { GiWallet } from 'react-icons/gi'
import {FcGraduationCap} from "react-icons/fc"
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
        <div className="container ml-[350px]">
          <div className="box flex flex-row">
            <div className="py-4 content">
              <span className="text-violet-500 text-semibold"></span>
              <GiWallet className="h-10 w-10 ml-[100px] text-lime-500" />
              <br />
              <br />
              <h2 className="text-bold text-blue-400 text-xl ml-[10px] -mt-[40px]">
                Wallet einrichten
              </h2>
              <p className="text-[14px] text-lime-700 p-2">
                Gehen Sie zu
                <a
                  className="cursor-pointer text-blue-400"
                  href="
              https://metamask.io">
                  metamask.io
                </a>
                &nbsp; und öffnen Sie ein Account, wie einfach funktioniert
                kannst du hier in dieses Video
                <a
                  className="cursor-pointer text-blue-400"
                  href="https://www.youtube.com/watch?v=itdGFLfKGVE">
                  VIDEO
                </a>
                &nbsp; sehen.
              </p>
            </div>
          </div>
          <div className="pl-[40px] box2 flex flex-row">
            <div className="py-4 content">
              <span className="text-violet-600"></span>
              <FcCollect className="w-10 h-10 ml-[80px] my-4" />
              <br />
              <br />
              <h2 className="text-semibold text-blue-400 text-xl ml-[10px] -mt-[40px] ">
                Erstellen Sie ihre erste Sammlung
              </h2>
              <p className="my-4">
                Gehen Sie einfach oben
                <b /> auf dem Menu auf erstellen, und erschaffen <br />
                Sie ihre NFTs um Geld zu <br />
                verdienen.
              </p>
            </div>
          </div>
          <div className="pl-[40px] box3 flex flex-box">
            <div className="bg-lime-400  content">
              <span className="text-violet-600"></span>
              <FcGraduationCap className="h-10 w-10 ml-[80px]  -my-2" />
              <br />
              <br />
              <h2 className="text-semibold text-blue-400 text-xl ml-[28px] -mt-[35px]">
                Geschaft
              </h2>
              <p className="my-4 text-yellow-700">Gratulationen, denn  Sie sind am  Ziel angekommen und jetzt können Sie sich zurücksetzen
               und warten, dass jemand ihre NFT kauft oder vielleicht mögen Sie selbst von anderen kaufen.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
