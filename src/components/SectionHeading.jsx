export default function SectionHeading({ eyebrow, title, emphasis, description, center = false }) {
  return (
    <div className={`section-heading${center ? " center" : ""}`}>
      <span className="section-label">{eyebrow}</span>
      <h2>{title} <span>{emphasis}</span></h2>
      <div className={`gold-line${center ? " centered" : ""}`} />
      {description && <p>{description}</p>}
    </div>
  );
}
