import LoadingSpinner from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="text-center">
        <LoadingSpinner size={60} />
        <p className="mt-4 text-primary font-medium">Cargando carrito...</p>
      </div>
    </div>
  )
}
