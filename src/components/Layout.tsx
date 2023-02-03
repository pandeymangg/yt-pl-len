import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-bgLight dark:bg-bgDark md:px-0">
      <Navbar />
      <div className="mx-auto w-full max-w-4xl flex-1 px-4">{children}</div>
      <footer className="absolute bottom-0 flex w-full items-center justify-center pb-2">
        <div className="footer__container flex items-center gap-2">
          <p className="text-xl font-medium text-gray-900 dark:text-gray-100">
            Made by{" "}
            <a
              href="https://github.com/pandeymangg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              pandeyman
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
