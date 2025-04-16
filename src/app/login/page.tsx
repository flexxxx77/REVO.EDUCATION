"use client";
import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-4">
        {/* Logo */}
        <div
          className="flex justify-center mb-6 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img src="/logo.jpeg" alt="Logo" className="h-16 w-16 rounded-full" />
        </div>

        {/* Login Button */}
        <button
          onClick={() => router.push("/auth")}
          className="w-full bg-black text-white text-lg font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Нэвтрэх
        </button>

        {/* Register Button */}
        <button
          onClick={() => router.push("/auth/register")}
          className="w-full border border-gray-300 text-lg font-semibold py-2 rounded-lg mt-4 hover:bg-gray-100 transition"
        >
          <UserPlus size={20} className="inline mr-2" />
          Бүртгүүлэх
        </button>

        {/* Forgot Password */}
        <p className="text-center text-sm text-gray-500 underline cursor-pointer mt-4">
          Нууц үг мартсан
        </p>
      </div>
    </div>
  );
}
