import React from "react";
import { useTheme } from "./theme-provider";
import NoDataIcon from "@/icons/no-data";
const NoData = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-[70vh] justify-center items-center flex flex-col">
      <NoDataIcon className="w-20" color={theme === "dark" ? "white" : "black"} />
      <p className="my-5 text-2xl">Found No Data</p>
    </div>
  );
};

export default NoData;
