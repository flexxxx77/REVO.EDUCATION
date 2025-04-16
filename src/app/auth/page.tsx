"use client";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-4">
        <div className="flex justify-center mb-6">
          <img src="/logo.jpeg" alt="Logo" className="h-16 w-16 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Нэвтрэх</h2>
        <form className="space-y-4">
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="И-мэйл"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Нууц үг"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white text-lg font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Нэвтрэх
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Шинэ хэрэглэгч үү?{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => router.push("/auth/register")}
          >
            Бүртгүүлэх
          </span>
        </p>
      </div>
    </div>
  );
}
