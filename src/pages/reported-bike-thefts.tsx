import { getReportedBikeTheftsType } from "@/api/Type";
import { getReportedBikeTheftsQuery } from "@/api/reported-bike-thefts";
import DateRangePicker from "@/components/date-range-picker";
import Loading from "@/components/loading";
import NoImg from "@/components/no-image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

const ReportedBikeThefts = () => {
  const queryClient = useQueryClient();
  const [page, setpage] = useState(1);
  const [query, setquery] = useState<string>("");
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  var { data, isLoading, isError, refetch } = getReportedBikeTheftsQuery({
    page,
    query,
  });
  console.log(data, "in");

  console.log(date);

  useEffect(() => {
    if (!date?.from && !date?.to) {
      refetch();
    }
    if (date?.from && date.to) {
      queryClient.setQueryData(
        ["get-reported-bike-thefts", page, query],
        (oldData: getReportedBikeTheftsType) => {
          console.log(oldData, "etstsetset");
          return {
            bikes: oldData.bikes.filter(
              (bike) =>
                bike.date_stolen < new Date(date.to!).getTime() / 1000 &&
                bike.date_stolen > new Date(date.from!).getTime() / 1000
            ),
          };
        }
      );
    }
  }, [date]);
  if (data?.bikes.length === 0) {
    return <>No data</>;
  }

  if (isError) {
    return <>Error......................................................</>;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col">
      <h1 className="dark:text-primary text-5xl">Reported Bike Thefts</h1>
      <Input
        value={query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setquery(event.target.value);
        }}
      />
      <DateRangePicker date={date} setDate={setDate} />
      <div className="my-8 grid grid-cols-4 gap-4 ">
        {data?.bikes.map((bike, idx) => {
          return (
            <Card key={idx}>
              {bike.large_img ? (
                <img src={bike.thumb} className="rounded-t-xl w-full" alt="" />
              ) : (
                <NoImg />
              )}
              <CardHeader>
                <CardTitle>Bike Title : {bike.title}</CardTitle>
                <CardDescription>
                  Bike Description :{" "}
                  {bike.description ? bike.description : "-----"}
                </CardDescription>
                <CardDescription></CardDescription>
                <CardDescription>
                  Stolen Date :{" "}
                  {bike.date_stolen
                    ? new Date(bike.date_stolen * 1000).toLocaleDateString(
                        "en-US"
                      )
                    : null}
                </CardDescription>
                <CardDescription>
                  Stolen Location : {bike.stolen_location ?? null}
                </CardDescription>
              </CardHeader>

              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </div>
      <Pagination>
        <PaginationPrevious
          className={clsx("cursor-pointer", {
            "cursor-not-allowed": page === 1,
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
          onClick={() => setpage((prev) => prev + 1)}
          className="cursor-pointer"
        >
          Next
        </PaginationNext>
      </Pagination>
    </div>
  );
};

export default ReportedBikeThefts;
