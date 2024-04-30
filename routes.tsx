import Layout from "@/layout/layout";
import { Suspense, lazy } from "react";
import { Navigate, Routes as ReactRoutes, Route } from "react-router-dom";

const Routes = () => {
  const ReportedBikeThefts = lazy(
    () => import("./src/pages/reported-bike-thefts")
  );

  return (
    <ReactRoutes>
      <Route path="/" element={<Navigate to={"reported-bike-thefts"} />} />

      <Route
        path="/reported-bike-thefts"
        element={
          <Suspense fallback={<></>}>
            <ReportedBikeThefts />
          </Suspense>
        }
      />
    </ReactRoutes>
  );
};

export default Routes;
