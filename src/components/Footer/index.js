import { HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-bermuda to-pink-500 p-4">
      <div className="flex flex-row justify-between max-w-7xl mx-auto px-2">
        <div className="flex flex-row">
          <p className="text-brand mr-2 font-bold">Built in 2022</p>
        </div>
        <div className="flex flex-row">
          <p className="text-white">Made with</p>
          <HeartIcon
            className="h-6 w-6 pink-500 mr-2 ml-2"
            color="red"
            aria-hidden="true"
          />
          <p className="text-white">by FBCS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
