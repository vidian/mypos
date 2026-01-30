import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";

import LoginPage from "@/auth/login-form";
import Master from "@/pages/master";
import Cashier from "@/pages/cashier";
import Admin from "@/pages/cashier";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/cashier"
            element={
              <ProtectedRoute allow={["cashier", "admin", "master"]}>
                <Cashier />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allow={["admin", "master"]}>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/master"
            element={
              <ProtectedRoute allow={["master"]}>
                <Master />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
