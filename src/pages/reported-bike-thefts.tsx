import { getReportedBikeTheftsType } from "@/api/Type";
import { getReportedBikeTheftsQuery } from "@/api/reported-bike-thefts";
import Loading from "@/components/loading";
import NoImg from "@/icons/no-image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import Error from "../components/error";
import Pagination from "@/components/pagination";
import Filter from "@/components/filter";
import { useTheme } from "@/components/theme-provider";
import NoData from "@/components/no-data";

const ReportedBikeThefts = () => {
  const queryClient = useQueryClient();
  const { theme } = useTheme();
  const [page, setpage] = useState(1);
  const [query, setquery] = useState<string>("");
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  var { data, isLoading, isError, refetch } = getReportedBikeTheftsQuery({
    page,
    query,
  });

  useEffect(() => {
    if (!date?.from && !date?.to) {
      refetch();
    }
    if (date?.from && date.to) {
      queryClient.setQueryData(
        ["get-reported-bike-thefts", page, query],
        (oldData: getReportedBikeTheftsType) => {
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

  useEffect(() => {
    setpage(1);
  }, [query]);

  if (isError) {
    return <Error refetch={refetch} />;
  }

  return (
    <>
      <Filter date={date} query={query} setDate={setDate} setquery={setquery} />
      {isLoading ? (
        <Loading />
      ) : data?.bikes.length === 0 ? (
        <NoData />
      ) : (
        <div className="mt-8 grid grid-cols-5 gap-4 ">
          {data?.bikes.map((bike, idx) => {
            return (
              <Card key={idx}>
                {bike.large_img ? (
                  <img
                    src={bike.thumb}
                    className="rounded-t-xl w-full"
                    alt=""
                  />
                ) : (
                  <NoImg color={theme === "dark" ? "white" : "black"} />
                )}
                <CardHeader>
                  <CardTitle>Case Title : {bike.title}</CardTitle>
                  <CardDescription>
                    Case Description :{" "}
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
              </Card>
            );
          })}
        </div>
      )}
      <Pagination data={data} page={page} setpage={setpage} />
    </>
  );
};

export default ReportedBikeThefts;
