import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, timestamp, source } = body

    console.log("📝 Dados recebidos:", { name, email, phone, timestamp, source })

    // URL do webhook do Make
    const WEBHOOK_URL = process.env.WEBHOOK_URL || "https://hook.us2.make.com/h8h1wke75tca1w819yxgpo02g6cje1fc"

    console.log("🔗 Enviando para webhook:", WEBHOOK_URL)

    // Dados que serão enviados
    const webhookData = {
      name,
      email,
      phone,
      timestamp,
      source,
      status: "Novo Lead",
    }

    console.log("📤 Dados do webhook:", webhookData)

    // Enviar dados para o webhook
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookData),
    })

    console.log("📊 Status da resposta:", response.status)

    const responseText = await response.text()
    console.log("📋 Resposta do webhook:", responseText)

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Lead salvo com sucesso!" })
    } else {
      console.error("❌ Erro do webhook:", responseText)
      return NextResponse.json({ success: false, error: responseText }, { status: 500 })
    }
  } catch (error) {
    console.error("💥 Erro na API:", error)
    return NextResponse.json({ success: false, error: "Erro interno" }, { status: 500 })
  }
}
