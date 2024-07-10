import Image from "next/image";

export default function Home() {
  return (
    <main>
      <head>
        <title>ACoP 2024</title>
      </head>
      <Image
        src="graphic.svg"
        alt="Tool Box"
        class="center"
        priority
      />
    </main>
  );
}
