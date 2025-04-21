import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Cajitas Gepetto</h3>
            <p className="mb-4">
              Productos únicos y personalizados hechos a mano con los mejores materiales y mucho amor.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary hover:text-primary/80 hover-transition">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80 hover-transition">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80 hover-transition">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary hover-transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-primary hover-transition">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-primary hover-transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary hover-transition">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-primary hover-transition">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>carrera 52 #2e-28 lomas de Granada,Popayan Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span>+57 301 386 6019</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span>info@cajitasgepetto.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cajitas Gepetto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
