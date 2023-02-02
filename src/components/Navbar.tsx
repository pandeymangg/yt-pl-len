import { MdLightMode, MdNightlightRound } from "react-icons/md";

import Logo from "@/../public/youtube-icon.svg";
import Link from "next/link";
import { useTheme } from "../hooks/useTheme";
import clsx from "clsx";
import Image from "next/image";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav
      className={clsx(
        "sticky top-0 flex max-w-4xl items-center justify-center",
        "z-50 mx-auto h-20 w-full"
      )}
    >
      <div className="flex w-[95%] items-center justify-between">
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
            {theme === "light" ? (
              <MdNightlightRound
                size={16}
                className="text-black dark:text-white"
              />
            ) : (
              <MdLightMode size={16} className="text-black dark:text-white" />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

// const Container = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: sticky;
//   top: 0;
//   max-width: 900px;
//   width: 100%;
//   height: 80px;
//   margin-left: auto;
//   margin-right: auto;
//   z-index: 50;

//   & .nav__container {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 95%;

//     & .nav__logo {
//       height: 100%;
//       display: flex;
//       align-items: center;

//       & a {
//         text-decoration: none;
//         color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
//       }

//       & .nav__logo-container {
//         font-size: 2rem;
//         font-weight: 700;
//         line-height: 1;
//         display: flex;
//         align-items: center;
//         gap: 8px;

//         & img {
//           width: 40px;
//           height: 40px;
//         }

//         @media (max-width: 640px) {
//           font-size: 1.2rem;
//         }
//       }
//     }

//     & .nav__icons {
//       height: 100%;
//       display: flex;
//       align-items: center;

//       & span {
//         cursor: pointer;
//       }
//     }
//   }
// `;

export default Navbar;
