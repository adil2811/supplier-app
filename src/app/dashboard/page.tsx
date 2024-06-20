// src/app/dashboard/page.tsx

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useUser();

  // Client-side effect to handle redirection
  useEffect(() => {
    // Redirect to sign-in page if user is not authenticated
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  // Render dashboard content if user is authenticated
  if (user) {
    return (
      <>
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <p className="mb-5">Welcome to the dashboard, {user.fullName}!</p>
      </>
    );
  }

  // Optional: Render loading spinner
  return <p>Loading...</p>;
};

export default Dashboard;
