'use client';

import { useRouter } from "next/navigation";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function LoginPage() {
  const router = useRouter();

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-center mb-6">Нэвтрэх</h1>
      <input
        type="email"
        placeholder="Имэйл"
        className="w-full px-4 py-2 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="Нууц үг"
        className="w-full px-4 py-2 mb-4 border rounded"
      />
      <button className="w-full bg-black text-white py-2 rounded">Нэвтрэх</button>

      <p
        className="text-center text-sm text-gray-500 underline cursor-pointer mt-4"
        onClick={() => router.push("/forgot-password")}
      >
        Нууц үг мартсан
      </p>
      <p className="text-center text-sm mt-2">
        Шинэ хэрэглэгч үү?{" "}
        <span
          className="text-blue-600 underline cursor-pointer"
          onClick={() => router.push("/auth?type=register")}
        >
          Бүртгүүлэх
        </span>
      </p>
    </AuthLayout>
  );
}
