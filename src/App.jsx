import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LastTrips from "./pages/LastTrips.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/last-trips" element={<LastTrips />} />
      </Routes>
    </Router>
  );
}

export default App;
