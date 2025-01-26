import { useCallback } from 'react';

export function useWhatsApp() {
  const openWhatsApp = useCallback(() => {
    const phoneNumber = '+5511960925780';
    const message = 'Olá, gostaria de agendar um horário!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return { openWhatsApp };
}