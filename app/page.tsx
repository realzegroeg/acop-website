import Image from "next/image";

export default function Home() {
  return (
    <main>
      <head>
        <title>ACoP 2024</title>
      </head>
      <Image
        src="/graphic.png"
        alt="Tool Box"
        priority
      />
    </main>
  );
}
