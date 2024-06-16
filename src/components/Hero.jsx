import Image from "next/image";
import HeroBg from "../../public/hero-bg.jpg";

export default function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="absolute left-0 top-0 h-screen w-full">
        <Image
          src={HeroBg}
          alt="hero-bg"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="absolute left-0 top-0 h-screen w-full bg-black/60">
        <div className="absolute left-5 top-40 z-10">
          <h1 className="text-6xl font-bold text-white">PC Garrage</h1>
          <p className="mt-2 text-3xl font-bold text-white">
            The best place for Pre-Build PC!
          </p>
          <small className="mt-2 text-white font-semibold">Kami akan selalu memberi yang terbaik.</small>
        </div>
      </div>
    </div>
  );
}
