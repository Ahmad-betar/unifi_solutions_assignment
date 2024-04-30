import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full grid gap-0 grid-cols-[auto,1fr,1fr] auto-cols-min">
      <Sidebar />
      <div className="col-span-2 ">
        <Header />
        <div className="py-5 px-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
