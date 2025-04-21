"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CarritoPage() {
  const router = useRouter()
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  })

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckout = async () => {
    // Generate invoice data
    const invoiceData = {
      customer: customerInfo,
      items: cart,
      subtotal,
      date: new Date().toLocaleDateString("es-CO"),
      orderNumber: Math.floor(Math.random() * 10000),
    }

    try {
      // Send invoice to WhatsApp
      const response = await fetch("/api/send-invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceData),
      })

      if (response.ok) {
        // Clear cart and redirect to confirmation page
        clearCart()
        router.push("/confirmacion")
      } else {
        console.error("Error sending invoice")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <ShoppingBag className="h-24 w-24 text-amber-300" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-amber-900">Tu carrito está vacío</h1>
          <p className="text-amber-800 mb-8">Parece que aún no has agregado productos a tu carrito.</p>
          <Link href="/productos">
            <Button className="bg-amber-700 hover:bg-amber-800">Explorar productos</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">Tu Carrito</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-amber-200 mb-6">
            <CardHeader className="border-b border-amber-100">
              <CardTitle>Productos</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row p-4 border-b border-amber-100 last:border-0">
                  <div className="sm:w-24 h-24 relative mb-4 sm:mb-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 sm:ml-4 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-medium text-amber-900">{item.name}</h3>
                      <p className="text-sm text-amber-700">${item.price.toLocaleString("es-CO")} COP</p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-0">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-300"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-3 font-medium w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-300"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 ml-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle>Información del Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="border-amber-300"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="border-amber-300"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Dirección de entrega</Label>
                <Input
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="border-amber-300"
                  required
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-amber-200 sticky top-4">
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1.5">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-amber-800">
                      {item.name} <span className="text-amber-600">x{item.quantity}</span>
                    </span>
                    <span className="font-medium text-amber-900">
                      ${(item.price * item.quantity).toLocaleString("es-CO")}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span className="text-amber-900">${subtotal.toLocaleString("es-CO")} COP</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                className="w-full bg-amber-700 hover:bg-amber-800"
                size="lg"
                onClick={handleCheckout}
                disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address}
              >
                Finalizar Compra <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-center mt-3 text-amber-700">
                Al finalizar la compra, recibirás la factura por WhatsApp
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
