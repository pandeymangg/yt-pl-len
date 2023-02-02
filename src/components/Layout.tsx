import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-bgLight dark:bg-bgDark">
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
