import { Button } from "@/components/ui/button"
import { CheckCircle, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function ConfirmacionPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-amber-900">¡Pedido Confirmado!</h1>
        <p className="text-amber-800 mb-4">
          Tu pedido ha sido procesado correctamente. Recibirás la factura en breve vía WhatsApp.
        </p>
        <p className="text-amber-800 mb-8">
          Gracias por comprar en Cajitas Gepetto. Si tienes alguna pregunta, no dudes en contactarnos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="border-amber-300">
              Volver al inicio
            </Button>
          </Link>
          <Link href="/productos">
            <Button className="bg-amber-700 hover:bg-amber-800">
              <ShoppingBag className="mr-2 h-4 w-4" /> Seguir comprando
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
