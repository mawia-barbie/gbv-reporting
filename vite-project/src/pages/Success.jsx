import { Link } from "react-router-dom";

function Success() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Report Submitted</h1>
      <p style={styles.text}>Thank you. Your report has been received safely.</p>

      <Link to="/help" style={styles.button}>
        Get Support Resources
      </Link>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  title: { fontSize: "32px", marginBottom: "20px" },
  text: { fontSize: "18px", marginBottom: "40px" },
  button: {
    background: "#7b4ce6",
    color: "white",
    padding: "15px",
    textDecoration: "none",
    borderRadius: "8px",
  },
};

export default Success;
