import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import ReportForm from "./pages/ReportForm";
import Success from "./pages/Success";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
