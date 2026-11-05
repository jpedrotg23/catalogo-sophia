import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import { contact, services } from "./data/content";

const base = import.meta.env.BASE_URL;
const asset = (name) => `${base}assets/${name}`;

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-background" />
          <div className="container hero-content">
            <div className="hero-text reveal hero-intro">
              <span className="eyebrow">MAQUIADORA PROFISSIONAL</span>
              <h1 id="hero-title">Sophia<br /><strong>Barbosa</strong></h1>
              <div className="gold-line" />
              <p>Maquiagem glam e social com foco em <strong>pele blindada.</strong></p>
              <div className="hero-buttons">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><i className="fa-brands fa-whatsapp" />Falar no WhatsApp</a>
                <a href="#sobre" className="btn btn-outline">Conheça meu trabalho</a>
              </div>
            </div>
            <div className="hero-image reveal hero-photo">
              <img src={asset("IMG_7375.JPG.jpeg")} alt="Sophia Barbosa, maquiadora profissional" width="470" height="603" fetchPriority="high" />
              <div className="hero-image-frame" />
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <Reveal className="container about-grid">
            <div className="about-image"><img src={asset("IMG_7376.JPG.jpeg")} alt="Sophia Barbosa" loading="lazy" decoding="async" width="450" height="549" /><div className="image-decoration" /></div>
            <div className="about-content">
              <span className="section-label">SOBRE MIM</span>
              <h2>Bem-vinda ao meu <span>universo.</span></h2>
              <div className="gold-line" />
              <p>Me chamo Sophia Barbosa, sou Maquiadora profissional.</p>
              <p>Sou apaixonada pelo universo da beleza desde pequena. O que antes era apenas um hobby foi crescendo, até que percebi que ele tinha muito mais potencial e um propósito maior.</p>
              <p>Por isso, busquei especialização através de cursos e hoje atuo profissionalmente na área. Tenho a alegria de transformar essa paixão em realidade, realçando cada beleza e fazendo com que você se sinta ainda mais incrível e confiante!</p>
            </div>
          </Reveal>
        </section>

        <section className="section certificate-section" id="certificado">
          <Reveal className="container certificate-layout">
            <div className="certificate-content">
              <span className="section-label">CERTIFICADO</span>
              <h2>Formação <span>profissional.</span></h2>
              <div className="gold-line" />
              <p>Especialização em maquiagem com foco em acabamento, técnicas de pele e resultados refinados para cada momento.</p>
              <a href={asset("CURSO VIP.pdf")} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><i className="fa-solid fa-certificate" />Ver certificado</a>
            </div>
          </Reveal>
        </section>

        <section className="section style-section">
          <Reveal className="container">
            <SectionHeading center eyebrow="MEU TRABALHO" title="Beleza que valoriza" emphasis="você." description="Um trabalho pensado para realçar sua beleza e fazer você se sentir ainda mais incrível." />
            <div className="style-cards">
              <article className="style-card"><div className="style-icon"><i className="fa-solid fa-wand-magic-sparkles" /></div><h3>Glam &amp; Social</h3><p>Produções glam e sociais pensadas para diferentes momentos e ocasiões.</p></article>
              <article className="style-card featured"><div className="style-icon"><i className="fa-solid fa-star" /></div><h3>Pele Blindada</h3><p>Um dos principais estilos de trabalho da Sophia, com foco em uma produção impecável.</p></article>
            </div>
          </Reveal>
        </section>

        <Gallery />

        <section className="section services-section" id="servicos">
          <Reveal className="container">
            <SectionHeading center eyebrow="SERVIÇOS" title="Escolha sua" emphasis="experiência." description="Escolha a opção que melhor combina com você." />
            <div className="services-grid">
              {services.map((service) => (
                <article className={`service-card ${service.theme}${service.theme === "service-studio" ? " featured-service" : ""}`} key={service.number}>
                  {service.theme === "service-studio" && <div className="service-badge">STUDIO</div>}
                  <div className="service-top"><span className="service-number">{service.number}</span><i className={`fa-solid ${service.icon}`} /></div>
                  <span className="service-type">ATENDIMENTO</span>
                  <h3>{service.name}<strong>{service.emphasis}</strong></h3>
                  <div className="price">{service.price}<span>{service.suffix}</span></div>
                  <div className="service-divider" />
                  {service.theme === "service-studio" ? <ul className="service-list"><li><i className="fa-solid fa-location-dot" />Av. Beira Mar, 814</li><li><i className="fa-solid fa-calendar-check" />Consulte disponibilidade</li></ul> : null}
                  {(service.theme === "service-home" || service.theme === "service-waves" || service.theme === "service-updo") ? <ul className="service-list"><li><i className="fa-solid fa-location-dot" />Atendimento em Fortaleza</li><li><i className="fa-solid fa-calendar-check" />Consulte disponibilidade</li></ul> : null}
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="service-button">Conversar no WhatsApp<i className="fa-solid fa-arrow-right" /></a>
                </article>
              ))}
            </div>
            <div className="extra-fee"><div className="extra-fee-icon"><i className="fa-solid fa-circle-exclamation" /></div><div><span>ATENÇÃO</span><h3>Taxa adicional de R$ 30,00</h3><p>Aplicável para atendimentos aos domingos, feriados, fora do horário comercial, horários de pico e atendimentos de madrugada.</p></div></div>
          </Reveal>
        </section>

        <section className="section home-service" id="atendimento">
          <Reveal className="container">
            <SectionHeading eyebrow="ATENDIMENTO A DOMICÍLIO" title="Tudo preparado para" emphasis="você." description="Para que a produção aconteça com tranquilidade, é necessário disponibilizar alguns itens no local." />
            <div className="requirements-grid">
              {[["fa-chair", "Cadeira", "Uma cadeira confortável para realizar o atendimento."], ["fa-table", "Mesa ou bancada", "Um espaço limpo para organizar os produtos."], ["fa-sun", "Boa iluminação", "Preferencialmente em frente a uma janela ou local bem iluminado."], ["fa-plug", "Tomada próxima", "É necessário ter uma tomada próxima ao local do atendimento."]].map(([icon, title, text]) => <div className="requirement" key={title}><div className="requirement-icon"><i className={`fa-solid ${icon}`} /></div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <div className="location-box"><div className="location-icon"><i className="fa-solid fa-location-dot" /></div><div><span>ÁREA DE ATENDIMENTO</span><h3>Fortaleza — Ceará</h3><p>O atendimento a domicílio é realizado em Fortaleza. Para outras localidades, consulte o valor do deslocamento.</p></div></div>
          </Reveal>
        </section>

        <section className="neighborhoods-section">
          <Reveal className="container">
            <SectionHeading center eyebrow="DESLOCAMENTO INCLUSO" title="Regiões" emphasis="atendidas." />
            <div className="neighborhood-list">{["Praia de Iracema", "Centro", "Mucuripe", "Meireles", "Varjota", "Papicu", "Dunas", "Cocó", "Dionísio Torres", "Joaquim Távora"].map((name) => <span key={name}>{name}</span>)}</div>
            <p className="neighborhood-note">Para outras localidades, consulte o valor do deslocamento pelo WhatsApp.</p>
          </Reveal>
        </section>

        <section className="section booking-section" id="agendamento">
          <Reveal className="container">
            <SectionHeading center eyebrow="AGENDAMENTO" title="Como" emphasis="agendar?" description="É simples reservar seu horário." />
            <div className="steps">
              {[["fa-brands fa-whatsapp", "01", "Consulte a disponibilidade", "Entre em contato pelo WhatsApp e confira os horários disponíveis."], ["fa-solid fa-credit-card", "02", "Realize o pagamento", "Para reservar o horário, é necessário realizar o pagamento de 30%."], ["fa-solid fa-calendar-check", "03", "Horário reservado", "O valor do sinal será descontado do valor final da maquiagem."]].map(([icon, number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><div className="step-icon"><i className={icon} /></div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <div className="booking-cta"><div><span>PRONTA PARA AGENDAR?</span><h3>Vamos marcar seu horário.</h3></div><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><i className="fa-brands fa-whatsapp" />Falar no WhatsApp</a></div>
          </Reveal>
        </section>

        <section className="payment-section">
          <Reveal className="container">
            <div className="payment-content"><div><span className="section-label">PAGAMENTO</span><h2>Formas de <span>pagamento.</span></h2></div><div className="payment-methods"><div className="payment-item"><i className="fa-brands fa-pix" /><span>PIX</span></div><div className="payment-item"><i className="fa-solid fa-money-bill-wave" /><span>Dinheiro</span></div><div className="payment-item"><i className="fa-solid fa-credit-card" /><span>Cartão</span></div><div className="payment-item"><i className="fa-solid fa-link" /><span>Link de pagamento</span></div></div></div>
            <p className="payment-note">Para pagamentos parcelados, haverá acréscimo referente à taxa da maquininha.</p>
          </Reveal>
        </section>

        <section className="section policies-section" id="politicas">
          <Reveal className="container">
            <SectionHeading center eyebrow="ANTES DE AGENDAR" title="Políticas de" emphasis="agendamento." description="Algumas informações importantes para o seu atendimento." />
            <div className="policies-grid">
              {[["01", "fa-percent", "Sinal", "É necessário realizar o pagamento de 30% para reservar o horário. O valor será descontado do valor final da maquiagem."], ["02", "fa-ban", "Desistência", "O sinal não é reembolsável. Em caso de desistência, é possível solicitar outro horário conforme disponibilidade."], ["03", "fa-calendar-xmark", "Cancelamento", "O cancelamento deve ser realizado com pelo menos 48 horas de antecedência."], ["04", "fa-clock", "Atrasos", "A tolerância para atrasos é de 10 a 15 minutos."]].map(([number, icon, title, text]) => <article className="policy-card" key={number}><div className="policy-number">{number}</div><div className="policy-icon"><i className={`fa-solid ${icon}`} /></div><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </Reveal>
        </section>

        <section className="contact-section" id="contato">
          <Reveal className="container contact-container">
            <div className="contact-content"><span className="section-label">CONTATO</span><h2>Vamos realçar <span>sua beleza?</span></h2><div className="gold-line" /><p>Consulte horários e agende seu atendimento.</p><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><i className="fa-brands fa-whatsapp" />Agendar agora</a></div>
            <div className="contact-links">
              {[["fa-brands fa-whatsapp", "WHATSAPP", contact.phone, contact.whatsapp], ["fa-brands fa-instagram", "INSTAGRAM", "@sophiabarbosamakeup", contact.instagram], ["fa-brands fa-tiktok", "TIKTOK", "@sophiabarbosamakeup", contact.tiktok], ["fa-solid fa-envelope", "E-MAIL", "sophiabarbosamakeup@gmail.com", contact.email]].map(([icon, label, text, url]) => <a href={url} target={url.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="contact-link" key={label}><div className="contact-link-icon"><i className={icon} /></div><div><span>{label}</span><strong>{text}</strong></div><i className="fa-solid fa-arrow-up-right-from-square" /></a>)}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand"><img src={asset("Identidade visual Sophia Barbosa Makeup (3).png")} alt="Sophia Barbosa Makeup" className="footer-logo" /><div><h3>Sophia Barbosa</h3><span>Makeup</span></div></div>
          <div className="footer-social"><a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a><a href={contact.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fa-brands fa-tiktok" /></a><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a></div>
        </div>
        <div className="container footer-bottom"><p>© 2026 Sophia Barbosa Makeup. Todos os direitos reservados.</p><a href="#inicio">Voltar ao topo<i className="fa-solid fa-arrow-up" /></a></div>
      </footer>
      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Agendar pelo WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
    </>
  );
}
