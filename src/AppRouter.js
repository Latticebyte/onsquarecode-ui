import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalProvider";
import { Home } from "./pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/onsquarecode-ui" element={<Home />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
