import styles from "./Input.module.css";
const Input = ({ value, changeHandler }) => {
  return (
    <>
      <input
        type="number"
        value={value}
        className={styles.input}
        onChange={changeHandler}
      />

      <hr />
    </>
  );
};

export default Input;
