import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onsquarecode-ui" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
