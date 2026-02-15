import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";

import LoginPage from "@/auth/login-form";
import { routes } from "@/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={
              <ProtectedRoute allow={r.allow}>
                {r.element}
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
