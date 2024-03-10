import styles from "./Service.module.css";
const Service = ({
  value,
  changeHandler1,
  value1,
  changeHandler2,
  btnClickHandler,
  clearCustomerHandler,
  isDisabled,
}) => {
  return (
    <>
      <div className={styles.service}>
        <label>How was the service</label>
        <select required onChange={changeHandler1} value={value1}>
          <option defaultValue="choose">choose...</option>
          <option value="excellent">Excellent-20%</option>
          <option value="medium">Moderate-10%</option>
          <option value="notGood">Bad-5%</option>
        </select>
        <input
          type="text"
          placeholder="customer name"
          onChange={changeHandler2}
          value={value}
        />
        <button
          className={styles.button}
          onClick={btnClickHandler}
          value={value}
          disabled={isDisabled}
        >
          Add Customer
        </button>
      </div>
      <button className={styles.clearButton} onClick={clearCustomerHandler}>
        Clear Custome List
      </button>
      <hr />
    </>
  );
};

export default Service;
