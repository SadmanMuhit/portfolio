import Image from "next/image";
import OrbitingCirclesDemo from "@/components/shadcn-space/orbiting-circles/orbiting-circles-01";

const Logo = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <OrbitingCirclesDemo size={120} className="opacity-70" />
      </div>
      <div className="relative z-10 rounded-full bg-background p-1 shadow-lg shadow-black/10">
        <Image src="/muhitlogo.png" alt="Logo" width={40} height={40} />
      </div>
    </div>
  );
};

export default Logo;
