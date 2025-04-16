"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ner: "",
    ovog: "",
    birth: "",
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-center mb-6">Бүртгүүлэх</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Нэр"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Овог"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="И-мэйл"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Нууц үг"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Бүртгүүлэх
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Аль хэдийн бүртгэлтэй юү?{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => router.push("/auth")}
          >
            Нэвтрэх
          </span>
        </p>
      </div>
    </div>
  );
}
