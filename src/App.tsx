import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Undifined from "./pages/Undifined";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Undifined />} />
    </Routes>
  );
};

export default App;
