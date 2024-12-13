// context
import { ChangeEvent, useCallback } from "react";

// context
import { useStopFilterContext } from "../../contexts/StopFilterContext";

// templates
import Checkbox from "../../templates/Checkbox";

// styles
import styles from "./FilterPanel.module.css";

const STOPS: { id: keyof App.StopsFilter; title: string }[] = [
  { id: "all", title: "Все" },
  { id: 0, title: "Без пересадок" },
  { id: 1, title: "1 пересадка" },
  { id: 2, title: "2 пересадки" },
  { id: 3, title: "3 пересадки" },
];

const StopsFilter = () => {
  const { selectedStops, toggleStopFilter } = useStopFilterContext();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.id as keyof App.StopsFilter;

      toggleStopFilter(value);
    },
    [toggleStopFilter]
  );

  return (
    <div className={styles.checkboxGroup}>
      <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <div>
        {STOPS.map((item) => (
          <button key={item.id}>
            <Checkbox
              title={item.title}
              id={item.id.toString()}
              checked={selectedStops[item.id]}
              onChange={handleChange}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StopsFilter;
