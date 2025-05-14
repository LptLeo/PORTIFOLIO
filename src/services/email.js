import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

emailjs.init(PUBLIC_KEY);

function validateData({ nome, contato, mensagem }) {
  if (nome.replace(" ", "").length < 3) {
    alert("Nome deve ter mais de 3 caracteres.");
  } else if (contato.replace(" ", "").length < 3) {
    alert("Contato deve ter mais de 3 caracteres.");
  } else if (mensagem.replace(" ", "").length < 3) {
    alert("Mensagem deve ter mais de 3 caracteres.");
  } else {
    return { nome, contato, mensagem };
  }
}

export default async function sendEmail(e, { nome, contato, mensagem }) {
  e.preventDefault();

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, validateData({ nome, contato, mensagem }));
    alert("E-mail enviado com sucesso!");
  } catch (error) {
    alert("Erro ao enviar e-mail, tente novamente mais tarde.");
    throw error;
  }
}
