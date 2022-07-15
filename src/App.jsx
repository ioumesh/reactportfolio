import { useContext } from "react";

import { ThemeContext } from "./context";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TimeLine from "./components/experience/TimeLine";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<TimeLine />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
