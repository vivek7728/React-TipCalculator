import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.heading}>
        <h2>Tip Calculator</h2>
        <h3>Build in React</h3>
      </div>
      <p className={styles.para}>Enter your bill amount</p>
    </>
  );
};

export default Header;
