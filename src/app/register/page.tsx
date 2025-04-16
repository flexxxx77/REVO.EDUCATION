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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);

    // Backend руу илгээх API call хийнэ эсвэл дараах route руу оруулна
    router.push("/auth"); // Нэвтрэх хуудас руу шилжүүлэх
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-center mb-6">Бүртгүүлэх</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="ner"
            value={formData.ner}
            onChange={handleChange}
            placeholder="Нэр"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="ovog"
            value={formData.ovog}
            onChange={handleChange}
            placeholder="Овог"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="date"
            name="birth"
            value={formData.birth}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="И-мэйл"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
