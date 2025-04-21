import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gift, Package, Truck } from "lucide-react"
import FeaturedProductsCarousel from "@/components/featured-products-carousel"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 py-16 px-8 md:py-24 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Productos únicos y personalizados</h1>
            <p className="text-lg md:text-xl text-amber-800 mb-6">
              Descubre nuestras cajitas artesanales hechas a mano con amor y dedicación
            </p>
            <Link href="/productos">
              <Button className="bg-amber-700 hover:bg-amber-800">
                Ver productos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/cajita-para-la-pagina.jpg"
                alt="Cajitas Gepetto"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <Gift className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Productos Personalizados</h3>
              <p className="text-amber-800">Cada producto es único y puede ser personalizado según tus necesidades.</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <Package className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Materiales de Calidad</h3>
              <p className="text-amber-800">Utilizamos los mejores materiales para garantizar productos duraderos.</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <Truck className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Envío Seguro</h3>
              <p className="text-amber-800">
                Empacamos con cuidado para que tus productos lleguen en perfectas condiciones.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-amber-900">Productos Destacados</h2>
          <Link href="/productos">
            <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
              Ver todos
            </Button>
          </Link>
        </div>

        {/* Reemplazamos la grid por el carrusel */}
        <FeaturedProductsCarousel />
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mr-3">
                    <span className="font-bold text-amber-700">{String.fromCharCode(64 + item)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Cliente Feliz {item}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-amber-800">
                  "Las cajitas son hermosas y de excelente calidad. El servicio fue rápido y la personalización quedó
                  perfecta."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
