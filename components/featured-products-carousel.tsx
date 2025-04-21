"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/products"
import LoadingSpinner from "./loading-spinner"

export default function FeaturedProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState<Record<number, boolean>>({})

  // Número de productos a mostrar según el tamaño de la pantalla
  const [itemsToShow, setItemsToShow] = useState(3)

  // Determinar cuántos productos mostrar según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    // Establecer el valor inicial
    handleResize()

    // Actualizar cuando cambie el tamaño de la ventana
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow >= products.length ? 0 : prevIndex + 1))
  }, [itemsToShow])

  // Función para retroceder al slide anterior
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, products.length - itemsToShow) : prevIndex - 1))
  }, [itemsToShow])

  // Configurar el autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 3000) // Cambiar cada 3 segundos
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pausar el autoplay cuando el usuario interactúa con el carrusel
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const handleImageLoad = (id: number) => {
    setIsLoading((prev) => ({ ...prev, [id]: false }))
  }

  const handleImageLoadStart = (id: number) => {
    setIsLoading((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <div className="relative w-full overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-3"
            style={{ width: `${100 / itemsToShow}%` }}
          >
            <Link href={`/productos/${product.id}`} className="group block h-full">
              <Card className="overflow-hidden border-primary/30 transition-all duration-300 group-hover:shadow-md h-full hover-transition group-hover:scale-[1.02]">
                <div className="aspect-square relative">
                  {isLoading[product.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                      <LoadingSpinner />
                    </div>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onLoadStart={() => handleImageLoadStart(product.id)}
                    onLoad={() => handleImageLoad(product.id)}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="mb-2 text-sm line-clamp-2">{product.shortDescription}</p>
                  <p className="font-bold text-primary">${product.price.toLocaleString("es-CO")} COP</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 border-primary/30 hover:bg-secondary z-10 hover-transition"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 border-primary/30 hover:bg-secondary z-10 hover-transition"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-primary" />
        <span className="sr-only">Siguiente</span>
      </Button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(products.length / itemsToShow) }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-2 w-2 rounded-full hover-transition ${
              Math.floor(currentIndex / itemsToShow) === index ? "bg-primary" : "bg-primary/30"
            }`}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
