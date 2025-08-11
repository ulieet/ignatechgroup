import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type CardInfoProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export default function CardGrande() {
  const cardsData: CardInfoProps[] = [
    {
      imageSrc: "/images/empresa.png",
      imageAlt: "Crecimiento de la empresa",
      title: "El Crecimiento",
      description:
        "Lo que comenzó como solo venta de componentes individuales se convirtió en proyectos completos. Los clientes no solo querían elementos aislados, sino soluciones integrales. Así expandimos nuestros servicios hacia el desarrollo completo, manteniendo siempre la calidad y la cercania al cliente que nos caracterizaba.",
    },
    {
      imageSrc: "/images/lugar.png",
      imageAlt: "Innovación y tecnología",
      title: "La Innovación",
      description:
        "Con el tiempo, nos dimos cuenta de que nuestros clientes necesitaban más que solo desarrollo. Necesitaban seguridad, testing y estrategias de e-commerce. Así nació la visión de Grupo Ignatech: ser el socio tecnológico integral que toda empresa necesita.",
    },
  ];

function CardInfo({ imageSrc, imageAlt, title, description }: CardInfoProps) {
  return (

    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 ">
      <CardContent className="p-9">
        <div className="relative mb-6 overflow-hidden rounded-lg h-48 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={192}  // 48*4 = 192px para que coincida con h-48
            priority
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cardsData.map(({ imageSrc, imageAlt, title, description }) => (
        <CardInfo
          key={title}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
