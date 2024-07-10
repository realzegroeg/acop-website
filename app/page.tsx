import Image from "next/image";

export default function Home() {
  return (
    <head>
      <title>ACoP 2024</title>
    </head>
    
    <main>
      <Image
        src="/graphic.png"
        alt="Tool Box"
        priority
      />
    </main>
  );
}
