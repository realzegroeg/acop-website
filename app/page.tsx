import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Image
        src="/graphic.svg"
        alt="Tool Box"
        priority
        className="w-70vw"
      />
    </main>
  );
}
