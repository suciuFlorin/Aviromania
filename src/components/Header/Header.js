import { Popover } from "@headlessui/react";
import { publicPath } from "../../constants/paths";

const orase = ["Oradea", "Brasov", "Cluj Napoca", "Sibiu"];

function Header() {
  return (
    <Popover className="relative bg-white border-b-4 border-brand">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex justify-center align-middle">
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
            </a>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {orase.map((oras) => (
              <a
                key={oras}
                href={`/${oras}`}
                className="text-base font-medium text-brand hover:text-gray-900"
              >
                {oras}
              </a>
            ))}
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}

export default Header;
