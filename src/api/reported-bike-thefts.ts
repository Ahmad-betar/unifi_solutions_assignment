import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios";
import { GET_REPORTED_BIKE_THEFT } from "./end-points";

const getReportedBikeThefts = async (payload: any) => {
  const { data } = await axiosInstance.get(GET_REPORTED_BIKE_THEFT, {
    params: {
      ...payload,
    },
  });
  return data;
};

export const getReportedBikeTheftsQuery = async (payload: any) => {
  const queryResult = useQuery({
    queryKey: ["get-reported-bike-thefts"],
    queryFn: async () => {
      const data = await getReportedBikeThefts({ ...payload });
      return data;
    },
  });
  return queryResult;
};
