import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import "./styles/partials/_globals.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/orders" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
