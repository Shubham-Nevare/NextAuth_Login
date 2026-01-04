"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function SuccessPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") return;
  }, [status, router]);

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect if not logged in
      router.replace("/");
    }
  }, [status, router]);
  if (!session) {
    return null;
  }

  console.log("session", session);

  if (status === "authenticated") {
    return (
      <>
        <div className="h-screen bg-green-50 flex flex-col items-center justify-start pt-20 md:py-5 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Welcome to Dashboard
          </h1>

          {/* 🔽 User Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center space-y-6">
            <h2 className="text-2xl font-semibold text-green-700">
              ✅ Login Successful
            </h2>

            {session?.user?.profilePic && (
              <img
                src={session.user.profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-green-300 object-cover"
              />
            )}

            <div className="space-y-2 text-gray-800 text-lg">
              <p>
                Welcome, <strong>{session?.user?.firstName || "User"}</strong>
              </p>
              <p>
                <strong>{session?.user?.email || "user@example.com"}</strong>
              </p>
              <p>
                Occupation:
                <strong>
                  {session?.user?.personalInfo?.occupation || "Unknown"}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
}
