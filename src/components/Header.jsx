import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrollToTop = (event) => {
    event.preventDefault();
    setOpen(false);
    window.history.replaceState(null, "", "#inicio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  const links = [["sobre", "Sobre"], ["galeria", "Galeria"], ["servicos", "Serviços"], ["agendamento", "Agendamento"], ["politicas", "Políticas"], ["contato", "Contato"]];
  return (
    <header className="header" id="inicio">
      <div className="container nav-container">
        <a href="#inicio" className="brand" aria-label="Sophia Barbosa Makeup - início" onClick={scrollToTop}>
          <img src={`${import.meta.env.BASE_URL}assets/Identidade visual Sophia Barbosa Makeup (2).png`} alt="" className="logo" />
          <div className="brand-text"><span>SOPHIA BARBOSA</span><small>MAKEUP</small></div>
        </a>
        <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
        <nav className={`nav-menu${open ? " active" : ""}`} id="navMenu" aria-label="Navegação principal">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
