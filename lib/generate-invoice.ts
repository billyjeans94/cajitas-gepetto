import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"
import type { CartItem } from "@/components/cart-provider"

interface InvoiceData {
  customer: {
    name: string
    phone: string
    address: string
  }
  items: CartItem[]
  subtotal: number
  date: string
  orderNumber: number
}

export async function generateInvoicePDF(data: InvoiceData): Promise<Buffer> {
  // Create a new PDF document
  const doc = new jsPDF()

  // Add title
  doc.setFontSize(20)
  doc.text("Cajitas Gepetto - Factura", 14, 22)

  // Add invoice details
  doc.setFontSize(12)
  doc.text(`Factura #: ${data.orderNumber}`, 14, 35)
  doc.text(`Fecha: ${data.date}`, 14, 42)

  // Add customer information
  doc.setFontSize(14)
  doc.text("Información del Cliente", 14, 55)
  doc.setFontSize(12)
  doc.text(`Nombre: ${data.customer.name}`, 14, 63)
  doc.text(`Teléfono: ${data.customer.phone}`, 14, 70)
  doc.text(`Dirección: ${data.customer.address}`, 14, 77)

  // Add items table
  autoTable(doc, {
    startY: 85,
    head: [["Producto", "Cantidad", "Precio Unitario", "Total"]],
    body: data.items.map((item) => [
      item.name,
      item.quantity.toString(),
      `$${item.price.toLocaleString("es-CO")}`,
      `$${(item.price * item.quantity).toLocaleString("es-CO")}`,
    ]),
    foot: [["", "", "Subtotal", `$${data.subtotal.toLocaleString("es-CO")}`]],
    theme: "striped",
    headStyles: { fillColor: [193, 154, 107] },
    footStyles: { fillColor: [245, 245, 245] },
  })

  // Add footer
  const finalY = (doc as any).lastAutoTable.finalY || 120
  doc.text("¡Gracias por tu compra!", 14, finalY + 20)
  doc.text("Cajitas Gepetto - Productos únicos y personalizados", 14, finalY + 30)

  // Convert the PDF to a buffer
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"))

  return pdfBuffer
}
