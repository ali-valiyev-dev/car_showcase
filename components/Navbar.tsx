import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "./";

const Navbar = () => {
  return (
    <header className=" w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4">
        <Link
          href="/"
          className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="CarHub Logo"
            width={118}
            height={18}
            className="object-conrain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
