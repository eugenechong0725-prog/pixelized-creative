export const WHATSAPP_NUMBER = "601126208959";
export const WHATSAPP_DISPLAY = "011-2620 8959";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general:
    "Hi Pixelized Creative, I would like to get a free quotation for my printing / design needs.",
  offer:
    "Hi Pixelized Creative, I'm interested in the A5 Flyer Printing promotion. Can I get more details?",
  flyer:
    "Hi Pixelized Creative, I would like to get a quotation for Flyer Printing.",
  businessCard:
    "Hi Pixelized Creative, I would like to get a quotation for Business Card Printing.",
  banner:
    "Hi Pixelized Creative, I would like to get a quotation for Banner & Marketing Materials.",
  graphicDesign:
    "Hi Pixelized Creative, I would like to get a quotation for Graphic Design.",
  branding:
    "Hi Pixelized Creative, I would like to get a quotation for Branding.",
  digitalMarketing:
    "Hi Pixelized Creative, I would like to get a quotation for Digital Marketing.",
  aiVideo:
    "Hi Pixelized Creative, I would like to get a quotation for AI Video Editing.",
  other:
    "Hi Pixelized Creative, I would like to get a quotation for Other services.",
} as const;

export function serviceMessage(service: string): string {
  return `Hi Pixelized Creative, I would like to get a quotation for ${service}.`;
}
