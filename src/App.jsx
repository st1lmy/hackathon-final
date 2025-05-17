import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnonymizationPage from "./pages/AnonymizationPage";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/anonymize">Анонимизатор</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anonymize" element={<AnonymizationPage />} />
      </Routes>
    </div>
  );
}
