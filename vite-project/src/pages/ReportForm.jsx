import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReportForm() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [evidence, setEvidence] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("type", type);
    formData.append("description", description);
    formData.append("location", location);
    if (evidence) formData.append("evidence", evidence);

    try {
      await axios.post("http://localhost:5000/api/report", formData);
      navigate("/success");
    } catch (error) {
      console.log(error);
      alert("Error submitting report");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Submit an Anonymous Report</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Type of Incident</label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="">Choose...</option>
          <option value="Harassment">Harassment</option>
          <option value="Assault">Assault</option>
          <option value="Discrimination">Discrimination</option>
          <option value="Threats">Threats</option>
          <option value="Other">Other</option>
        </select>

        <label>What happened?</label>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the incident..."
          required
        ></textarea>

        <label>Where did it happen? (optional)</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />

        <label>Attach Evidence (optional)</label>
        <input type="file" onChange={(e) => setEvidence(e.target.files[0])} />

        <button type="submit" style={styles.button}>
          Submit Report
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: "30px", maxWidth: "600px", margin: "0 auto" },
  title: { fontSize: "28px", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  button: {
    padding: "15px",
    background: "#7b4ce6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ReportForm;
