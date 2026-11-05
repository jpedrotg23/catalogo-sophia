const WHATSAPP_NUMBER = "5585999559332";

export function getWhatsAppLink() {
  const message =
    "Oi, Sophia! Conheci seu trabalho pelo catálogo e gostaria de conhecer um pouco mais sobre seus serviços.";

  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.searchParams.set("text", message);

  return url.toString();
}

export const contact = {
  whatsapp: getWhatsAppLink(),
  instagram: "https://www.instagram.com/sophiabarbosamakeup/",
  tiktok: "https://www.tiktok.com/@sophiabarbosamakeup",
  email: "mailto:sophiabarbosamakeup@gmail.com",
  phone: "+55 85 99955-9332",
};

export const services = [
  { number: "01", name: "Maquiagem", emphasis: "em domicílio", price: "R$ 180", suffix: ",00", icon: "fa-house", theme: "service-home" },
  { number: "02", name: "Maquiagem", emphasis: "no Studio", price: "R$ 150", suffix: ",00", icon: "fa-sparkles", theme: "service-studio" },
  { number: "03", name: "Maquiagem", emphasis: "+ Waves", price: "R$ 200", suffix: ",00", icon: "fa-wand-magic-sparkles", theme: "service-waves" },
  { number: "04", name: "Maquiagem", emphasis: "+ Penteado", price: "A partir de R$ 250", suffix: ",00", icon: "fa-star", theme: "service-updo" },
];
