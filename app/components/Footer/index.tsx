import { Square } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="w-full bg-primary sticky bottom-0 text-primaryText p-2">
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <span className="text-sm text-center justify-center items-center flex lg:flex-row flex-col lg:text-lg md:text-base my-2">
              Copyright ©2024 All rights reserved
              <Link href="/">
                <span className="text-xl lg:ml-4 mt-4 lg:mt-0 text-primaryText font-bold flex items-baseline">
                  Ahmad{" "}
                  <Square fill="teal" color="teal" size={10} className="ml-1" />
                </span>
              </Link>
            </span>
            <span className="text-sm text-center lg:text-lg md:text-base my-2">
              Terms & Conditions . Privacy Notice
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
