import styles from "./List.module.css";
const List = ({ list, calculateBtnHandler }) => {
  const listItem = list.map((text, index) => <li key={index}>{text}</li>);
  return (
    <>
      <div>
        <h3>Customer List</h3>
        <ul className={styles.ulContainer}>{listItem}</ul>
      </div>

      <hr />

      <button className={styles.button} onClick={calculateBtnHandler}>
        Calculate Tip & Customer
      </button>
    </>
  );
};

export default List;
