import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent } from "./ui/card";

const Loading = () => {
  return (
    <div className="grid gap-4 grid-cols-5 mt-5">
      {new Array(10).fill(0).map(() => (
        <Card>
          <CardContent className="p-0">
            <Skeleton className="w-full h-32 mb-4" />
            <Skeleton className="w-2/3 ml-4 mb-4 h-2" />
            <Skeleton className="w-2/3 ml-4 mb-4 h-2" />
            <Skeleton className="w-2/3 ml-4 mb-4 h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Loading;
