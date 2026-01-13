import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFICATION_EMAIL = Deno.env.get("NOTIFICATION_EMAIL") || "ventas@desarrollowebargentina.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

const serviceLabels: Record<string, string> = {
  tiendanube: "Tienda Nube",
  woocommerce: "WooCommerce",
  shopify: "Shopify",
  software: "Software Personalizado",
  "360": "Solución 360° Digital",
  otro: "Otro",
};

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Desarrollo Web Argentina <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Failed to send email: ${errorData}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactFormData = await req.json();
    console.log("Form data received:", { ...data, email: "***" });

    const serviceName = serviceLabels[data.service] || data.service;

    // Send notification email to business owner
    await sendEmail(
      [NOTIFICATION_EMAIL],
      `Nueva solicitud de presupuesto: ${data.name}`,
      `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #14B8A6;">Nueva Solicitud de Presupuesto</h1>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="margin-top: 0;">Datos del Cliente</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone || "No proporcionado"}</p>
          <p><strong>Empresa:</strong> ${data.company || "No proporcionado"}</p>
          <p><strong>Servicio:</strong> ${serviceName}</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
          <h2 style="margin-top: 0;">Mensaje</h2>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>`
    );

    // Send confirmation email to client
    await sendEmail(
      [data.email],
      "¡Recibimos tu solicitud! - Desarrollo Web Argentina",
      `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #14B8A6; text-align: center;">¡Gracias por contactarnos, ${data.name}!</h1>
        <p style="text-align: center; color: #6b7280;">
          Hemos recibido tu solicitud de presupuesto para <strong>${serviceName}</strong>.
        </p>
        <div style="background-color: #f0fdfa; border: 1px solid #14B8A6; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <p style="margin: 0; color: #0d9488;"><strong>Nos pondremos en contacto contigo en menos de 24 horas.</strong></p>
        </div>
      </div>`
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
