import { useState, PropsWithChildren, FC, useCallback } from "react";
import { DateContext } from "./DateContext";
import { DateRange } from "react-day-picker";

const DateContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
  });

  const isDateInRange = useCallback(
    (date: Date): boolean => {
      if (!range.from || !range.to) return false;
      return date >= range.from && date <= range.to;
    },
    [range]
  );

  return (
    <DateContext.Provider value={{ range, isDateInRange, setRange }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateContextProvider;
