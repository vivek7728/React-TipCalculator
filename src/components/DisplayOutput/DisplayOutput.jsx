import styles from "./DisplayOutput.module.css";
const DisplayOutput = ({ output, ttip }) => {
  return (
    <table className={styles.border} id={styles.size}>
      <thead>
        <tr className={styles.border}>
          <th className={styles.border}>Total Customer</th>
          <th className={styles.border}>Tip</th>
        </tr>
        <tr className={styles.border}>
          <td className={styles.border}>{output}</td>
          <td className={styles.border}>{ttip}</td>
        </tr>
      </thead>
    </table>
  );
};

export default DisplayOutput;
