export default function Banner({ image, text }) {
  // Découpe le texte si besoin
  const parts = text?.split(",") || [];

  return (
    <div className="banner">
      <div className="banner__inner">
        <img src={image} alt={text} className="banner__image" />
        {text && (
          <h1 className="banner__text">
            {parts.length === 2 ? (
              <>
                <span className="line1">{parts[0]},</span>
                <span className="line2">{parts[1]}</span>
              </>
            ) : (
              text
            )}
          </h1>
        )}
      </div>
    </div>
  );
}