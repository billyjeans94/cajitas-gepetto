"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingSpinner from "./loading-spinner"

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

interface PhotoGalleryProps {
  images: GalleryImage[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isLoading, setIsLoading] = useState<Record<number, boolean>>({})

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return

    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }

    setSelectedImage(images[newIndex])
  }

  const handleImageLoad = (id: number) => {
    setIsLoading((prev) => ({ ...prev, [id]: false }))
  }

  const handleImageLoadStart = (id: number) => {
    setIsLoading((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden border-primary/30 cursor-pointer hover-transition hover:shadow-md hover:scale-[1.02]"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-[4/3] relative">
              {isLoading[image.id] && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                  <LoadingSpinner />
                </div>
              )}
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                onLoadStart={() => handleImageLoadStart(image.id)}
                onLoad={() => handleImageLoad(image.id)}
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{image.title}</h3>
              <p className="text-sm line-clamp-2">{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && closeLightbox()}>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.description}</DialogDescription>
            </DialogHeader>

            <div className="relative mt-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                {isLoading[selectedImage.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                    <LoadingSpinner size={48} />
                  </div>
                )}
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  onLoadStart={() => handleImageLoadStart(selectedImage.id)}
                  onLoad={() => handleImageLoad(selectedImage.id)}
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 border-primary/30 hover:bg-secondary z-10"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
                <span className="sr-only">Anterior</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 border-primary/30 hover:bg-secondary z-10"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-6 w-6 text-primary" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
