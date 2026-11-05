# Sophia Barbosa Makeup — Catálogo Digital

Catálogo digital desenvolvido para apresentar o trabalho, os serviços e as informações profissionais de Sophia Barbosa Makeup.

🌐 **[Acessar o catálogo](https://sophiabarbosa.pages.dev/)**

## Sobre o projeto

O catálogo reúne em um único endereço as informações da profissional, sua identidade visual, seus trabalhos e os detalhes necessários para que visitantes conheçam os serviços e encontrem os canais de contato.

## Conteúdo e recursos

- Apresentação da profissional e identidade visual.
- Informações sobre trajetória e formação profissional.
- Acesso ao certificado em PDF.
- Galeria com trabalhos de maquiagem.
- Serviços, modalidades de atendimento e preços.
- Informações sobre atendimento em Fortaleza e regiões atendidas.
- Orientações para agendamento.
- Formas de pagamento e políticas de atendimento.
- Links diretos para WhatsApp e redes sociais.
- Layout responsivo para celulares, tablets e computadores.
- Animações sutis e visualização ampliada das fotografias.

## Serviços

| Serviço | Valor |
|---|---:|
| Maquiagem no Studio | R$ 150,00 |
| Maquiagem em domicílio | R$ 180,00 |
| Maquiagem + Waves | R$ 200,00 |
| Maquiagem + Penteado | A partir de R$ 250,00 |

## Tecnologias

- React
- JavaScript (ES6+)
- Vite
- CSS3
- Font Awesome
- Google Fonts
- Sharp para otimização de imagens

## Estrutura do projeto

```text
catalogo-sophia/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/                 # Arquivos originais e imagens recebidas
├── public/
│   └── assets/             # Imagens otimizadas e documentos publicados
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── data/               # Conteúdo e dados do catálogo
│   ├── styles/             # Estilos globais e da aplicação
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Executar localmente

### Pré-requisitos

- Node.js
- npm

### Instalação

```bash
git clone https://github.com/jpedrotg23/catalogo-sophia.git
cd catalogo-sophia
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir a aplicação no navegador.

### Build de produção

```bash
npm run build
```

### Visualizar o build localmente

```bash
npm run preview
```

## Publicação

A publicação principal é realizada pelo **Cloudflare Pages**, conectado ao repositório GitHub.

Configurações utilizadas:

| Campo | Valor |
|---|---|
| Branch de produção | `main` |
| Comando de build | `npm run build` |
| Diretório de saída | `dist` |
| Diretório raiz | raiz do repositório |

Novos commits enviados para a branch `main` podem disparar automaticamente uma nova implantação no Cloudflare Pages.

O workflow do GitHub Pages permanece no repositório como alternativa de publicação. O `vite.config.js` diferencia os caminhos de build para preservar essa compatibilidade.

## Créditos

Desenvolvimento por **João Pedro Teixeira Guimarães** para Sophia Barbosa Makeup.

---

**Catálogo:** https://sophiabarbosa.pages.dev/  
**Repositório:** https://github.com/jpedrotg23/catalogo-sophia
