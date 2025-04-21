"use client"

import { useState } from "react"
import LoadingSpinner from "./loading-spinner"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export default function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary">
          <div className="flex flex-col items-center">
            <LoadingSpinner size={48} />
            <p className="mt-4 text-primary font-medium">Cargando video...</p>
          </div>
        </div>
      )}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  )
}
