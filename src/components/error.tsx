import { getReportedBikeTheftsType } from "@/api/Type";
import { Button } from "@/components/ui/button";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

const Error = ({
  refetch,
}: {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<getReportedBikeTheftsType, Error>>;
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[70vh]">
      <p className="text-2xl mb-5">Some Thing went wrong :(</p>
      <Button
        onClick={() => {
          refetch();
        }}
      >
        Try Again
      </Button>
    </div>
  );
};

export default Error;
