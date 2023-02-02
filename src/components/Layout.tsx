import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-bgLight dark:bg-bgDark">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl">{children}</main>
    </div>
  );
};

export default Layout;
