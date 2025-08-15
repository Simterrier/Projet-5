export default function Rating({ value = 0, max = 5 }) {
  const full = Math.round(Number(value) || 0);
  return (
    <div className="rating" aria-label={`Note ${full} sur ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`rating__star ${i < full ? "is-full" : "is-empty"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}