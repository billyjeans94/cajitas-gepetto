export interface Product {
  id: number
  name: string
  price: number
  shortDescription: string
  description: string
  features: string[]
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cajita de madera personalizada",
    price: 45000,
    shortDescription: "Ideal para regalos, hecha a mano",
    description:
      "Esta hermosa cajita de madera está hecha a mano con los mejores materiales. Perfecta para guardar pequeños tesoros o para regalar a esa persona especial. Puede ser personalizada con nombres, fechas o mensajes especiales.",
    features: [
      "Madera de alta calidad",
      "Personalización con grabado láser",
      "Tamaño: 15cm x 10cm x 5cm",
      "Incluye acabado protector",
    ],
    image: "/placeholder.svg?height=400&width=400&text=Cajita+Personalizada",
  },
  {
    id: 2,
    name: "Set de cajitas decorativas",
    price: 65000,
    shortDescription: "Conjunto de 3 cajitas con diseños únicos",
    description:
      "Este hermoso set incluye tres cajitas decorativas de diferentes tamaños, cada una con un diseño único. Perfectas para decoración o para guardar pequeños objetos. Hechas a mano con atención al detalle.",
    features: [
      "Set de 3 cajitas de diferentes tamaños",
      "Diseños únicos en cada cajita",
      "Madera tratada y pintada a mano",
      "Tamaños: pequeña (8x8cm), mediana (12x12cm), grande (15x15cm)",
    ],
    image: "/placeholder.svg?height=400&width=400&text=Set+Cajitas",
  },
  {
    id: 3,
    name: "Cajita musical personalizada",
    price: 85000,
    shortDescription: "Con mecanismo musical y diseño a elección",
    description:
      "Una cajita musical única que toca una melodía especial cuando la abres. Personalizable con el diseño y la canción de tu elección (sujeto a disponibilidad). Un regalo inolvidable para ocasiones especiales.",
    features: [
      "Mecanismo musical de calidad",
      "Personalización completa del diseño exterior",
      "Elección entre 10 melodías diferentes",
      "Interior forrado en tela suave",
    ],
    image: "/placeholder.svg?height=400&width=400&text=Cajita+Musical",
  },
  {
    id: 4,
    name: "Cajita joyero artesanal",
    price: 55000,
    shortDescription: "Especial para guardar joyas y accesorios",
    description:
      "Esta cajita joyero artesanal está diseñada específicamente para guardar tus joyas y accesorios más preciados. Con compartimentos interiores y un acabado elegante, combina funcionalidad y belleza.",
    features: [
      "Compartimentos interiores para organización",
      "Espejo en la tapa",
      "Cierre seguro",
      "Acabado en barniz protector",
    ],
    image: "/placeholder.svg?height=400&width=400&text=Cajita+Joyero",
  },
  {
    id: 5,
    name: "Cajita recuerdo para bebé",
    price: 50000,
    shortDescription: "Para guardar los primeros recuerdos del bebé",
    description:
      "Una cajita especialmente diseñada para guardar los primeros recuerdos de tu bebé: mechón de pelo, pulsera de hospital, primera fotografía y más. Un tesoro que perdurará toda la vida.",
    features: [
      "Divisiones interiores para diferentes recuerdos",
      "Personalizable con nombre y fecha de nacimiento",
      "Colores suaves y diseños infantiles",
      "Incluye tarjeta para anotar datos importantes",
    ],
    image: "/placeholder.svg?height=400&width=400&text=Cajita+Bebé",
  },
  {
    id: 6,
    name: "Cajita vintage decorativa",
    price: 60000,
    shortDescription: "Con acabado envejecido y detalles metálicos",
    description:
      "Esta cajita decorativa con estilo vintage añadirá un toque de elegancia a cualquier espacio. Con acabado envejecido y detalles metálicos, es perfecta como elemento decorativo o para guardar pequeños tesoros.",
    features: [
      "Acabado envejecido artesanal",
      "Herrajes y detalles metálicos",
      "Interior forrado en tela",
      "Disponible en varios colores",
    ],
    image: "/placeholder.svg?height=400&width=400&text=Cajita+Vintage",
  },
]
