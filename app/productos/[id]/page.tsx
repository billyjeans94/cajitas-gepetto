"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { useCart } from "@/components/cart-provider"
import { Heart, Minus, Plus, Share, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { notFound } from "next/navigation"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })

    toast({
      title: "Producto agregado",
      description: `${product.name} se ha agregado al carrito`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border border-amber-200">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden border border-amber-200">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} - Vista ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-amber-900">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-amber-700">(12 reseñas)</span>
          </div>

          <p className="text-2xl font-bold text-amber-700 mb-4">${product.price.toLocaleString("es-CO")} COP</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-amber-900">Descripción:</h3>
            <p className="text-amber-800">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-amber-900">Características:</h3>
            <ul className="list-disc list-inside text-amber-800">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-amber-900">Cantidad:</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                className="border-amber-300"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 font-medium w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="border-amber-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-amber-700 hover:bg-amber-800 flex-1" size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" /> Agregar al carrito
            </Button>
            <Button variant="outline" size="lg" className="border-amber-300">
              <Heart className="mr-2 h-5 w-5" /> Favoritos
            </Button>
            <Button variant="outline" size="icon" className="border-amber-300">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-amber-900">También te puede interesar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Card key={relatedProduct.id} className="overflow-hidden border-amber-200">
                <div className="aspect-square relative">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-amber-900">{relatedProduct.name}</h3>
                  <p className="font-bold text-amber-700">${relatedProduct.price.toLocaleString("es-CO")} COP</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
