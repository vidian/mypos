import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
