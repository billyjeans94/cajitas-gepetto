import { NextResponse } from "next/server"
import { generateInvoicePDF } from "@/lib/generate-invoice"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Generate PDF invoice
    const pdfBuffer = await generateInvoicePDF(data)

    // Send to WhatsApp
    const whatsappResponse = await sendToWhatsApp({
      phone: "573013866019", // The WhatsApp number to send to
      message: `Nuevo pedido de ${data.customer.name}`,
      pdfBuffer,
    })

    if (whatsappResponse.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Error sending WhatsApp message" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Function to send message and PDF to WhatsApp
async function sendToWhatsApp({
  phone,
  message,
  pdfBuffer,
}: {
  phone: string
  message: string
  pdfBuffer: Buffer
}) {
  try {
    // This is a placeholder for the actual WhatsApp API integration
    // You would need to use a service like Twilio, MessageBird, or WhatsApp Business API

    // For demonstration purposes, we'll just return success
    console.log(`Sending WhatsApp message to ${phone}: ${message}`)

    // In a real implementation, you would:
    // 1. Connect to WhatsApp API
    // 2. Send the message
    // 3. Attach the PDF file

    return { success: true }
  } catch (error) {
    console.error("WhatsApp sending error:", error)
    return { success: false, error }
  }
}
