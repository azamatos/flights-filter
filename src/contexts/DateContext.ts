import { createContext, useContext } from "react";
import { DateRange } from "react-day-picker";

type DateFilter = {
  range: DateRange;
  setRange: (dates: DateRange) => void;
  isDateInRange: (date: Date) => boolean;
};

const DateContext = createContext<DateFilter | undefined>(undefined);

const useDateContext = (): DateFilter => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
};

export { DateContext, useDateContext };
