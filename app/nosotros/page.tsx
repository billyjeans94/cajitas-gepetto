import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Heart, History, Users, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import YouTubeEmbed from "@/components/youtube-embed"
import PhotoGallery from "@/components/photo-gallery"

export const metadata: Metadata = {
  title: "Nosotros - Cajitas Gepetto",
  description: "Conoce más sobre Cajitas Gepetto, nuestra historia y nuestros trabajos artesanales.",
}

export default function NosotrosPage() {
  // Datos de ejemplo para la galería de fotos
  const galleryImages = [
    {
      id: 1,
      src: "/images/cajita-para-la-pagina.jpg",
      alt: "Cajita personalizada para boda",
      title: "Cajita para boda",
      description: "Cajita personalizada con los nombres de los novios y la fecha de la boda.",
    },
    {
      id: 2,
      src: "/images/cajita-para-la-pagina.jpg",
      alt: "Set de cajitas decorativas",
      title: "Set decorativo",
      description: "Set de tres cajitas decorativas con diseños florales pintados a mano.",
    },
    {
      id: 3,
      src: "/images/cajita-para-la-pagina.jpg",
      alt: "Cajita musical personalizada",
      title: "Cajita musical",
      description: "Cajita musical con mecanismo de cuerda y diseño personalizado para regalo de aniversario.",
    },
    {
      id: 4,
      src: "/images/cajita-para-la-pagina.jpg",
      alt: "Cajita joyero artesanal",
      title: "Joyero artesanal",
      description: "Joyero con compartimentos interiores y acabado en madera de nogal.",
    },
    {
      id: 5,
      src: "/images/cajita-para-la-pagina.jpg",
      alt: "Cajita recuerdo para bebé",
      title: "Recuerdo para bebé",
      description:
        "Cajita para guardar los primeros recuerdos del bebé, personalizada con su nombre y fecha de nacimiento.",
    },
    {
      id: 6,
      src: "/images/cajita-para-la-pagina.jpg",
      alt: "Cajita vintage decorativa",
      title: "Estilo vintage",
      description: "Cajita decorativa con acabado envejecido y detalles metálicos en estilo vintage.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">Sobre Nosotros</h1>

      {/* Historia y Misión */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-amber-900">Nuestra Historia</h2>
            <p className="text-amber-800 mb-4">
              Cajitas Gepetto nació en 2015 como un pequeño taller artesanal en Bogotá, Colombia. Lo que comenzó como
              una pasión por la carpintería y el diseño, se convirtió en un negocio dedicado a crear piezas únicas y
              personalizadas que transmiten emociones y guardan recuerdos especiales.
            </p>
            <p className="text-amber-800 mb-4">
              Nuestro nombre se inspira en Gepetto, el carpintero creador de Pinocho, simbolizando la dedicación y el
              amor que ponemos en cada una de nuestras creaciones, como si cobraran vida propia al llegar a las manos de
              nuestros clientes.
            </p>
            <p className="text-amber-800">
              A lo largo de los años, hemos perfeccionado nuestras técnicas y ampliado nuestra gama de productos,
              manteniendo siempre la esencia artesanal y el compromiso con la calidad que nos caracteriza.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/cajita-para-la-pagina.jpg"
              alt="Cajitas de madera Gepetto"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Video destacado */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Conoce nuestro trabajo</h2>
        <div className="bg-amber-50 p-6 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Proceso de creación en Cajitas Gepetto" />
            <div className="mt-4 text-center">
              <p className="text-amber-800 mb-4">
                Mira cómo creamos nuestras cajitas artesanales, desde la selección de la madera hasta los acabados
                finales.
              </p>
              <Link
                href="https://www.youtube.com/channel/UCHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button className="bg-red-600 hover:bg-red-700">
                  <Youtube className="mr-2 h-5 w-5" /> Visita nuestro canal de YouTube
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <Heart className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Pasión</h3>
              <p className="text-amber-800">
                Amamos lo que hacemos y eso se refleja en cada detalle de nuestros productos.
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Calidad</h3>
              <p className="text-amber-800">
                Utilizamos los mejores materiales y técnicas para garantizar productos duraderos y hermosos.
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Personalización</h3>
              <p className="text-amber-800">
                Creemos que cada cliente es único, por eso adaptamos nuestros productos a sus necesidades.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galería de trabajos */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Galería de nuestros trabajos</h2>
        <PhotoGallery images={galleryImages} />
      </section>

      {/* Equipo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div key={member} className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=Miembro+${member}`}
                  alt={`Miembro del equipo ${member}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-900">Nombre del Artesano {member}</h3>
              <p className="text-amber-700">Cargo en la empresa</p>
              <p className="text-amber-800 mt-2">
                Artesano con más de 10 años de experiencia en la creación de productos de madera personalizados.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Lo que dicen nuestros clientes</h2>
        <Tabs defaultValue="testimonio1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="testimonio1">María G.</TabsTrigger>
            <TabsTrigger value="testimonio2">Carlos R.</TabsTrigger>
            <TabsTrigger value="testimonio3">Laura P.</TabsTrigger>
          </TabsList>
          <TabsContent value="testimonio1" className="bg-amber-50 p-6 rounded-lg mt-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=María"
                  alt="María G."
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">María G.</h3>
                <p className="text-amber-800 italic">
                  "Encargué una cajita musical para el cumpleaños de mi madre y quedó maravillosa. La calidad del
                  trabajo es excepcional y la atención personalizada hizo que toda la experiencia fuera perfecta. Mi
                  madre lloró de emoción al recibirla."
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="testimonio2" className="bg-amber-50 p-6 rounded-lg mt-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Carlos"
                  alt="Carlos R."
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Carlos R.</h3>
                <p className="text-amber-800 italic">
                  "Compré un set de cajitas decorativas para mi oficina y son simplemente perfectas. La atención al
                  detalle es impresionante y el servicio al cliente fue excelente. Definitivamente volveré a comprar."
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="testimonio3" className="bg-amber-50 p-6 rounded-lg mt-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Laura"
                  alt="Laura P."
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Laura P.</h3>
                <p className="text-amber-800 italic">
                  "Pedí una cajita personalizada para guardar los recuerdos de mi bebé y superó todas mis expectativas.
                  El grabado con su nombre quedó precioso y la calidad de la madera es excelente. Un tesoro que
                  guardaremos para siempre."
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Línea de tiempo */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Nuestra Trayectoria</h2>
        <div className="relative border-l-2 border-amber-300 pl-8 ml-4 space-y-10">
          <div className="relative">
            <div className="absolute -left-12 top-0 w-8 h-8 bg-amber-100 border-2 border-amber-300 rounded-full flex items-center justify-center">
              <History className="h-4 w-4 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900">2015</h3>
            <p className="text-amber-800">Fundación de Cajitas Gepetto como un pequeño taller artesanal.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-12 top-0 w-8 h-8 bg-amber-100 border-2 border-amber-300 rounded-full flex items-center justify-center">
              <History className="h-4 w-4 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900">2017</h3>
            <p className="text-amber-800">Ampliación del catálogo de productos y primer local comercial.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-12 top-0 w-8 h-8 bg-amber-100 border-2 border-amber-300 rounded-full flex items-center justify-center">
              <History className="h-4 w-4 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900">2019</h3>
            <p className="text-amber-800">
              Reconocimiento como mejor emprendimiento artesanal en la feria local de artesanías.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-12 top-0 w-8 h-8 bg-amber-100 border-2 border-amber-300 rounded-full flex items-center justify-center">
              <History className="h-4 w-4 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900">2021</h3>
            <p className="text-amber-800">Lanzamiento de nuestra tienda online y expansión a nivel nacional.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-12 top-0 w-8 h-8 bg-amber-100 border-2 border-amber-300 rounded-full flex items-center justify-center">
              <History className="h-4 w-4 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900">Hoy</h3>
            <p className="text-amber-800">
              Seguimos creciendo y creando productos únicos que llenan de alegría a nuestros clientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
