import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios";
import { GET_REPORTED_BIKE_THEFT } from "./end-points";
import { getReportedBikeTheftsType } from "./Type";

const getReportedBikeThefts = async (payload: any) => {
  const { data } = await axiosInstance.get<getReportedBikeTheftsType>(
    GET_REPORTED_BIKE_THEFT,
    {
      params: {
        ...payload,
        per_page: 10,
        location: "Munich",
        stolenness: "proximity",
      },
    }
  );
  return data;
};

export const getReportedBikeTheftsQuery = (payload: any) => {
  const queryResult = useQuery({
    queryKey: ["get-reported-bike-thefts", payload.page, payload.query],
    queryFn: async () => {
      const data = await getReportedBikeThefts({ ...payload });
      return data;
    },
  });
  return queryResult;
};
