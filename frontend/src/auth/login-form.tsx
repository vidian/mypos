import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/api/auth";
import { saveSession } from "@/auth/session";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [form, setForm] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await login(form);
      saveSession({ access: data.access, refresh: data.refresh, role: data.role });

      if (data.role === "master") {
        navigate("/master");
      } else if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/cashier");
      }
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">ZAKI POS</h1>
                    <p className="text-muted-foreground text-balance">
                      Login to your account
                    </p>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      required
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                    />
                  </Field>
                  <Field>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </Field>
                  {error && (
                    <div className="text-destructive text-sm mt-2">{error}</div>
                  )}
                </FieldGroup>
              </form>
              <div className="bg-muted relative hidden md:block">
                <img
                  src="https://plus.unsplash.com/premium_vector-1682305862724-0fe3428b9f11?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
