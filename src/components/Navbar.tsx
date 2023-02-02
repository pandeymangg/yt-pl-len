import { MdLightMode, MdNightlightRound } from "react-icons/md";
import Link from "next/link";
import { useTheme } from "../hooks/useTheme";
import clsx from "clsx";
import Image from "next/image";

// TODO: Add a theme toggle correctly that renders the correct icon

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav
      className={clsx(
        "sticky top-0 flex max-w-4xl items-center justify-center",
        "z-50 mx-auto h-20 w-full"
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex h-full items-center">
          <Link href="/">
            <div className="flex items-center gap-3 text-xl font-bold md:text-[2rem]">
              <Image
                alt="YouTube Logo"
                src="assets/icons/youtube-icon.svg"
                height={40}
                width={40}
              />
              <span className="text-black dark:text-white">
                YouTube Playlist Length
              </span>
            </div>
          </Link>
        </div>

        <div className="flex h-full items-center">
          <span
            onClick={() =>
              setTheme((theme) => (theme === "light" ? "dark" : "light"))
            }
            className="cursor-pointer"
          >
            <MdNightlightRound
              size={16}
              className="text-black dark:hidden dark:text-white"
            />

            <MdLightMode
              size={16}
              className="hidden text-black dark:block dark:text-white"
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
