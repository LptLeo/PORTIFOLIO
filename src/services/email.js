import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

export default async function sendEmail({ nome, contato, mensagem }) {
  try {
    const params = {
      nome,
      contato,
      mensagem,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
  } catch (error) {
    alert("Erro ao enviar e-mail, tente novamente mais tarde.");
    throw error;
  }
}
