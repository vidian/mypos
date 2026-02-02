import api from "@/lib/axios";
import { Button } from "@/components/ui/button";

export default function Cashier() {
  const test = async () => {
    const response = api.get("/auth/test/");
    console.log("Response from test API:", response);
  };
  return (
    <>
      <p>Cashier Page</p>
      <Button onClick={test}>Test API</Button>
    </>
  );
}
