import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-3xl font-bold">
      <p className="text-red-500">hello from tailwindcss</p>
      <p className="text-green-300">should be green</p>
    </main>
  );
}
