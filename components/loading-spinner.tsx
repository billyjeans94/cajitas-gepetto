interface LoadingSpinnerProps {
  size?: number
  className?: string
}

export default function LoadingSpinner({ size = 40, className = "" }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={`saw-spin text-primary ${className}`}>
        {/* Icono de sierra circular */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="saw-spin"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            fill="currentColor"
          />
          {/* Dientes de la sierra */}
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="11.5"
              y="2"
              width="1"
              height="3"
              fill="currentColor"
              transform={`rotate(${i * 30} 12 12)`}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
