import { Card, CardContent } from "@/components/ui/card";

type CardProps = {
  year: number;
  title: string;
  description: string;
};

export default function CardsList() {
  const cardsData: CardProps[] = [
    {
      year: 2018,
      title: "Venta de componentes y diversos productos",
      description:
        "Iniciamos con la comercialización de componentes de hardware de alta calidad, con atencion directa al cliente",
    },
    {
      year: 2024,
      title: "Expansion a grupo ignatech",
      description: "Creacion de nuestro grupo y pequeños pasos",
    },
    {
      year: 2025,
      title: "Soluciones integrales para empresas en su totalidad",
      description:
        "Páginas de aterrizaje efectivas y rápidas, Ecommerce hechos a medida, sistema de publicidad (Ad), Testing ciberseguridad para garantizar la calidad de tu software entre otras cosas",
    },
  ];

  function CardCuadrada({ year, title, description }: CardProps) {
    return (
      <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 text-center p-6 mt-20">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">{year}</span>
          </div>
          <h4 className="text-white font-semibold">{title}</h4>
          <p className="text-gray-300 text-sm text-justify word-spacing-tight max-w-[18rem] mx-auto hyphens-auto">
            {description}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardsData.map(({ year, title, description }) => (
        <CardCuadrada
          key={year}
          year={year}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
