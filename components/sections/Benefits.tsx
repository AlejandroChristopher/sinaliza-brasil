import { Truck, Factory, ShieldCheck, Clock3 } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Fabricação Própria",
  },
  {
    icon: Truck,
    title: "Enviamos para Todo o Brasil",
  },
  {
    icon: ShieldCheck,
    title: "Conforme Normas Técnicas",
  },
  {
    icon: Clock3,
    title: "Orçamento Rápido",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <item.icon size={40} className="text-red-600 mb-4" />

              <h3 className="font-semibold text-slate-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
