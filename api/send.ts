import { Resend } from "resend"

const TO_EMAIL = process.env.TO_EMAIL || "glabogados363@gmail.com"
const FROM_EMAIL = process.env.FROM_EMAIL
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "573216698430"

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactPayload {
  nombre: string
  correo: string
  telefono?: string
  asunto?: string
  mensaje: string
}

function escapar(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function renderFila(label: string, value: string): string {
  return `<p style="margin:0 0 12px;"><strong style="color:#000;">${label}</strong><br />${value}</p>`
}

function validar(payload: ContactPayload): string | null {
  if (!payload.nombre || !payload.nombre.trim()) return "El nombre es obligatorio."
  if (!payload.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.correo))
    return "El correo electrónico no es válido."
  if (!payload.mensaje || !payload.mensaje.trim())
    return "La descripción del caso es obligatoria."
  return null
}

export async function POST(request: Request): Promise<Response> {
  if (!FROM_EMAIL) {
    return Response.json(
      { error: "FROM_EMAIL no está configurado en las variables de entorno." },
      { status: 500 },
    )
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "RESEND_API_KEY no está configurado en las variables de entorno." },
      { status: 500 },
    )
  }

  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return Response.json({ error: "Cuerpo JSON inválido." }, { status: 400 })
  }

  const errorValidacion = validar(payload)
  if (errorValidacion) {
    return Response.json({ error: errorValidacion }, { status: 400 })
  }

  const nombre = escapar(payload.nombre.trim())
  const correo = payload.correo.trim().toLowerCase()
  const telefono = payload.telefono ? escapar(payload.telefono.trim()) : "No proporcionado"
  const asunto = payload.asunto ? escapar(payload.asunto.trim()) : "No especificado"
  const mensaje = escapar(payload.mensaje.trim())

  const htmlFirma = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#333;max-width:600px;margin:0 auto;">
      <h2 style="color:#c9a34e;font-family:Georgia,'Times New Roman',serif;margin:0 0 20px;">Nueva consulta recibida</h2>
      ${renderFila("Nombre completo", nombre)}
      ${renderFila("Correo electrónico", escapar(correo))}
      ${renderFila("Teléfono / WhatsApp", telefono)}
      ${renderFila("Tipo de asunto", asunto)}
      <p style="margin:0 0 8px;"><strong style="color:#000;">Descripción del caso</strong></p>
      <p style="margin:0 0 20px;background:#f7f7f5;padding:14px;border-radius:6px;white-space:pre-wrap;">${mensaje}</p>
      <p style="margin:0;font-size:12px;color:#888;">Enviado desde el formulario de la página web.</p>
    </div>
  `

  const htmlUsuario = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#333;max-width:600px;margin:0 auto;">
      <h2 style="color:#c9a34e;font-family:Georgia,'Times New Roman',serif;margin:0 0 20px;">Hemos recibido tu consulta</h2>
      <p style="margin:0 0 16px;line-height:1.6;">Hola <strong>${nombre}</strong>,</p>
      <p style="margin:0 0 16px;line-height:1.6;">
        Confirmamos que recibimos correctamente tu información. Nuestro equipo revisará tu caso
        y se pondrá en contacto contigo a la mayor brevedad posible.
      </p>
      <p style="margin:0 0 16px;line-height:1.6;">
        Si deseas una comunicación más directa y agilizar la atención, te invitamos a compartir
        tu número de WhatsApp escribiéndonos a través del siguiente enlace:
      </p>
      <p style="margin:0 0 20px;">
        <a href="${WHATSAPP_LINK}" style="display:inline-block;background:#25D366;color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:600;">Escríbenos por WhatsApp</a>
      </p>
      <p style="margin:0;line-height:1.6;">Gracias por confiar en nosotros.</p>
      <p style="margin:20px 0 0;color:#888;font-size:12px;">Giraldo Leguizamón Abogados y Asociados</p>
    </div>
  `

  const enviarFirma = resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: correo,
    subject: `Nueva consulta: ${asunto}`,
    html: htmlFirma,
  })

  const enviarUsuario = resend.emails.send({
    from: FROM_EMAIL,
    to: [correo],
    subject: "Hemos recibido tu consulta — Giraldo Leguizamón Abogados",
    html: htmlUsuario,
  })

  const [resultadoFirma, resultadoUsuario] = await Promise.all([
    enviarFirma,
    enviarUsuario,
  ])

  if (resultadoFirma.error || resultadoUsuario.error) {
    return Response.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 },
    )
  }

  return Response.json({ ok: true })
}
