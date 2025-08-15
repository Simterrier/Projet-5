export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <div className="banner__inner">
        <img src={image} alt={text} className="banner__image" />
        {text && <h1 className="banner__text">{text}</h1>}
      </div>
    </div>
  );
}