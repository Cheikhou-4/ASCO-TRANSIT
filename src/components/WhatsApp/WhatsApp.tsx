import './WhatsApp.css';

export default function WhatsApp() {
  // Replace with real WhatsApp number provided by user
  const phoneNumber = '221785016571';
  const message = 'Bonjour ASCO TRANSIT, je souhaite obtenir des informations.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="whatsapp-float__tooltip">Contactez-nous</div>
      <svg 
        viewBox="0 0 24 24" 
        width="30" 
        height="30" 
        fill="currentColor"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.408 2.445 1.103 3.407l-.722 2.637 2.712-.712c.907.515 1.954.81 3.07.81 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.38 8.191c-.131.37-.769.712-1.062.75-.293.037-.656.075-1.022-.038-.365-.112-.768-.262-1.221-.45-1.928-.787-3.187-2.737-3.281-2.868-.094-.131-.769-.975-.769-1.856s.469-1.312.637-1.481c.169-.169.375-.206.488-.206.112 0 .225 0 .319.019.094.019.225-.038.356.262.131.3.45 1.087.488 1.162.037.075.056.169 0 .281-.056.112-.094.187-.187.3-.094.112-.187.206-.281.337-.112.131-.225.262-.112.45.112.187.488.806 1.05 1.312.712.656 1.312.862 1.5 1 .187.131.3.112.412 0 .112-.112.488-.562.619-.75.131-.187.262-.15.45-.075.187.075 1.181.562 1.387.675.206.112.337.169.394.262.056.094.056.544-.075.914zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
      </svg>
    </a>
  );
}
