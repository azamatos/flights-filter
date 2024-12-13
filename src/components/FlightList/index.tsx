import { useEffect, useState } from "react";

// context
import { useStopFilterContext } from "../../contexts/StopFilterContext";
import { useDateContext } from "../../contexts/DateContext";

// components
import FlightCard from "../FlightCard";

// services
import { mainService } from "../../lib/services";

// styles
import styles from "./FlightList.module.css";

const FlightList = () => {
  const { selectedStops } = useStopFilterContext();
  const { range } = useDateContext();

  const [fligts, setFlights] = useState<App.Flight[]>([]);

  useEffect(() => {
    mainService
      .getFlights({ range, selectedStops })
      .then((flights) => setFlights(flights))
      .catch((err) => console.log(err));
  }, [selectedStops, range]);

  return (
    <div className={styles.flightList}>
      {fligts.map((flight, index) => (
        <FlightCard
          key={index}
          flight={flight}
          handleBuyTicket={() => console.log(flight.price)}
        />
      ))}
    </div>
  );
};

export default FlightList;
