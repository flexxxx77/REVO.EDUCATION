'use client';

import { useRouter } from 'next/navigation';

export default function LogoButton() {
  const router = useRouter();
  return (
    <div
      className="absolute top-4 left-6 z-50 cursor-pointer"
      onClick={() => router.push('/')}
    >
      <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 object-cover rounded-full" />
    </div>
  );
}
