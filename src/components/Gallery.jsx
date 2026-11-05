import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const base = import.meta.env.BASE_URL;
const images = ["IMG_7370.JPG.jpeg", "IMG_7374.JPG.jpeg", "IMG_7372.JPG.jpeg", "IMG_7373.JPG.jpeg", "IMG_7371.jpg", "nova-01.jpeg", "nova-02.jpeg", "nova-03.jpeg", "nova-04.jpeg"];

export default function Gallery() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (active === null) return;
    const close = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", close);
    document.body.classList.add("lightbox-open");
    return () => { window.removeEventListener("keydown", close); document.body.classList.remove("lightbox-open"); };
  }, [active]);
  return (
    <section className="section gallery-section" id="galeria">
      <div className="container">
        <SectionHeading center eyebrow="MEUS TRABALHOS" title="Galeria de" emphasis="maquiagens." description="Alguns dos trabalhos da Sophia Barbosa Makeup." />
        <div className="gallery-grid">
          {images.map((name, index) => (
            <button className="gallery-item" type="button" key={name} onClick={() => setActive(index)} aria-label={`Ampliar fotografia ${index + 1}`}>
              <img src={`${base}assets/${name}`} alt={`Trabalho de maquiagem Sophia Barbosa ${index + 1}`} loading="lazy" decoding="async" width="800" height="1000" />
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização da fotografia" onClick={() => setActive(null)}>
          <button className="lightbox-close" type="button" aria-label="Fechar" onClick={() => setActive(null)}><i className="fa-solid fa-xmark" /></button>
          <button className="lightbox-nav previous" type="button" aria-label="Fotografia anterior" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + images.length) % images.length); }}><i className="fa-solid fa-chevron-left" /></button>
          <img src={`${base}assets/${images[active]}`} alt={`Trabalho ampliado ${active + 1}`} onClick={(event) => event.stopPropagation()} />
          <button className="lightbox-nav next" type="button" aria-label="Próxima fotografia" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % images.length); }}><i className="fa-solid fa-chevron-right" /></button>
        </div>
      )}
    </section>
  );
}
