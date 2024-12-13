import { DayPicker } from "react-day-picker";
import { ru } from "react-day-picker/locale";
import { useDateContext } from "../../contexts/DateContext";
import "react-day-picker/style.css";

const FilterDayPicker = () => {
  const { range, setRange } = useDateContext();

  return (
    <DayPicker
      mode="range"
      timeZone="Europe/Moscow"
      locale={ru}
      selected={range}
      onSelect={(range) =>
        setRange({ from: range?.from || undefined, to: range?.to || undefined })
      }
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #eee",
        margin: "24px 16px 16px",
      }}
      styles={{
        day: {
          width: 32,
          height: 32,
        },
        day_button: {
          width: 32,
          height: 32,
        },
      }}
    />
  );
};

export default FilterDayPicker;
