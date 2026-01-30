<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";

import LoginPage from "@/auth/login-form";
import Master from "@/pages/master";
import Cashier from "@/pages/cashier";
import Admin from "@/pages/cashier";

function App() {
>>>>>>> parent of 0e896bb (Revert "login form")
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<LoginPage />} />
=======
          <Route path="/login" element={<LoginPage />} />
>>>>>>> parent of 0e896bb (Revert "login form")
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
