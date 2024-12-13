import { DateRange } from "react-day-picker";

// db
import flights from "../database/flights.json";

interface Params {
  range: DateRange;
  selectedStops: App.StopsFilter;
}

const mainService = {
  getFlights({ range, selectedStops }: Params): Promise<App.Flight[]> {
    return new Promise((res) =>
      setTimeout(() => {
        // returing all tickets or only selected stops
        const isNothingSelected = Object.values(selectedStops).every(
          (item) => !item
        );

        const filteredByStops =
          selectedStops.all || isNothingSelected
            ? flights
            : flights.filter(
                (item) => selectedStops[item.stops as keyof App.StopsFilter]
              );

        const filteredByDate = filteredByStops.filter((item) => {
          if (range.from && range.to) {
            return (
              range.from <= new Date(item.departure_date) &&
              new Date(item.arrival_date) <= range.to
            );
          }

          return true;
        });

        res(filteredByDate);
      }, Math.floor(Math.random() * 2000))
    );
  },
};

export { mainService };
