import { createContext, useContext } from "react";

const StopFilterContext = createContext<App.ContextApi.StopsFilter | undefined>(
  undefined
);

const useStopFilterContext = (): App.ContextApi.StopsFilter => {
  const context = useContext(StopFilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export { StopFilterContext, useStopFilterContext };
