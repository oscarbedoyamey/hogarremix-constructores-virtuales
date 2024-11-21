import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="min-h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6692e58c594a499f4044523c/66ad091740aaf14dce93e7ea_Vanilla%20Fayetteville_0306_Cam09_PS%20(2)_sm.jpg")' }}
      >
        <div className="absolute inset-0 bg-[#282D15]/60" />
        <div className="container mx-auto px-8 text-center relative z-10 text-[#F3F4F5]">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Construimos la vivienda que estás buscando
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-12 tracking-tight">
            Desarrollamos promociones de obra nueva que encajen con tus necesidades
          </h2>
          <div className="space-y-8">
            <h2 className="text-2xl font-light">
              Dinos dónde y cómo la quieres
            </h2>
            <Button size="lg" className="bg-[#F3F4F5] text-[#282D15] hover:bg-[#F3F4F5]/90 rounded-none px-8">
              Crea tu vivienda
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section 
        id="como_funciona" 
        className="py-32 relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#F3F4F5]/95" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {[
              {
                title: "Qué vivienda quieres",
                description: "Danos la información de que zonas te gustaría que construyeramos una vivienda para tí, y como la querrías, sin compromiso."
              },
              {
                title: "Agrupamos compradores",
                description: "Nestra busca y agrupa personas que coinciden en donde y que tipo de vivienda quieren."
              },
              {
                title: "Buscamos un proyecto",
                description: "Nestra busca y os presenta solares donde podríamos construir esas viviendas, así como posteriormente un proyecto de las mismas."
              },
              {
                title: "Reserva y personaliza",
                description: "Una vez elegido el lugar y el proyecto llegará la hora de reservar la vivienda, que te dará derecho también a una personalización única de tu vivienda."
              },
              {
                title: "Construimos",
                description: "Nestra se encarga de que ese proyecto se promueva, y acabe siendo una realidad."
              },
              {
                title: "Disfruta de tú vivienda",
                description: "Una vez finalizada la construcción se finalizará el proceso de compra con la escritura de la vivienda ante notario."
              }
            ].map((step, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-light text-gray-300 mb-6">{index + 1}</div>
                <h3 className="text-xl font-light mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section 
        className="py-32 relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#282D15]/90" />
        <div className="container mx-auto px-8 text-center max-w-4xl relative z-10">
          <p className="text-xl font-light mb-16 text-[#F3F4F5]">
            En Nestra, creemos que la vivienda no debe ser un lujo, sino una necesidad al alcance de todos. Por eso, trabajamos para aliviar esta crisis, ofreciendo un modelo escalable y eficiente que combina innovación y experiencia.
          </p>
          <h1 className="text-4xl font-light mb-8 text-[#F3F4F5]">
            Construimos la vivienda que estás buscando
          </h1>
          <Button size="lg" className="bg-[#F3F4F5] text-[#282D15] hover:bg-[#F3F4F5]/90 rounded-none px-8">
            Empezar
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contacto" 
        className="py-32 relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#F3F4F5]/95" />
        <div className="container mx-auto px-8 max-w-2xl relative z-10">
          <h2 className="text-3xl font-light text-center mb-2">¿Tienes dudas?</h2>
          <p className="text-center text-[#282D15]/70 mb-12">
            Estaremos encantados de atenderte
          </p>
          
          <form onSubmit={handleContactSubmit} className="space-y-8">
            <div>
              <label className="block text-sm mb-2">Nombre</label>
              <Input required className="rounded-none border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Teléfono</label>
              <Input type="tel" required className="rounded-none border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input type="email" required className="rounded-none border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Pregunta o dudas</label>
              <Textarea required className="min-h-[150px] rounded-none border-[#282D15]" />
            </div>
            <Button type="submit" className="w-full bg-[#282D15] hover:bg-[#282D15]/90 text-[#F3F4F5] rounded-none">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;