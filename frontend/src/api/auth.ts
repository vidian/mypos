import api from "@/lib/axios";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  role: "master" | "admin" | "cashier";
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await api.post<LoginResponse>("/auth/login/", payload);
  return res.data;
};
