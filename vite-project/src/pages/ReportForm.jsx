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
      await axios.post("https://gbv-reporting.onrender.com/api/reports", formData,);
      navigate("/success");
    } catch (error) {
      console.log(error);
      alert("Error submitting report");
    }
  };

  return (

     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
        Submit an Anonymous Report
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 flex flex-col gap-5"
      >
        <label className="font-medium text-gray-700">Type of Incident</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="">Choose...</option>
          <option value="Harassment">Harassment</option>
          <option value="Assault">Assault</option>
          <option value="Discrimination">Discrimination</option>
          <option value="Threats">Threats</option>
          <option value="Other">Other</option>
        </select>

        <label className="font-medium text-gray-700">What happened?</label>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the incident..."
          required
          className="border border-gray-300 rounded-lg p-2 resize-y focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <label className="font-medium text-gray-700">
          Where did it happen? (optional)
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <label className="font-medium text-gray-700">Attach Evidence (optional)</label>
        <input
          type="file"
          onChange={(e) => setEvidence(e.target.files[0])}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
