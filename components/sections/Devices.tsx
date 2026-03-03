import { Tv, Smartphone, Laptop, Tablet, Box } from "lucide-react";

const devices = [
  { icon: Tv, name: "Smart TV" },
  { icon: Smartphone, name: "Android / iPhone" },
  { icon: Box, name: "TV Box" },
  { icon: Laptop, name: "Computador" },
  { icon: Tablet, name: "Tablets" }
];

export function Devices() {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 uppercase tracking-widest text-primary/80">
          Compatível com Smart TV, Android, TV Box e iPhone
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {devices.map((device, index) => (
            <div key={index} className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <device.icon className="w-12 h-12" />
              <span className="text-xs font-medium uppercase">{device.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}