import React, { Dispatch, SetStateAction } from "react";
import {
  Pagination as TPagination,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { cn } from "@/lib/utils";
import { getReportedBikeTheftsType } from "@/api/Type";

const Pagination = ({
  page,
  setpage,
  data,
}: {
  page: number;
  setpage: Dispatch<SetStateAction<number>>;
  data: getReportedBikeTheftsType | undefined;
}) => {
  return (
    <TPagination className="mt-5">
      <PaginationPrevious
        className={cn("cursor-pointer", {
          "cursor-not-allowed": page === 1 || data?.bikes.length === 0,
        })}
        onClick={() => {
          if (page > 1) {
            setpage((prev) => prev - 1);
          }
        }}
      >
        Before
      </PaginationPrevious>
      <PaginationLink>{page}</PaginationLink>
      <PaginationNext
        onClick={() => {
          if (data?.bikes.length === 0) return;
          setpage((prev) => prev + 1);
        }}
        className={cn("cursor-pointer", {
          "cursor-not-allowed": data?.bikes.length === 0,
        })}
      >
        Next
      </PaginationNext>
    </TPagination>
  );
};

export default Pagination;
