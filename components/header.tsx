"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const { cart } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  // Cerrar la búsqueda cuando cambia la ruta
  useEffect(() => {
    setIsSearchOpen(false)
  }, [pathname])

  // Manejar el comportamiento del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Siempre visible en la parte superior
        setIsVisible(true)
      } else {
        // Determinar dirección del scroll
        if (currentScrollY > scrollY) {
          // Scroll hacia abajo
          if (scrollDirection !== "down") {
            setScrollDirection("down")
            setIsVisible(false)
          }
        } else {
          // Scroll hacia arriba
          if (scrollDirection !== "up") {
            setScrollDirection("up")
            setIsVisible(true)
          }
        }
      }

      setScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY, scrollDirection])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r border-primary/20">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className={`text-lg font-medium hover-transition hover:text-primary ${
                  pathname === "/" ? "text-primary font-semibold" : ""
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className={`text-lg font-medium hover-transition hover:text-primary ${
                  pathname.startsWith("/productos") ? "text-primary font-semibold" : ""
                }`}
              >
                Productos
              </Link>
              <Link
                href="/nosotros"
                className={`text-lg font-medium hover-transition hover:text-primary ${
                  pathname === "/nosotros" ? "text-primary font-semibold" : ""
                }`}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className={`text-lg font-medium hover-transition hover:text-primary ${
                  pathname === "/contacto" ? "text-primary font-semibold" : ""
                }`}
              >
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden sm:inline-block font-bold text-xl">Cajitas Gepetto</span>
          <span className="sm:hidden font-bold text-xl">CG</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`font-medium hover-transition hover:text-primary ${
              pathname === "/" ? "text-primary font-semibold" : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className={`font-medium hover-transition hover:text-primary ${
              pathname.startsWith("/productos") ? "text-primary font-semibold" : ""
            }`}
          >
            Productos
          </Link>
          <Link
            href="/nosotros"
            className={`font-medium hover-transition hover:text-primary ${
              pathname === "/nosotros" ? "text-primary font-semibold" : ""
            }`}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className={`font-medium hover-transition hover:text-primary ${
              pathname === "/contacto" ? "text-primary font-semibold" : ""
            }`}
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center ml-auto">
          {isSearchOpen ? (
            <div className="relative mr-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="w-full pl-8 md:w-[200px] lg:w-[300px] border-primary/30 focus-visible:ring-primary"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 hover-transition"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="mr-2 hover-transition" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Button>
          )}

          <Link href="/carrito">
            <Button variant="ghost" size="icon" className="relative hover-transition">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Carrito</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
