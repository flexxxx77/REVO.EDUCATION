"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-200 to-orange-400 flex justify-center items-center relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        {/* Илүү олон чимэглэлүүд нэмэж болно */}
      </div>

      <div className="text-center z-10 px-6">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.jpeg" alt="" width={100} height={100} className="rounded-xl mb-4" />
          <h1 className="text-3xl font-bold text-white">REVO EDUCATION</h1>
        </div>

        {/* Login Button */}
        <button
          onClick={() => router.push("/auth")}
          className="w-full bg-white text-orange-600 font-bold py-2 rounded-xl text-lg shadow-md hover:opacity-90 transition"
        >
          НЭВТРЭХ
        </button>

        {/* Register Button */}
        <button
          onClick={() => router.push("/auth?type=register")}
          className="w-full border border-white text-white font-bold py-2 rounded-xl text-lg mt-4 hover:bg-white hover:text-orange-500 transition"
        >
          БҮРТГҮҮЛЭХ
        </button>

      </div>
    </div>
  );
}
