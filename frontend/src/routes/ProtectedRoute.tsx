import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  allow: Array<"master" | "admin" | "cashier">;
}

export default function ProtectedRoute({ children, allow }: Props) {
  const token = localStorage.getItem("access");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/" />;
  if (!role || !allow.includes(role as any)) return <Navigate to="/" />;

  return children;
}
