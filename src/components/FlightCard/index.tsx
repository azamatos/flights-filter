import { FC } from "react";

// context
import { useCurrencyContext } from "../../contexts/CurrencyContext";

// utils
import getDeclension from "../../lib/utils/getDeclension";
import formatDate from "../../lib/utils/formatDate";

// constants
import { STOP_DECLENSIONS } from "../../lib/constants";

// styles
import styles from "./FlightCard.module.css";

interface Props {
  flight: App.Flight;
  handleBuyTicket: () => void;
}

const FlightCard: FC<Props> = ({ flight, handleBuyTicket }) => {
  const { convertPrice } = useCurrencyContext();

  return (
    <div className={styles.flightCard}>
      <div className={styles.flightData}>
        <img src={`/assets/images/carriers/${flight.carrier}.svg`} />
        <div className={styles.flightPrice}>
          <button onClick={handleBuyTicket}>
            {`Купить за \n 
            ${convertPrice(flight.price)}`}
          </button>
        </div>
      </div>
      <div className={styles.flightInfo}>
        <div className={`${styles.flightDetails} ${styles.departure}`}>
          <span className={styles.time}>{flight.departure_time}</span>
          <span className={styles.route}>
            {flight.origin}, {flight.origin_name}
          </span>
          <span className={styles.date}>
            {formatDate(flight.departure_date)}
          </span>
        </div>
        <div className={styles.flightStops}>
          <span>
            {getDeclension({ count: flight.stops, ...STOP_DECLENSIONS })}
          </span>
          <div>
            <hr />
            <img src="/assets/icons/plane.svg" width={18} height={18} />
          </div>
        </div>
        <div className={`${styles.flightDetails} ${styles.arrival}`}>
          <span className={styles.time}>{flight.arrival_time}</span>
          <span className={styles.route}>
            {flight.destination_name} , {flight.destination}
          </span>
          <span className={styles.date}>{formatDate(flight.arrival_date)}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
