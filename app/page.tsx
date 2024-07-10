import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1>ACoP's AWESOME TOOLBOX TO SUCCESS</h1>
      <Image
        src="/graphic.svg"
        alt="Tool Box"
        priority
      />
    </main>
  );
}
