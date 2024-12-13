import { FC, HTMLProps } from "react";

// styles
import styles from "./Checkbox.module.css";

const Checkbox: FC<HTMLProps<HTMLInputElement>> = (props) => (
  <div className={styles.checkbox_wrapper}>
    <label className={styles.checkbox}>
      <input
        {...props}
        className={`${styles.checkbox__trigger} ${styles.visuallyhidden}`}
        type="checkbox"
      />
      <span className={styles.checkbox__symbol}>
        <svg
          aria-hidden="true"
          className={styles.icon_checkbox}
          width="28px"
          height="28px"
          viewBox="0 0 28 28"
        >
          <path d="M4 14l8 7L24 7"></path>
        </svg>
      </span>
      <p className={styles.checkbox__textwrapper}>{props.title}</p>
    </label>
  </div>
);

export default Checkbox;
