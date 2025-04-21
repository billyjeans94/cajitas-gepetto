import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Cajitas Gepetto",
  description: "Contáctanos para más información sobre nuestros productos personalizados.",
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">Contacto</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Información de contacto */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-amber-900">Estamos para ayudarte</h2>
          <p className="text-amber-800 mb-8">
            Si tienes alguna pregunta sobre nuestros productos, necesitas información adicional o quieres hacer un
            pedido personalizado, no dudes en contactarnos. Estaremos encantados de atenderte.
          </p>

          <div className="space-y-6">
            <Card className="border-amber-200">
              <CardContent className="p-6 flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Dirección</h3>
                  <p className="text-amber-800">Calle Principal #123, Bogotá, Colombia</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6 flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Teléfono</h3>
                  <p className="text-amber-800">+57 301 386 6019</p>
                  <p className="text-amber-700 text-sm mt-1">Lunes a Viernes: 9am - 6pm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="p-6 flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Correo Electrónico</h3>
                  <p className="text-amber-800">info@cajitasgepetto.com</p>
                  <p className="text-amber-700 text-sm mt-1">¡Te responderemos lo antes posible!</p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="font-semibold text-amber-900 mb-3">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-100 p-3 rounded-full text-amber-700 hover:bg-amber-200 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-100 p-3 rounded-full text-amber-700 hover:bg-amber-200 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-100 p-3 rounded-full text-amber-700 hover:bg-amber-200 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div>
          <Card className="border-amber-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-amber-900">Envíanos un mensaje</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-amber-900">
                      Nombre
                    </label>
                    <Input id="nombre" className="border-amber-300" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-amber-900">
                      Correo electrónico
                    </label>
                    <Input id="email" type="email" className="border-amber-300" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium text-amber-900">
                    Asunto
                  </label>
                  <Input id="asunto" className="border-amber-300" placeholder="Asunto de tu mensaje" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-amber-900">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    rows={5}
                    className="border-amber-300"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mapa de Google */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Nuestra ubicación</h2>
        <div className="rounded-lg overflow-hidden border border-amber-200 h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280650613!2d-74.24789682500001!3d4.648620699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoSwgQ29sb21iaWE!5e0!3m2!1ses!2s!4v1712624400000!5m2!1ses!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Cajitas Gepetto"
            aria-label="Mapa mostrando la ubicación de Cajitas Gepetto"
          ></iframe>
        </div>
      </div>

      {/* Horario de atención */}
      <div className="bg-amber-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-amber-900 text-center">Horario de atención</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="text-center p-4">
            <h3 className="font-semibold text-amber-900 mb-2">Lunes a Viernes</h3>
            <p className="text-amber-800">9:00 AM - 6:00 PM</p>
          </div>
          <div className="text-center p-4">
            <h3 className="font-semibold text-amber-900 mb-2">Sábados</h3>
            <p className="text-amber-800">10:00 AM - 3:00 PM</p>
          </div>
          <div className="text-center p-4 md:col-span-2">
            <h3 className="font-semibold text-amber-900 mb-2">Domingos y Festivos</h3>
            <p className="text-amber-800">Cerrado</p>
          </div>
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-amber-900">Preguntas frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-amber-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-amber-900 mb-2">¿Cuánto tiempo tarda en llegar mi pedido?</h3>
              <p className="text-amber-800">
                Los tiempos de entrega varían según tu ubicación. Generalmente, los pedidos se entregan en 3-5 días
                hábiles en Bogotá y 5-7 días hábiles para el resto del país.
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-amber-900 mb-2">¿Puedo personalizar completamente mi cajita?</h3>
              <p className="text-amber-800">
                ¡Sí! Ofrecemos personalización completa. Puedes elegir materiales, colores, tamaños y añadir grabados o
                mensajes especiales.
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-amber-900 mb-2">¿Cuáles son los métodos de pago aceptados?</h3>
              <p className="text-amber-800">
                Aceptamos transferencias bancarias, pagos con tarjeta de crédito/débito y pagos contra entrega en
                algunas zonas.
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-amber-900 mb-2">¿Tienen servicio de envío internacional?</h3>
              <p className="text-amber-800">
                Sí, realizamos envíos internacionales. Los costos y tiempos de entrega varían según el país de destino.
                Contáctanos para más información.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
