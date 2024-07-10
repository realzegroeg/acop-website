import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1>THE ACoP TOOLKIT TO SUCCESS</h1>
      <Image
        src="/graphic.svg"
        alt="Tool Box"
        priority
      />
    </main>
  );
}
