import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/products"
import { Search, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-amber-900">Nuestros Productos</h1>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto md:mx-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700 h-4 w-4" />
          <Input
            placeholder="Buscar productos..."
            className="pl-10 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-amber-200 h-full flex flex-col">
            <Link href={`/productos/${product.id}`} className="group">
              <div className="aspect-square relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <CardContent className="p-4 flex flex-col flex-grow">
              <Link href={`/productos/${product.id}`}>
                <h2 className="font-semibold text-lg mb-1 text-amber-900 hover:text-amber-700 transition-colors">
                  {product.name}
                </h2>
              </Link>
              <p className="text-amber-800 mb-2 text-sm flex-grow">{product.shortDescription}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="font-bold text-amber-700">${product.price.toLocaleString("es-CO")} COP</p>
                <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
                  <ShoppingCart className="h-4 w-4 mr-1" /> Agregar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
