import Image from "next/image";
import heroBanner from "../public/heroBanner.webp"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={heroBanner} alt="herobanner" />
    </main>
  );
}
