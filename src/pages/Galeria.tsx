import { SectionTitle } from "@/components/SectionTitle";
import { useCortes } from "@/hooks/useCortes";

export const Galeria = () => {
  const { cortes } = useCortes();

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <SectionTitle title="Galería de Cortes" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cortes.map((corte) => (
            <div key={corte.id} className="relative group">
              <img
                src={corte.image}
                alt={corte.name}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold">{corte.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
