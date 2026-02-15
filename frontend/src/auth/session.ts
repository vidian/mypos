export type Role = "master" | "admin" | "cashier";

export interface SessionPayload {
  access: string;
  refresh: string;
  role: Role;
}

export const saveSession = (payload: SessionPayload) => {
  localStorage.setItem("access", payload.access);
  localStorage.setItem("refresh", payload.refresh);
  localStorage.setItem("role", payload.role);
};

export const clearSession = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("role");
};

export const getAccess = () => localStorage.getItem("access");
export const getRefresh = () => localStorage.getItem("refresh");
export const getRole = (): Role | null => {
  const r = localStorage.getItem("role");
  return (r as Role) ?? null;
};

export const isLoggedIn = () => !!getAccess();
