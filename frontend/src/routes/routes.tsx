import React from "react";
import Cashier from "@/pages/cashier";
import Admin from "@/pages/admin";
import Master from "@/pages/master";
import type { Role } from "@/auth/session";

export const routes: { path: string; element: React.ReactElement; allow: Role[] }[] = [
  { path: "/cashier", element: <Cashier />, allow: ["cashier", "admin", "master"] },
  { path: "/admin", element: <Admin />, allow: ["admin", "master"] },
  { path: "/master", element: <Master />, allow: ["master"] },
];
