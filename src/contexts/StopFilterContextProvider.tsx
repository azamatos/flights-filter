import { useState, PropsWithChildren, FC } from "react";
import { StopFilterContext } from "./StopFilterContext";

const initialFilters: App.StopsFilter = {
  0: false,
  1: false,
  2: false,
  3: false,
  all: true,
};

export const StopFilterContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedStops, setSelectedStops] = useState<App.StopsFilter>(initialFilters);

  const toggleStopFilter = (stop: keyof App.StopsFilter): void => {
    setSelectedStops((prevFilters) => {
      if (stop === "all") {
        const newState = !prevFilters.all;

        return {
          0: newState,
          1: newState,
          2: newState,
          3: newState,
          all: newState,
        };
      }

      const newFilters = { ...prevFilters, [stop]: !prevFilters[stop] };

      newFilters.all = Object.keys(newFilters)
        .filter((key) => key !== "all")
        .every((key) => newFilters[key as keyof App.StopsFilter]);

      return newFilters;
    });
  };

  const resetStops = (): void => setSelectedStops(initialFilters);

  return (
    <StopFilterContext.Provider
      value={{ selectedStops, toggleStopFilter, resetStops }}
    >
      {children}
    </StopFilterContext.Provider>
  );
};

export default StopFilterContextProvider;
