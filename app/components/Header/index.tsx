"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Square, Sun } from "lucide-react";
import links from "@/app/links";
import { Tooltip } from "antd";
import { toggleTheme } from "@/redux/features/theme-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);
  const currentLocation = usePathname();
  return (
    <>
      <header>
        <nav className="flex justify-between items-center w-[94%] mx-auto my-5">
          <div>
            <Link href="/">
              <span
                className={`text-3xl ${
                  theme ? "text-primary" : "text-white"
                } font-bold flex items-baseline`}
              >
                Ahmad{" "}
                <Square fill="teal" color="teal" size={10} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="hidden lg:min-h-fit lg:flex items-center px-5">
            <ul className="flex md:flex-row md:items-center gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-secondaryText mx-4 hover:text-teal
                      ${
                        currentLocation.startsWith(link.href) &&
                        (currentLocation[link.href.length] === "/" ||
                          currentLocation.length === link.href.length) &&
                        "border-b-[3px] border-teal"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {theme ? (
              <Tooltip title="Switch to Dark Mode">
                <Moon
                  onClick={() => dispatch(toggleTheme())}
                  className="cursor-pointer"
                />
              </Tooltip>
            ) : (
              <Tooltip title="Switch to Light Mode">
                <Sun
                  onClick={() => dispatch(toggleTheme())}
                  className="cursor-pointer"
                />
              </Tooltip>
            )}
            <details className="dropdown dropdown-end lg:hidden">
              <summary className="btn m-1">
                <Menu />
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[999] w-52 p-2 shadow">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-secondaryText mx-2
                        ${
                          currentLocation.startsWith(link.href) &&
                          (currentLocation[link.href.length] === "/" ||
                            currentLocation.length === link.href.length) &&
                          "bg-primary text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </header>
    </>
  );
}
