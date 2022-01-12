import { Popover } from "@headlessui/react";
import { NavLink, useParams } from "react-router-dom";
import { publicPath } from "../../constants/paths";
import { ORASE } from "../../constants/orase";
import { ATRACTII } from "../../constants/atractii";

function Header() {
  let params = useParams();

  const orasSelectat = params?.oras;

  let activeStyle =
    "bg-gradient-to-t from-amber-400 to-transparent rounded pl-2 pr-2";

  return (
    <Popover className="relative bg-white border-b-4 border-brand">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1  hover:animate-pulse">
            <NavLink to="/" className="flex justify-center align-middle">
              <img
                className="h-8 w-auto sm:h-10"
                src={`${publicPath}/logo.svg`}
                alt="logo"
              />

              <div className="flex align-middle">
                <span className="inline-block align-middle font-bold text-brand text-2xl uppercase ">
                  Aviro
                </span>
                <span className="inline-block align-middle font-light text-brand text-2xl uppercase ">
                  mania
                </span>
              </div>
            </NavLink>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10 ">
            {!orasSelectat &&
              ORASE.map((oras) => {
                const linkOras = `${oras
                  .toLowerCase()
                  .replace(/ /g, "_")}/despre`;
                return (
                  <NavLink
                    to={linkOras}
                    key={linkOras}
                    className={({ isActive }) =>
                      ` text-base font-medium text-brand hover:text-stone-800 hover:font-semibold hover:bg-gradient-to-t from-amber-400 to-transparent hover:rounded pl-2 pr-2 ${
                        isActive ? activeStyle : ""
                      }`
                    }
                  >
                    {oras}
                  </NavLink>
                );
              })}
            {orasSelectat &&
              ATRACTII.map((atractie) => {
                const linkAtractie = atractie.toLowerCase().replace(/ /g, "_");
                return (
                  <NavLink
                    to={linkAtractie}
                    key={linkAtractie}
                    className={({ isActive }) =>
                      `text-base font-medium text-brand hover:text-stone-800 hover:font-semibold hover:bg-gradient-to-t from-amber-400 to-transparent hover:rounded pl-2 pr-2 ${
                        isActive ? activeStyle : ""
                      }`
                    }
                  >
                    {atractie}
                  </NavLink>
                );
              })}
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}

export default Header;
