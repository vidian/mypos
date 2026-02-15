import React from "react";
import { Navigate } from "react-router-dom";
import type { Role } from "@/auth/session";
import { isLoggedIn, getRole } from "@/auth/session";

interface Props {
  children: React.ReactElement;
  allow: Role[];
}

export default function ProtectedRoute({ children, allow }: Props) {
  if (!isLoggedIn()) return <Navigate to="/login" />;

  const role = getRole();
  if (!role || !allow.includes(role)) return <Navigate to="/login" />;

  return children;
}
