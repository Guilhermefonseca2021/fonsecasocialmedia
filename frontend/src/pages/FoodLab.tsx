import { useEffect } from "react";

import { useMemo, useRef, useState } from "react";
import { FiArrowUpRight, FiCopy, FiHeart, FiLock, FiX } from "react-icons/fi";

type PromptItem = {
  id: number;

  name: string;

  text: string;

  category: string;

  img: string;
};

const prompts: PromptItem[] = [
  {
    id: 13,

    name: "Hambúrguer Clássico em Destaque Retro",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Hambúrguer Clássico em Destaque Retro.webp",
  },
  {
    id: 1,

    name: "Brinde com Três Hambúrgueres Artesanais",

    text: "Transforme esta foto de hambúrguer em uma imagem gastronômica profissional e apetitosa. Preserve exatamente o formato, os ingredientes e a identidade do produto. Use iluminação lateral suave, contraste equilibrado, textura realista, fundo limpo e composição editorial premium. O hambúrguer deve permanecer como protagonista, sem aparência artificial ou elementos inventados.",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Brinde com Três Hambúrgueres Artesanais.webp",
  },

  {
    id: 15,

    name: "Hambúrguer Duplo em Destaque",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Hambúrguer Duplo em Destaque.webp",
  },
  {
    id: 17,

    name: "Hambúrguer Pop por Apenas R$ 29,90",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Hambúrguer Pop por Apenas R$ 29,90.webp",
  },

  {
    id: 18,

    name: "Hambúrguer refletido em óculos vermelhos",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Hambúrguer refletido em óculos vermelhos.webp",
  },

  {
    id: 19,

    name: "Hoje é Dia de Hambúrguer",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Hoje é Dia de Hambúrguer.webp",
  },

  {
    id: 20,

    name: "Homem Morde Hambúrguer Suculento",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Homem Morde Hambúrguer Suculento.webp",
  },

  {
    id: 21,

    name: "Jogo da Velha do Sabor Contrário",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Jogo da Velha do Sabor Contrário.webp",
  },

  {
    id: 22,

    name: "Molho que ultrapassa a tela",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Molho que ultrapassa a tela.webp",
  },

  {
    id: 24,

    name: "Pôster Grunge de Hambúrguer Supremo",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Pôster Grunge de Hambúrguer Supremo.webp",
  },

  {
    id: 25,

    name: "Sabor Delicioso_ Burger Artesanal",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Sabor Delicioso_ Burger Artesanal.webp",
  },

  {
    id: 26,

    name: "Sabor Que Mata a Fome",

    text: "",

    category: "FoodLab",

    img: "/portfolio/media/imagens/Sabor Que Mata a Fome.webp",
  },
];

// Os cinco arquivos Hamburguer_01..05 são tratados como originais (ANTES).
// Os arquivos de resultado foram selecionados entre os demais nomes da pasta exibida.
const beforeAfterExamples = [
  {
    id: "hamburguer-01",
    title: "Hambúrguer artesanal",
    before: "/portfolio/media/imagens/Hamburguer_01.webp",
    after: "/portfolio/media/imagens/Burger Intenso_ Só Pra Quem Tem Fome.webp",
    description: "Da foto original a uma apresentação com direção visual.",
  },
  {
    id: "hamburguer-02",
    title: "Cheeseburger em destaque",
    before: "/portfolio/media/imagens/Hamburguer_02.webp",
    after:
      "/portfolio/media/imagens/Hambúrguer Duplo com Queijo Derretido.webp",
    description: "Mais presença visual sem perder o produto como protagonista.",
  },
  {
    id: "hamburguer-04",
    title: "Hambúrguer duplo",
    before: "/portfolio/media/imagens/Hamburguer_04.webp",
    after:
      "/portfolio/media/imagens/Busca pelo Melhor Hambúrguer em João Pessoa.webp",
    description: "Composição de campanha para destacar camadas e ingredientes.",
  },
  {
    id: "hamburguer-05",
    title: "Hambúrguer com queijo",
    before: "/portfolio/media/imagens/Hamburguer_05.webp",
    after: "/portfolio/media/imagens/Cheeseburger artesanal em destaque.webp",
    description: "Uma nova direção para apresentar o mesmo tipo de produto.",
  },
];

const steps = [
  {
    number: "01",

    title: "Envie sua foto",

    description: "Selecione a fotografia que deseja transformar.",
  },

  {
    number: "02",

    title: "Transforme sua imagem",

    description:
      "A ferramenta aplica a direção visual com base nas referências.",
  },

  {
    number: "03",

    title: "Utilize o resultado",

    description: "Visualize e use a imagem final nas suas campanhas.",
  },
];

const onboardingSteps = [
  {
    number: "01",

    title: "ASSISTA",

    description: "Entenda o método em uma aula rápida.",
  },

  {
    number: "02",

    title: "INSTALE",

    description: "Adicione o Estúdio Invisível à tela do seu celular.",
  },

  {
    number: "03",

    title: "CRIE",

    description: "Abra o app, escolha uma foto, copie e use.",
  },
];

const photoFeatures = [
  "Método completo",

  "Biblioteca",

  "Prompts",

  "Referência → Produto",

  "Preservação",

  "Kit Anti-Cara-de-IA",
];

const videoFeatures = [
  "Tudo do plano Fotos",

  "Foto → Vídeo",

  "Prompts de vídeo",

  "Movimentos naturais",

  "Preservação no vídeo",

  "Reels e anúncios",
];

const traditionalProduction = [
  "Fotógrafo",

  "Captação",

  "Iluminação",

  "Produção",

  "Tratamento",

  "Vídeo",

  "Edição",

  "Tempo",
];

const styles = `

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');

:root{--bg:#0d0e0e;--panel:#181a19;--panel2:#202321;--stroke:#333733;--text:#f6f4ed;--muted:#a2a59d;--accent:#ff824a;--accent2:#ffc38a}

*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.foodlab-page{background:var(--bg);color:var(--text);font:15px 'DM Sans',sans-serif;min-height:100vh;overflow-x:clip;overflow-y:visible}.foodlab-page button,.foodlab-page input,.foodlab-page select,.foodlab-page textarea{font:inherit}.foodlab-page button,.foodlab-page a{cursor:pointer}.foodlab-page a{color:inherit;text-decoration:none}.fl-shell{max-width:1420px;margin:auto;padding:0 42px}.fl-nav{height:84px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #292b29;gap:22px}.fl-brand{display:flex;align-items:center;gap:12px;font-family:Outfit,sans-serif;font-size:22px;font-weight:800;letter-spacing:-.8px;white-space:nowrap}.fl-brand-mark{display:grid;place-items:center;width:39px;height:39px;background:var(--accent);color:#1b130e;border-radius:13px;font-size:22px}.fl-brand-muted{color:#92968e;font-weight:500}.fl-navlinks{display:flex;gap:25px;color:#c6c7c0;font-size:13px}.fl-navlinks a:hover{color:#fff}.fl-nav-cta,.fl-primary{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--accent);border:0;border-radius:12px;padding:13px 18px;color:#1c130d!important;font-weight:800;transition:transform .2s,background .2s}.fl-nav-cta:hover,.fl-primary:hover{background:#ff9b6b;transform:translateY(-2px)}.fl-secondary{display:inline-flex;align-items:center;gap:9px;background:#292c29;border:1px solid #424640;color:var(--text);border-radius:12px;padding:12px 17px;font-weight:700}.fl-eyebrow{color:var(--accent);font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase}.fl-hero{display:grid;grid-template-columns:1.02fr .98fr;gap:55px;align-items:center;padding:82px 0 90px}.fl-hero h1,.fl-display{font:800 clamp(42px,5.1vw,75px)/1.02 Outfit,sans-serif;letter-spacing:-3.4px;margin:20px 0}.fl-hero h1 em,.fl-display em{color:var(--accent);font-style:normal}.fl-hero-copy>p:not(.fl-eyebrow){color:var(--muted);font-size:17px;line-height:1.8;max-width:570px}.fl-actions{display:flex;gap:12px;flex-wrap:wrap;margin:28px 0 20px}.fl-trust{color:#a9ada5;font-size:13px}.fl-trust b{color:#fff}.fl-hero-art{height:480px;display:grid;grid-template-columns:1fr 1fr;gap:13px;transform:rotate(1.5deg)}.fl-hero-art img{width:100%;height:100%;object-fit:cover;border-radius:23px;border:1px solid #41413a;min-height:0}.fl-hero-art img:nth-child(2){transform:translateY(26px)}.fl-image-stamp{position:absolute;bottom:16px;left:16px;background:#101210d9;border:1px solid #ffffff20;padding:9px 12px;border-radius:9px;font-size:10px;letter-spacing:1.3px;font-weight:800}.fl-hero-art-wrap{position:relative}.fl-section{padding:76px 0}.fl-section-heading{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:34px}.fl-section-heading h2{font:750 clamp(31px,3.4vw,48px)/1.1 Outfit,sans-serif;letter-spacing:-1.8px;margin:12px 0 0;max-width:720px}.fl-section-heading p{max-width:450px;color:var(--muted);line-height:1.7;margin:0}.fl-showcase{border-top:1px solid #292b28}.fl-showcase-grid{display:grid;grid-template-columns:1.15fr .85fr .85fr;gap:16px}.fl-showcase-card{min-height:310px;position:relative;border-radius:18px;overflow:hidden;background:#242521;border:1px solid #363a35}.fl-showcase-card img{width:100%;height:100%;position:absolute;inset:0;object-fit:cover;transition:transform .5s}.fl-showcase-card:hover img{transform:scale(1.04)}.fl-showcase-card:after{content:'';position:absolute;inset:25% 0 0;background:linear-gradient(transparent,#090a09e8)}.fl-showcase-copy{position:absolute;z-index:1;left:20px;right:20px;bottom:19px}.fl-showcase-copy span{font-size:10px;letter-spacing:1.5px;color:#ffd0b7;font-weight:800}.fl-showcase-copy h3{font:700 23px Outfit;margin:7px 0}.fl-marquee{width:100vw;position:relative;left:50%;margin-left:-50vw;border-block:1px solid #30322e;background:#111312;overflow:hidden;white-space:nowrap;padding:19px 0;color:#d4d2c9;font:700 13px Outfit;letter-spacing:2px}.fl-marquee span{padding:0 28px}.fl-marquee i{color:var(--accent);font-style:normal;margin:0 15px}.fl-library{background:#111312;border-block:1px solid #292b28}.fl-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin:32px 0 42px}.fl-metric{background:#171918;border:1px solid var(--stroke);border-radius:17px;padding:21px}.fl-metric strong{font:750 32px Outfit;color:var(--accent)}.fl-metric p{color:var(--muted);margin:8px 0 0;font-size:13px}.fl-toolbar{display:flex;gap:10px;flex-wrap:wrap;margin:24px 0}.fl-search{flex:1;min-width:230px;background:#202220;color:white;border:1px solid #383c36;padding:14px 16px;border-radius:12px;outline:none}.fl-search:focus{border-color:var(--accent)}.fl-filter{background:#222522;border:1px solid #373b36;color:#ddd;padding:11px 14px;border-radius:11px}.fl-filter.active{background:#473027;color:#ffad7b;border-color:#9b5b3c}.fl-cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:17px}.fl-card{background:#1b1e1b;border:1px solid #363a35;border-radius:18px;overflow:hidden;transition:transform .2s,border-color .2s;min-width:0}.fl-card:hover{transform:translateY(-4px);border-color:#a56d4e}.fl-card-image{height:225px;position:relative;background:linear-gradient(135deg,#412820,#1c1c1b)}.fl-card-image img{width:100%;height:100%;object-fit:cover}.fl-tag{position:absolute;left:12px;top:12px;background:#151615df;padding:8px 10px;border-radius:9px;font-size:10px;font-weight:800;backdrop-filter:blur(5px)}.fl-heart{position:absolute;right:11px;top:10px;background:#151615d9;color:white;border:0;border-radius:50%;height:35px;width:35px;font-size:19px}.fl-heart.saved{color:#ff7b55}.fl-cardbody{padding:17px}.fl-cardbody h3{font:700 17px Outfit;margin:7px 0 9px}.fl-cardbody p{color:var(--muted);font-size:12px;margin:0 0 17px;min-height:32px}.fl-cardbottom{display:flex;align-items:center;justify-content:space-between;gap:8px}.fl-openbtn{background:#2f342f;color:#fff;border:1px solid #484d46;border-radius:9px;padding:10px 12px;font-weight:700;font-size:12px}.fl-num{color:#8e968b;font-size:11px}.fl-empty{border:1px dashed #424640;border-radius:16px;padding:30px;color:var(--muted);text-align:center}.fl-how{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-top:35px}.fl-step{background:var(--panel);border:1px solid var(--stroke);padding:24px;border-radius:18px}.fl-stepnum{color:var(--accent);font:800 32px Outfit}.fl-step h3{font:700 19px Outfit;margin:18px 0 8px}.fl-step p{color:var(--muted);line-height:1.7;font-size:13px}.fl-gallery{display:grid;grid-template-columns:1.2fr .8fr .8fr;grid-template-rows:220px 220px;gap:14px}.fl-gallery-item{position:relative;overflow:hidden;border-radius:17px;border:1px solid #393b34}.fl-gallery-item:first-child{grid-row:span 2}.fl-gallery-item img{width:100%;height:100%;object-fit:cover}.fl-gallery-item span{position:absolute;left:12px;bottom:12px;padding:8px 10px;background:#101210d9;border-radius:8px;font-size:10px;font-weight:800;letter-spacing:1px}.fl-onboarding{background:#111312;border-block:1px solid #292b28}.fl-onboarding-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center}.fl-onboarding-copy p{color:var(--muted);line-height:1.8}.fl-mantra{font:700 23px/1.4 Outfit;color:#f7f1e7!important}.fl-mantra em{color:var(--accent);font-style:normal}.fl-onboarding-steps{display:grid;gap:12px}.fl-onboarding-step{display:flex;align-items:center;gap:18px;background:#1b1e1b;border:1px solid #363a35;padding:19px;border-radius:15px}.fl-onboarding-step>span{font:800 26px Outfit;color:var(--accent)}.fl-onboarding-step h3{margin:0 0 5px;font:700 15px Outfit}.fl-onboarding-step p{margin:0;color:var(--muted);font-size:13px}.fl-cost{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}.fl-cost p{color:var(--muted);line-height:1.8}.fl-cost-list{display:flex;gap:9px;flex-wrap:wrap;padding:0;list-style:none;margin:25px 0}.fl-cost-list li{border:1px solid #383c36;border-radius:8px;padding:9px 12px;color:#d1d2ca;font-size:12px}.fl-cost-number{border:1px solid #6e4837;background:linear-gradient(120deg,#43271e,#1d1c1a);border-radius:25px;padding:38px}.fl-cost-number span{display:block;font-size:10px;letter-spacing:1.6px;color:#d2b5a5}.fl-cost-number strong{display:block;font:800 clamp(52px,7vw,86px) Outfit;letter-spacing:-4px;color:var(--accent);margin:16px 0}.fl-cost-number i{display:block;width:54px;height:3px;background:var(--accent);margin:18px 0}.fl-pricing{background:#111312;border-block:1px solid #292b28}.fl-pricing-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;max-width:920px;margin:auto}.fl-price-card{position:relative;background:#1b1e1b;border:1px solid #363a35;border-radius:20px;padding:28px;display:flex;flex-direction:column}.fl-price-card.featured{border-color:#b36a45;background:linear-gradient(155deg,#2a211d,#191b19 55%)}.fl-price-card h3{font:750 29px Outfit;margin:12px 0 7px}.fl-price-card p{color:var(--muted);line-height:1.6}.fl-price-card ul{list-style:none;padding:0;margin:15px 0 25px;display:grid;gap:12px}.fl-price-card li{display:flex;gap:9px;color:#deded6;font-size:13px}.fl-price-card li:before{content:'✓';color:var(--accent);font-weight:800}.fl-price{margin-top:auto;padding-top:15px}.fl-price strong{display:block;font:800 44px Outfit}.fl-price span{font-size:12px;color:var(--muted)}.fl-faq{max-width:900px;margin:auto}.fl-faq details{border-bottom:1px solid #353832;padding:19px 0}.fl-faq summary{font:700 17px Outfit;cursor:pointer}.fl-faq details p{color:var(--muted);line-height:1.75;max-width:760px}.fl-cta{background:linear-gradient(120deg,#43271e,#1d1c1a);border:1px solid #6e4837;border-radius:25px;padding:42px;margin:28px 0 70px;display:flex;justify-content:space-between;align-items:center;gap:25px}.fl-cta h2{font:750 clamp(28px,3vw,40px)/1.12 Outfit;margin:10px 0}.fl-cta p{color:#cbbcb2;max-width:630px;line-height:1.7}.fl-footer{border-top:1px solid #333;padding:27px 0;color:#999;font-size:12px;display:flex;justify-content:space-between;gap:20px;align-items:center}.fl-modal-backdrop{position:fixed;inset:0;background:#070807e8;z-index:100;display:flex;align-items:center;justify-content:center;padding:20px;overflow:auto}.fl-modal{background:#181b18;border:1px solid #484c44;border-radius:22px;max-width:1080px;width:100%;max-height:92vh;overflow:auto;display:grid;grid-template-columns:300px minmax(0,1fr);box-shadow:0 25px 100px #0009}.fl-modal-left{padding:22px;border-right:1px solid #343832}.fl-modal-left img{width:100%;height:210px;object-fit:cover;border-radius:13px}.fl-modal-left h2{font:750 24px Outfit;margin:17px 0 5px}.fl-modal-left p{color:#aeb2a8;font-size:12px;line-height:1.6}.fl-field{margin-top:13px}.fl-field label{display:block;font-size:11px;color:#c7c9c2;margin-bottom:7px}.fl-field input,.fl-field select{background:#262a26;border:1px solid #424740;color:white;border-radius:9px;width:100%;padding:11px}.fl-modal-right{padding:22px;display:flex;flex-direction:column;min-height:0}.fl-modal-toolbar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}.fl-modal-toolbar h3{font:700 18px Outfit;margin:0}.fl-modal-close{background:#292c29;color:white;border:1px solid #444;border-radius:9px;padding:8px 12px}.fl-prompt-text{white-space:pre-wrap;overflow:auto;flex:1;min-height:260px;max-height:48vh;background:#101210;border:1px solid #343832;border-radius:12px;padding:16px;color:#deded6;font:12px/1.65 'DM Sans',sans-serif}.fl-modal-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:13px}.fl-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:120;background:#f6f4ed;color:#171817;border-radius:10px;padding:12px 18px;font-weight:800;box-shadow:0 10px 40px #0008}.fl-mobile-menu{display:none}@media(max-width:720px){.fl-navlinks{display:none !important}} @media (max-width:720px){.fl-section{padding:40px 0}.fl-marquee{padding:12px 0}.fl-hero{padding:48px 0 40px}.fl-hero-art{height:320px}.fl-showcase-card{min-height:220px}.fl-gallery{grid-template-rows:180px 180px}.fl-cards{gap:12px}.fl-pricing-grid{gap:12px}.fl-cost{gap:24px}.fl-onboarding-grid{gap:24px}}.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}.reveal.is-visible{opacity:1;transform:none}@media (prefers-reduced-motion: reduce){.reveal{opacity:1;transform:none;transition:none}}

@media(max-width:1050px){.fl-shell{padding:0 25px}.fl-navlinks{gap:13px}.fl-navlinks a:nth-child(3),.fl-navlinks a:nth-child(4){display:none}.fl-hero{gap:30px}.fl-hero-art{height:400px}.fl-cards{grid-template-columns:repeat(3,minmax(0,1fr))}.fl-how{grid-template-columns:repeat(2,1fr)}}

@media(max-width:720px){.fl-shell{padding:0 18px}.fl-nav{height:auto;min-height:72px;flex-wrap:wrap;padding:13px 0}.fl-navlinks{order:3;width:100%;overflow:auto;padding:5px 0 10px;gap:19px}.fl-navlinks a{white-space:nowrap;display:block!important}.fl-nav-cta{padding:10px 12px;font-size:12px}.fl-brand{font-size:19px}.fl-hero{grid-template-columns:1fr;padding:48px 0 58px;gap:35px}.fl-hero h1,.fl-display{letter-spacing:-2px}.fl-hero-art{height:340px;max-width:520px;margin:0 auto;width:100%}.fl-section{padding:55px 0}.fl-section-heading{display:block}.fl-section-heading p{margin-top:15px}.fl-showcase-grid{grid-template-columns:1fr 1fr}.fl-showcase-card{min-height:230px}.fl-showcase-card:first-child{grid-column:span 2}.fl-metrics{grid-template-columns:1fr;gap:10px}.fl-metric{padding:16px}.fl-cards{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.fl-card-image{height:170px}.fl-cardbody{padding:12px}.fl-cardbody h3{font-size:15px}.fl-cardbody p{font-size:11px}.fl-openbtn{padding:9px;font-size:11px}.fl-how{grid-template-columns:1fr}.fl-gallery{grid-template-columns:1fr 1fr;grid-template-rows:240px 170px 170px}.fl-gallery-item:first-child{grid-row:span 1;grid-column:span 2}.fl-onboarding-grid,.fl-cost{grid-template-columns:1fr;gap:30px}.fl-pricing-grid{grid-template-columns:1fr}.fl-cost-number{padding:28px}.fl-cta{padding:25px;display:block}.fl-cta .fl-primary{margin-top:10px}.fl-footer{align-items:flex-start;flex-direction:column}.fl-modal-backdrop{padding:10px;align-items:flex-start}.fl-modal{grid-template-columns:1fr;max-height:none;margin:10px 0}.fl-modal-left{border-right:0;border-bottom:1px solid #343832;display:grid;grid-template-columns:110px 1fr;gap:12px;align-items:start;padding:14px}.fl-modal-left img{height:120px;grid-row:span 3}.fl-modal-left h2{margin:4px 0}.fl-modal-left p{margin:0}.fl-modal-fields{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:0 10px}.fl-modal-right{padding:14px}.fl-prompt-text{max-height:40vh}.fl-section-heading h2{letter-spacing:-1.2px}}

@media(max-width:390px){.fl-cards{grid-template-columns:repeat(2,minmax(0,1fr))}.fl-card-image{height:220px}.fl-nav-cta{font-size:11px;padding:9px}.fl-modal-fields{grid-template-columns:1fr}}



/* FoodLab — comparação Antes / Depois */
#foodlab-before-after { padding: 44px 28px 76px; margin: 0; min-height: 0; height: auto; background: var(--bg); color: var(--text); border-radius: 24px; }
#foodlab-before-after .fl-section-heading h2 { color: var(--text); }
#foodlab-before-after .fl-section-heading > p { color: var(--muted); }
#metodo { display: flow-root; margin: 0; min-height: 0; height: auto; padding-bottom: 18px; }
#metodo + #foodlab-before-after { display: flow-root; margin: 0; min-height: 0; height: auto; }
#metodo + #foodlab-before-after { margin-top: 0; padding-top: 24px; }
.fl-ba-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; align-items: start; }
.fl-ba-card { min-width: 0; overflow: hidden; border: 1px solid var(--stroke); border-radius: 18px; background: var(--panel); }
.fl-ba-grid { --fl-ba-gap: 18px; overflow: hidden; padding: 4px 2px 14px; }
.fl-ba-grid::-webkit-scrollbar { display: none; }
.fl-ba-grid { cursor: grab; touch-action: pan-y; }
.fl-ba-grid:active { cursor: grabbing; }
.fl-ba-track { display: flex; width: max-content; gap: var(--fl-ba-gap); animation: fl-before-after-scroll 30s linear infinite; will-change: transform; }
.fl-ba-grid:hover .fl-ba-track { animation-play-state: paused; }
@keyframes fl-before-after-scroll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - var(--fl-ba-gap) / 2)); } }
@media (prefers-reduced-motion: reduce) { .fl-ba-track { animation: none; } }
.fl-ba-card { flex: 0 0 min(390px, 82vw); scroll-snap-align: start; min-width: 0; overflow: hidden; border: 1px solid var(--stroke); border-radius: 20px; background: var(--bg); box-shadow: 0 12px 30px #00000018; color: var(--text); }
.fl-ba-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; padding: 14px 14px 0; background: var(--bg); overflow: hidden; }
.fl-ba-side { min-width: 0; min-height: 0; position: relative; overflow: hidden; }
.fl-ba-side { display: flex; min-width: 0; flex-direction: column; gap: 8px; overflow: hidden; }
.fl-ba-side img { display: block; width: 100%; aspect-ratio: 1 / 1.18; object-fit: cover; border-radius: 12px; }
.fl-ba-label { order: -1; color: #73756f; font: 800 10px 'DM Sans', sans-serif; letter-spacing: 1.5px; }
.fl-ba-label.after { color: #ff8b45; }
.fl-ba-caption { padding: 14px 16px 18px; color: var(--muted); font-size: 12px; line-height: 1.55; }
.fl-ba-caption strong { display: block; margin-bottom: 4px; color: var(--text); font: 700 16px Outfit, sans-serif; }
.fl-prompt-action { display: flex; width: 100%; margin-top: 15px; align-items: center; justify-content: center; gap: 12px; border: 0; border-radius: 10px; padding: 11px 14px; background: var(--accent); color: #050605!important; font-weight: 700; letter-spacing: .3px; }
.fl-prompt-action.locked { background: #f1aa22; }
.fl-prompt-action.loading { background: #4ade80; color: #050605!important; }
.fl-prompt-action svg { flex: 0 0 auto; }
.fl-primary,.fl-secondary,.fl-nav-cta,.fl-modal-close { color: #050605!important; font-weight: 700; letter-spacing: .3px; }
.fl-modal-backdrop { position: fixed; z-index: 20; inset: 0; display: grid; place-items: center; padding: 20px; background: #000000b8; }
.fl-modal { display: flex; width: min(1040px, calc(100vw - 48px)); height: min(820px, calc(100vh - 48px)); max-height: calc(100vh - 48px); flex-direction: column; overflow: hidden; border: 1px solid #424640; border-radius: 20px; background: var(--panel); box-shadow: 0 24px 80px #00000066; }
.fl-modal-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 16px 22px; border-bottom: 1px solid var(--stroke); }
.fl-modal-toolbar h3 { min-width: 0; margin: 0; color: var(--text); font: 700 18px/1.2 Outfit, sans-serif; }
.fl-modal-actions { display: flex; align-items: center; gap: 8px; }
.fl-modal-copy { display: inline-flex; align-items: center; gap: 8px; border: 0; border-radius: 9px; padding: 8px 11px; background: var(--accent); color: #050605; font-weight: 700; letter-spacing: .3px; }
.fl-modal-copy.copied { background: #4ade80; }
.fl-modal-copy.error { background: #f87171; }
.fl-secondary { background: var(--accent); border-color: #ffad7b; color: #050605 !important; }
.fl-secondary:hover { background: #ff9b6b; border-color: #ffc09d; }
.fl-modal-close { border: 0; border-radius: 9px; padding: 8px 11px; background: #dc2626; color: #ffffff !important; font-weight: 700; }
.fl-modal-close:hover { background: #ef4444; }
.fl-prompt-text { min-height: 0; min-width: 0; flex: 1; overflow-y: auto; overflow-wrap: anywhere; white-space: pre-wrap; padding: 24px 28px 28px; color: #d7d8d1; font-size: 14px; line-height: 1.75; }
.fl-modal-content { display: grid; grid-template-columns: minmax(320px, 360px) minmax(0, 1fr); min-height: 0; flex: 1; overflow: hidden; }
.fl-modal-fields { display: grid; align-content: start; gap: 14px; min-width: 0; overflow-y: auto; padding: 24px; border-right: 1px solid var(--stroke); }
.fl-fields-title { margin: 0 0 4px; color: var(--text); font: 700 22px/1.15 Outfit, sans-serif; }
.fl-prompt-panel { display: flex; min-height: 0; min-width: 0; flex-direction: column; overflow: hidden; }
.fl-prompt-panel .fl-modal-toolbar { border-bottom: 1px solid var(--stroke); }
.fl-field { display: grid; gap: 6px; }
.fl-field label { color: #b7bab1; font-size: 11px; font-weight: 800; letter-spacing: .8px; text-transform: uppercase; }
.fl-field input,.fl-field select { box-sizing: border-box; width: 100%; min-width: 0; border: 1px solid #424640; border-radius: 8px; padding: 11px 12px; background: #202220; color: var(--text); outline: none; }
.fl-field input:focus,.fl-field select:focus { border-color: var(--accent); }
.fl-modal-fields::-webkit-scrollbar,.fl-prompt-text::-webkit-scrollbar { width: 8px; }
.fl-modal-fields::-webkit-scrollbar-thumb,.fl-prompt-text::-webkit-scrollbar-thumb { border-radius: 8px; background: #4a5049; }
@media(max-width:720px){.fl-modal{width:calc(100vw - 24px);height:calc(100vh - 24px);max-height:calc(100vh - 24px)}.fl-modal-toolbar{padding:16px 18px}.fl-modal-content{grid-template-columns:1fr;flex:1;overflow-y:auto}.fl-modal-fields{max-height:none;padding:18px;border-right:0;border-bottom:1px solid var(--stroke)}.fl-prompt-panel{min-height:360px}.fl-prompt-text{height:300px;max-height:none;padding:18px}.fl-fields-title{font-size:20px}}
@media (max-width: 720px) {
  #metodo { padding-top: 42px; padding-bottom: 12px; }
  #foodlab-before-after { padding-top: 18px; padding-bottom: 48px; }
  #metodo + #foodlab-before-after { margin-top: 0; }
  .fl-ba-grid { --fl-ba-gap: 14px; }
  .fl-ba-track { animation-duration: 24s; }
  .fl-ba-images { aspect-ratio: 16 / 10; }
  .fl-ba-label { top: 8px; left: 8px; padding: 6px 8px; font-size: 9px; }
  .fl-ba-caption { padding: 12px 13px 14px; }
}
.fl-cardbody p { min-height: 0; line-height: 1.45; }
.fl-cards { max-width: 1120px; margin-inline: auto; }
.fl-ba-grid { grid-template-columns: 1fr; }
.fl-ba-track { animation-duration: 48s; }
.fl-prompt-action { min-height: 40px; padding: 9px 12px; font-size: 12px; }
.fl-prompt-action svg { flex: 0 0 auto; }
.fl-modal-close { display: inline-flex; align-items: center; gap: 6px; }
@media (max-width: 720px) {
  .fl-shell { padding-inline: 18px; }
  .fl-section { padding-block: 48px; }
  .fl-section-heading { display: block; margin-bottom: 22px; }
  .fl-section-heading h2 { margin-top: 8px; }
  .fl-section-heading > p { margin-top: 14px; line-height: 1.55; }
  .fl-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .fl-card-image { height: 150px; }
  .fl-cardbody { padding: 12px; }
  .fl-cardbody h3 { font-size: 15px; line-height: 1.2; }
  .fl-cardbody p { margin-bottom: 12px; font-size: 11px; }
  .fl-cardbottom { display: block; }
  .fl-prompt-action { width: 100%; }
  .fl-ba-grid { --fl-ba-gap: 12px; }
  .fl-ba-track { animation-duration: 52s; }
  .fl-ba-card { flex-basis: min(300px, 78vw); }
  .fl-ba-images { gap: 7px; padding: 10px 10px 0; }
  .fl-ba-side img { aspect-ratio: 1 / 1.08; border-radius: 9px; }
  .fl-ba-caption { padding: 10px 12px 13px; font-size: 11px; line-height: 1.45; }
  .fl-ba-caption strong { margin-bottom: 3px; font-size: 14px; }
  .fl-modal-backdrop { padding: 12px; }
  .fl-modal { width: 100%; height: auto; max-height: 92vh; border-radius: 16px; }
  .fl-modal-toolbar { padding: 12px 14px; }
  .fl-modal-toolbar h3 { font-size: 16px; }
  .fl-modal-close { padding: 6px 8px; font-size: 12px; }
  .fl-modal-content { overflow: hidden; }
  .fl-modal-fields { max-height: 43vh; overflow-y: auto; gap: 10px; padding: 14px; }
  .fl-fields-title { font-size: 18px; }
  .fl-field { gap: 4px; }
  .fl-field input, .fl-field select { padding: 9px 10px; font-size: 13px; }
  .fl-prompt-panel { min-height: 0; }
  .fl-prompt-text { height: auto; max-height: 30vh; padding: 14px; font-size: 13px; line-height: 1.55; }
  .fl-prompt-action { min-height: 36px; padding: 8px 10px; }
  .fl-hero { display: flex; flex-direction: column; }
  .fl-hero-art-wrap { order: -1; width: 100%; }
  .fl-hero-copy { width: 100%; }
}

/* Keep the hero before/after labels readable over the image without touching its edges. */
.fl-ba-side { position: relative; }
.fl-ba-label {
  position: absolute;
  z-index: 2;
  bottom: 10px;
  left: 50%;
  order: initial;
  transform: translateX(-50%);
  border: 1px solid #ffffff3d;
  border-radius: 999px;
  padding: 6px 11px;
  background: #111512d9;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 4px 14px #00000040;
}
.fl-ba-label.after { color: #ffad7b; }

/* FoodLab: mobile uses one consistent card rhythm and keeps every visual inside its frame. */
.fl-cards,
.fl-gallery,
.fl-showcase-grid,
.fl-ba-grid { min-width: 0; }
.fl-card,
.fl-gallery-item,
.fl-showcase-card { min-width: 0; overflow: hidden; }
.fl-card { display: flex; min-height: 100%; flex-direction: column; }
.fl-card-image { aspect-ratio: 4 / 5; height: auto; overflow: hidden; }
.fl-card-image img,
.fl-gallery-item img,
.fl-showcase-card img { display: block; width: 100%; height: 100%; object-fit: cover; }
.fl-cardbody { display: flex; min-width: 0; flex: 1; flex-direction: column; }
.fl-cardbody h3,
.fl-cardbody p,
.fl-cardbottom { min-width: 0; overflow-wrap: anywhere; }
.fl-cardbottom { margin-top: auto; }
.fl-cardbody p,
.fl-section-heading > p,
.fl-hero-copy > p:not(.fl-eyebrow),
.fl-onboarding-copy > p,
.fl-cost > div > p { color: #d0d2cb; }
.fl-trust { color: #d9dbd5; }
.fl-ba-grid { overflow: hidden; }
.fl-ba-track { padding-inline: 2px; }
.fl-ba-images { grid-template-columns: repeat(2, minmax(0, 1fr)); }

/* The hero keeps the before/after idea in a compact, low-distraction loop. */
.fl-hero-art { overflow: hidden; }
.fl-hero-art img { animation: fl-hero-slide 8s ease-in-out infinite; }
.fl-hero-art img:first-of-type { animation-delay: -4s; }
@keyframes fl-hero-slide {
  0%, 42% { opacity: 1; transform: scale(1); }
  50%, 92% { opacity: .18; transform: scale(1.045); }
  100% { opacity: 1; transform: scale(1); }
}

@media (max-width: 720px) {
  .foodlab-page { overflow-x: hidden; }
  .fl-shell { padding-inline: 14px; }
  .fl-navlinks { margin-inline: -2px; padding-inline: 2px; }
  .fl-hero { padding-block: 18px 24px; gap: 12px; }
  .fl-hero-art { width: min(100%, 280px); height: 148px; margin-inline: auto; }
  .fl-hero h1 { margin-block: 8px 10px; font-size: clamp(28px, 9vw, 40px); line-height: 1.02; }
  .fl-hero-copy > p:not(.fl-eyebrow) { font-size: 13px; line-height: 1.35; }
  .fl-actions { flex-wrap: nowrap; gap: 6px; }
  .fl-actions > * { min-width: 0; flex: 1 1 0; padding: 10px 8px; font-size: 12px; }
  .fl-cards { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
  .fl-card-image { aspect-ratio: 4 / 5; }
  .fl-cardbody { padding: 10px; }
  .fl-cardbody h3 { font-size: 13px; line-height: 1.18; }
  .fl-cardbody p { font-size: 11px; line-height: 1.4; }
  .fl-ba-card { flex-basis: min(292px, calc(100vw - 42px)); }
  .fl-ba-images { aspect-ratio: 1.52; }
  .fl-ba-side img { aspect-ratio: 1 / 1.08; }
  .fl-ba-track { animation-duration: 42s; }
  .fl-gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); gap: 8px; }
  .fl-gallery-item { min-height: 0; aspect-ratio: 1 / 1.08; }
  .fl-gallery-item:first-child { grid-column: span 2; }
  .fl-gallery-item span { max-width: 100%; overflow-wrap: anywhere; }
  .fl-nav { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .fl-logo { flex: 0 0 auto; }
  .fl-nav-cta { margin-left: auto; flex: 0 0 auto; }
  .fl-trust { margin-top: 8px; font-size: 10px; line-height: 1.35; }
  .fl-hero-ba-loop { display: block; width: 100%; margin-top: 12px; overflow: hidden; }
  .fl-hero-ba-track { display: flex; width: max-content; gap: 8px; animation: fl-hero-ba-scroll 24s linear infinite; }
  .fl-hero-ba-card { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 4px; width: 116px; padding: 4px; border: 1px solid var(--stroke); border-radius: 8px; background: var(--panel); }
  .fl-hero-ba-card img { width: 45px; height: 38px; border-radius: 5px; object-fit: cover; }
  .fl-hero-ba-card span { color: var(--accent2); font-size: 12px; }
  .fl-section { padding-block: 24px; }
  .fl-section-heading { gap: 8px; margin-bottom: 12px; }
  .fl-section-heading h2 { font-size: clamp(22px, 7vw, 32px); line-height: 1.05; }
  .fl-section-heading > p { font-size: 12px; line-height: 1.35; }
  .fl-onboarding { padding-block: 22px; }
  .fl-onboarding-grid { gap: 8px; }
  .fl-onboarding-step { padding: 10px; }
  .fl-onboarding-copy { gap: 3px; }
  .fl-onboarding-copy h3 { font-size: 14px; }
  .fl-onboarding-copy > p { font-size: 11px; line-height: 1.3; }
}
@keyframes fl-hero-ba-scroll { to { transform: translateX(calc(-50% - 4px)); } }
@media (max-width: 520px) {
  html, body, #root { max-width: 100%; overflow-x: hidden; }
  .foodlab-page { overflow-x: hidden; }
  .fl-shell { padding-inline: 14px; }
  .fl-nav { min-width: 0; gap: 8px; padding-block: 14px; }
  .fl-brand { min-width: 0; font-size: 16px; white-space: nowrap; }
  .fl-navlinks { display: none; }
  .fl-nav-cta { flex: 0 0 auto; padding: 9px 11px; font-size: 10px; white-space: nowrap; }
  .fl-hero-copy { min-width: 0; }
  .fl-hero-copy h1 { font-size: clamp(28px, 9vw, 38px); letter-spacing: -0.045em; }
  .fl-hero-copy > p { max-width: 100%; font-size: 12px; line-height: 1.35; }
  .fl-hero-actions { gap: 6px; }
  .fl-hero-actions a { padding: 12px 12px; font-size: 11px; }
  .fl-hero-ba-loop { max-width: 100%; overflow: hidden; }
  .fl-hero-art { max-width: 100%; height: 148px; }
  .fl-section { padding-block: 16px; }
  .fl-section-heading { margin-bottom: 8px; }
  .fl-onboarding { padding-block: 16px; }
}
@media (prefers-reduced-motion: reduce) {
  .fl-hero-art img { animation: none; }
}
`;

export default function FoodLabStudioPage() {
  const [query, setQuery] = useState("");

  const [category, setCategory] = useState("Todos");

  const [favorites, setFavorites] = useState<number[]>([]);

  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);
  const [isPromptLoading, setIsPromptLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const beforeAfterTrackRef = useRef<HTMLDivElement>(null);
  const beforeAfterDragRef = useRef({
    active: false,
    startX: 0,
    startTranslateX: 0,
  });

  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState("");
  const [format, setFormat] = useState("4:5 — Feed Instagram");
  const [visualStyle, setVisualStyle] = useState(
    "Editorial gastronômico premium",
  );
  const [sensation, setSensation] = useState("Desejo, fome e proximidade");
  const [trigger, setTrigger] = useState("Textura e apetite");

  useEffect(() => {
    if (!selectedPrompt) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedPrompt]);

  const personalizedPrompt = useMemo(() => {
    if (!selectedPrompt) return "";

    const details = [
      ["Nome da marca", brand],
      ["Produto", product],
      ["Frase ou oferta", headline],
      ["Preço", price ? `R$ ${price}` : ""],
      ["Formato final", format],
      ["Estilo visual", visualStyle],
      ["Sensação desejada", sensation],
      ["Gatilho principal", trigger],
    ].filter(([, value]) => value.trim());

    const detailBlock = details.length
      ? `\n\nDIREÇÃO PERSONALIZADA\n${details
          .map(([label, value]) => `${label}: ${value}`)
          .join("\n")}`
      : "";

    return `${selectedPrompt.text}${detailBlock}\n\nELEMENTAÇÃO VISUAL\n- Formato: ${format}\n- Organize a composição com hierarquia clara: produto em primeiro plano, área de respiro e texto legível.\n- Preserve textura, volume, iluminação natural e aparência realista.\n- Quebre o texto em parágrafos curtos, com leitura rápida e foco na conversão.\n\nENTREGA\nCrie uma imagem gastronômica premium, coerente com a marca e pronta para publicação. Não invente ingredientes, preços, logotipos ou informações que não foram fornecidos.`;
  }, [
    selectedPrompt,
    brand,
    product,
    headline,
    price,
    format,
    visualStyle,
    sensation,
    trigger,
  ]);

  useEffect(() => {
    const pixelId = "2153674188571719";

    if ((window as any).fbq) return;

    const s = document.createElement("script");

    s.async = true;

    s.src = "https://connect.facebook.net/en_US/fbevents.js";

    document.head.appendChild(s);

    (window as any).fbq = function (...args: any[]) {
      ((window as any).fbq.q = (window as any).fbq.q || []).push(args);
    };

    (window as any)._fbq = (window as any).fbq;

    (window as any).fbq("init", pixelId);

    (window as any).fbq("track", "PageView", {
      route: window.location.pathname,
      name: "FoodLab",
    });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(
          "[data-reveal],.fl-card,.fl-price-card,.fl-showcase-card,.fl-gallery-item",
        )
        .forEach((el) => el.classList.add("is-visible"));

      return;
    }

    const els = Array.from(
      document.querySelectorAll(
        "[data-reveal],.fl-card,.fl-price-card,.fl-showcase-card,.fl-gallery-item",
      ),
    );

    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");

            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  const categories = useMemo(
    () => [
      "Todos",

      ...Array.from(new Set(prompts.map((p) => p.category))),

      "Favoritos",
    ],

    [],
  );

  const visiblePrompts = useMemo(() => {
    const q = query.toLocaleLowerCase("pt-BR").trim();

    return prompts.filter((p) => {
      const matchesCategory =
        category === "Todos" ||
        (category === "Favoritos"
          ? favorites.includes(p.id)
          : p.category === category);

      const matchesQuery =
        !q ||
        `${p.name} ${p.category} ${p.text}`

          .toLocaleLowerCase("pt-BR")

          .includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [query, category, favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const handleBeforeAfterPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.button !== 0 || !beforeAfterTrackRef.current) return;

    const track = beforeAfterTrackRef.current;
    const computedTransform = window.getComputedStyle(track).transform;
    const currentTranslateX =
      computedTransform === "none"
        ? 0
        : new DOMMatrixReadOnly(computedTransform).m41;

    track.style.animation = "none";
    track.style.transform = `translate3d(${currentTranslateX}px, 0, 0)`;
    beforeAfterDragRef.current = {
      active: true,
      startX: event.clientX,
      startTranslateX: currentTranslateX,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleBeforeAfterPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const drag = beforeAfterDragRef.current;
    const track = beforeAfterTrackRef.current;
    if (!drag.active || !track) return;

    const translateX = drag.startTranslateX + event.clientX - drag.startX;
    track.style.transform = `translate3d(${translateX}px, 0, 0)`;
  };

  const handleBeforeAfterPointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!beforeAfterDragRef.current.active) return;

    beforeAfterDragRef.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const openPrompt = (item: PromptItem) => {
    if (isPromptLoading) return;

    setIsPromptLoading(true);
    setBrand("");
    setProduct("");
    setHeadline("");
    setPrice("");
    setFormat("4:5 — Feed Instagram");
    setVisualStyle("Editorial gastronômico premium");
    setSensation("Desejo, fome e proximidade");
    setTrigger("Textura e apetite");

    window.setTimeout(() => {
      setSelectedPrompt(item);
      setIsPromptLoading(false);
    }, 260);
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(personalizedPrompt);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    } catch (error) {
      console.error("Não foi possível copiar o prompt.", error);
      setCopyStatus("error");
      window.setTimeout(() => setCopyStatus("idle"), 2200);
    }
  };

  return (
    <main className="foodlab-page">
            <style>{styles}</style>     {" "}
      <div className="fl-shell">
               {" "}
        <header className="fl-nav">
                   {" "}
          <a className="fl-brand" href="/" aria-label="FoodLab — início">
            <span>
                            Método{" "}
              <span className="fl-brand-muted">/ FoodLab</span>           {" "}
            </span>
                     {" "}
          </a>
                   {" "}
          <nav className="fl-navlinks" aria-label="Navegação principal">
                        <a href="#comparacao">Demonstração</a>           {" "}
            <a href="#metodo">Como funciona</a>           {" "}
            <a href="#biblioteca">Biblioteca</a>           {" "}
            <a href="#imagens-ia">Fotos IA</a>           {" "}
            <a href="#planos">Estúdios</a>         {" "}
          </nav>
                   {" "}
          <a
            className="fl-nav-cta bg-green-300 text-white animate-bounce"
            href="#Testee"
          >
            Fazer teste <FiArrowUpRight aria-hidden="true" />
          </a>
                 {" "}
        </header>
               {" "}
        <section
          data-reveal
          className="fl-hero"
          aria-labelledby="fl-hero-title"
        >
                   {" "}
          <div className="fl-hero-copy">
                       {" "}
            <p className="fl-eyebrow">
                            Edição de fotos com IA — sem experiência necessária
                         {" "}
            </p>
                       {" "}
            <h1 id="fl-hero-title">
                            Com apenas um clique, transforme qualquer foto
              amadora em uma <em>foto profissional.</em>           {" "}
            </h1>
                       {" "}
            <p>
                            Presets, comandos e referências para transformar a
              sua identidade               visual em imagens com intenção. Crie
              novas campanhas a partir das               fotos que você já tem,
              sem perder o que torna seu produto único.            {" "}
            </p>
                       {" "}
            <div className="fl-actions">
                           {" "}
              <a
                className="fl-primary"
                href="https://pay.kiwify.com.br/pDueN25?utm_id=97760_v0_s00_e0_tv4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar agora <FiArrowUpRight aria-hidden="true" />
              </a>
                           {" "}
              <a className="fl-secondary" href="#comparacao">
                                Ver a transformação              {" "}
              </a>
                         {" "}
            </div>
                       {" "}
            <div className="fl-trust">
                            ✓ Sem fotógrafo &nbsp; ✓ Sem horas perdidas &nbsp;  
                          <b>✓ Sem cara de IA</b>           {" "}
            </div>
            <div className="fl-hero-ba-loop" aria-label="Exemplos antes e depois">
              <div className="fl-hero-ba-track">
                {[...beforeAfterExamples, ...beforeAfterExamples].map((example, index) => (
                  <div className="fl-hero-ba-card" key={`${example.id}-hero-${index}`}>
                    <img src={example.before} alt="" />
                    <span>→</span>
                    <img src={example.after} alt="" />
                  </div>
                ))}
              </div>
            </div>
                     {" "}
          </div>
                   {" "}
          <div className="fl-hero-art-wrap">
                       {" "}
            <div className="fl-hero-art">
                             
              <img
                src="/portfolio/media/imagens/Hamburguer_05.webp"
                alt="Antes"
                fetchPriority="high"
              />
                             
              <img
                src="/portfolio/media/imagens/Cheeseburger artesanal em destaque.webp"
                alt="Depois"
              />
                             {" "}
              <span
                className="fl-image-stamp"
                style={{ left: "auto", right: 16 }}
              >
                DEPOIS
              </span>
                         {" "}
            </div>
                       {" "}
            <span className="fl-image-stamp">
                            ANTES            {" "}
            </span>
                     {" "}
          </div>
                 {" "}
        </section>
               {" "}
        <section data-reveal className="fl-section fl-showcase" id="comparacao">
                   {" "}
          <div className="fl-section-heading">
                       {" "}
            <div>
                           {" "}
              <p className="fl-eyebrow">
                                Uma foto simples. Uma nova apresentação.        
                     {" "}
              </p>
                           {" "}
              <h2>
                                Essas sessões também não aconteceram. Aprenda
                uma vez. Use                 sempre.              {" "}
              </h2>
                         {" "}
            </div>
                       {" "}
            <p>
                            Uma referência bem escolhida ajuda a definir a luz,
              a composição e               a linguagem visual de cada campanha,
              sem começar tudo do zero.            {" "}
            </p>
                     {" "}
          </div>
                   {" "}
          <div className="fl-showcase-grid">
                       {" "}
            {[prompts[0], prompts[1], prompts[2]].map((item, index) => (
              <article className="fl-showcase-card" key={item.id}>
                               {" "}
                <img src={item.img} alt={item.name} loading="lazy" />           
                   {" "}
                <div className="fl-showcase-copy">
                                   {" "}
                  <span>
                                       {" "}
                    {
                      [
                        "DIREÇÃO DE ARTE",

                        "PRODUTO EM FOCO",

                        "CENA & EXPERIÊNCIA",
                      ][index]
                    }
                                     {" "}
                  </span>
                                   {" "}
                  <h3>
                                       {" "}
                    {
                      [
                        "Uma campanha com intenção",

                        "O produto continua sendo o centro",

                        "Bastidores que contam",
                      ][index]
                    }
                                     {" "}
                  </h3>
                                 {" "}
                </div>
                             {" "}
              </article>
            ))}
                     {" "}
          </div>
                 {" "}
        </section>
             {" "}
      </div>
           {" "}
      <div className="fl-shell">
               {" "}
        <section data-reveal className="fl-section fl-library" id="biblioteca">
                   {" "}
          <div className="fl-section-heading">
                       {" "}
            <div>
                           {" "}
              <p className="fl-eyebrow">01 / Biblioteca criativa</p>           
                <h2>Uma foto. Várias possibilidades.</h2>           {" "}
            </div>
                       {" "}
            <p>
                            Escolha um modelo, confira as instruções e
              personalize o que for               necessário. O produto original
              continua sendo a referência               principal.          
               {" "}
            </p>
                     {" "}
          </div>
                   {" "}
          <div className="fl-metrics">
                       {" "}
            <article className="fl-metric">
                            <strong>18</strong>             {" "}
              <p>modelos visuais prontos para explorar</p>           {" "}
            </article>
                       {" "}
            <article className="fl-metric">
                            <strong>02</strong>             {" "}
              <p>direções criativas para campanhas gastronômicas</p>         
               {" "}
            </article>
                       {" "}
            <article className="fl-metric">
                            <strong>01</strong>             {" "}
              <p>objetivo: manter a identidade do produto</p>           {" "}
            </article>
                     {" "}
          </div>
                   {" "}
          <div className="fl-toolbar">
                       {" "}
            <input
              className="fl-search"
              aria-label="Buscar modelos"
              placeholder="Buscar por nome, estilo ou palavra-chave..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
                       {" "}
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={`fl-filter ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                                {item}             {" "}
              </button>
            ))}
                     {" "}
          </div>
                   {" "}
          {visiblePrompts.length ? (
            <div className="fl-cards">
                           {" "}
              {visiblePrompts.map((item) => (
                <article className="fl-card" key={item.id}>
                                   {" "}
                  <div className="fl-card-image">
                                       {" "}
                    <img
                      src={item.img}
                      alt={`Referência visual: ${item.name}`}
                      loading="lazy"
                    />
                                       {" "}
                    <span className="fl-tag">{item.category}</span>             
                         {" "}
                    <button
                      type="button"
                      className={`fl-heart ${favorites.includes(item.id) ? "saved" : ""}`}
                      aria-label={
                        favorites.includes(item.id)
                          ? "Remover dos favoritos"
                          : "Adicionar aos favoritos"
                      }
                      onClick={() => toggleFavorite(item.id)}
                    >
                                           {" "}
                      {favorites.includes(item.id) ? (
                        <FiHeart aria-hidden="true" fill="currentColor" />
                      ) : (
                        <FiHeart aria-hidden="true" />
                      )}
                    </button>
                                     {" "}
                  </div>
                                   {" "}
                  <div className="fl-cardbody">
                                       {" "}
                    <span className="fl-num">
                                            PROMPT{" "}
                      {String(item.id).padStart(3, "0")}                   {" "}
                    </span>
                                        <h3>{item.name}</h3>                   {" "}
                    <p>
                                            Direção visual pronta para adaptar à
                      sua marca e ao                       produto enviado.    
                                     {" "}
                    </p>
                                       {" "}
                    <div className="fl-cardbottom">
                      {item.id === prompts[0].id ? (
                        <button
                          id="Testee"
                          type="button"
                          className={`relative isolate overflow-hidden flex items-center justify-center gap-2 fl-prompt-action animate-bounce before:content-[''] before:absolute before:top-0 before:-left-[100px] before:h-full before:w-[100px] before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.8),transparent_70%)] before:opacity-60 hover:before:animate-[shine_1.5s_ease-out_infinite] ${
                            isPromptLoading ? "loading" : ""
                          }`}
                          onClick={() => openPrompt(item)}
                          disabled={isPromptLoading}
                        >
                          {isPromptLoading ? "Abrindo..." : "Testar"}
                          <FiArrowUpRight aria-hidden="true" />
                        </button>
                      ) : (
                        <a
                          className="relative isolate overflow-hidden flex items-center justify-center gap-2 fl-prompt-action locked before:content-[''] before:absolute before:top-0 before:-left-[100px] before:h-full before:w-[100px] before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.8),transparent_70%)] before:opacity-60 hover:before:animate-[shine_1.5s_ease-out_infinite]"
                          href="https://pay.kiwify.com.br/pDueN25?utm_id=97760_v0_s00_e0_tv4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiLock aria-hidden="true" /> Liberar acesso
                        </a>
                      )}{" "}
                      <span className="fl-num">
                                               {" "}
                        {favorites.includes(item.id) ? (
                          <>
                            <FiHeart aria-hidden="true" fill="currentColor" />{" "}
                            Salvo
                          </>
                        ) : null}
                      </span>
                                         {" "}
                    </div>
                                     {" "}
                  </div>
                                 {" "}
                </article>
              ))}
                         {" "}
            </div>
          ) : (
            <div className="fl-empty">
                            Nenhum modelo encontrado. Tente outra palavra ou
              categoria.            {" "}
            </div>
          )}
                 {" "}
        </section>
               {" "}
        <section data-reveal className="fl-section" id="metodo">
                   {" "}
          <div className="fl-section-heading">
                       {" "}
            <div>
                            <p className="fl-eyebrow">02 / Por que funciona</p> 
                         {" "}
              <h2>
                                Não é mágica.                {" "}
                <span style={{ color: "var(--accent)" }}>É contexto.</span>     
                       {" "}
              </h2>
                         {" "}
            </div>
                       {" "}
            <p>
                            RAG é a ponte entre o que você pede e o que a IA
              precisa saber. Em               vez de depender só de uma
              instrução genérica, a consulta a               referências ajuda a
              manter critérios e direção.            {" "}
            </p>
                     {" "}
          </div>
                   {" "}
          <div className="fl-how">
                       {" "}
            {steps.map((step) => (
              <article className="fl-step" key={step.number}>
                               {" "}
                <span className="fl-stepnum">{step.number}</span>               {" "}
                <h3>{step.title}</h3>                <p>{step.description}</p> 
                           {" "}
              </article>
            ))}
                     {" "}
          </div>
                 {" "}
        </section>
               
        <section
          data-reveal
          className="fl-section"
          id="foodlab-before-after"
          aria-labelledby="fl-before-after-title"
        >
          <div className="fl-section-heading">
            <div>
              <p className="fl-eyebrow">03 / Antes & depois</p>
              <h2 id="fl-before-after-title">
                ESSAS SESSÕES TAMBÉM NÃO ACONTECERAM.
              </h2>
            </div>
            <p>Uma foto simples. Uma nova apresentação.</p>
          </div>
          <div className="fl-ba-grid">
            <div
              ref={beforeAfterTrackRef}
              className="fl-ba-track"
              onPointerDown={handleBeforeAfterPointerDown}
              onPointerMove={handleBeforeAfterPointerMove}
              onPointerUp={handleBeforeAfterPointerUp}
              onPointerCancel={handleBeforeAfterPointerUp}
              aria-label="Arraste para navegar pelos exemplos antes e depois"
            >
              {[...beforeAfterExamples, ...beforeAfterExamples].map(
                (example, index) => (
                  <article
                    className="fl-ba-card"
                    key={`${example.id}-${index}`}
                  >
                    <div className="fl-ba-images">
                      <div className="fl-ba-side">
                        <img
                          src={example.before}
                          alt={`Antes — ${example.title}`}
                          loading="lazy"
                        />
                        <span className="fl-ba-label">ANTES</span>
                      </div>
                      <div className="fl-ba-side">
                        <img
                          src={example.after}
                          alt={`Depois — ${example.title}`}
                          loading="lazy"
                        />
                        <span className="fl-ba-label after">DEPOIS</span>
                      </div>
                    </div>
                    <div className="fl-ba-caption">
                      <strong>{example.title}</strong>
                      {example.description}
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
        <div className="fl-marquee" aria-label="Imagem. Referência. Intenção.">
          <span>
            IMAGEM <i>•</i> REFERÊNCIA <i>•</i> INTENÇÃO <i>•</i> REPETIÇÃO COM
            IDENTIDADE <i>•</i>
            IMAGEM <i>•</i> REFERÊNCIA <i>•</i> INTENÇÃO <i>•</i>
          </span>
        </div>
        <section data-reveal className="fl-section" id="imagens-ia">
                   {" "}
          <div className="fl-section-heading">
                       {" "}
            <div>
                           {" "}
              <p className="fl-eyebrow">04 / Ideias que ganham forma</p>       
                    <h2>Primeiro, a imagem ganha direção.</h2>           {" "}
            </div>
                       {" "}
            <p>
                            Experimente cenas, luzes e enquadramentos sem perder
              de vista o               produto que torna a sua marca única.    
                     {" "}
            </p>
                     {" "}
          </div>
                   {" "}
          <div className="fl-gallery">
                       {" "}
            {[prompts[3], prompts[4], prompts[5], prompts[6], prompts[7]].map(
              (item) => (
                <div className="fl-gallery-item" key={item.id}>
                                   {" "}
                  <img src={item.img} alt={item.name} loading="lazy" />         
                          <span>{item.name}</span>               {" "}
                </div>
              ),
            )}
                     {" "}
          </div>
                 {" "}
        </section>
               {" "}
        <section
          data-reveal
          className="fl-section fl-onboarding"
          id="primeiros-passos"
        >
                   {" "}
          <div className="fl-onboarding-grid">
                       {" "}
            <div className="fl-onboarding-copy">
                           {" "}
              <p className="fl-eyebrow">04 / Aprenda uma vez. Use sempre.</p>   
                       {" "}
              <h2 className="fl-display">
                                Você não precisa fazer um curso longo.          
                   {" "}
              </h2>
                           {" "}
              <p>
                                Assista a uma aula rápida, entenda como funciona
                e instale o                 Estúdio Invisível no seu celular.
                Depois, escolha o estilo,                 copie o prompt e use
                com a foto do seu produto.              {" "}
              </p>
                           {" "}
              <p className="fl-mantra">
                                Aprenda uma vez.                 <br />         
                      <em>Use sempre que precisar.</em>             {" "}
              </p>
                         {" "}
            </div>
                       {" "}
            <div className="fl-onboarding-steps">
                           {" "}
              {onboardingSteps.map((step) => (
                <article className="fl-onboarding-step" key={step.number}>
                                    <span>{step.number}</span>                 {" "}
                  <div>
                                        <h3>{step.title}</h3>                   {" "}
                    <p>{step.description}</p>                 {" "}
                  </div>
                                 {" "}
                </article>
              ))}
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </section>
               {" "}
        <section data-reveal className="fl-section">
                   {" "}
          <div className="fl-cost">
                       {" "}
            <div>
                           {" "}
              <p className="fl-eyebrow">05 / O valor da produção</p>           
               {" "}
              <h2
                className="fl-display"
                style={{ fontSize: "clamp(34px,4vw,53px)" }}
              >
                                Quanto custaria produzir tudo isso do jeito
                tradicional?              {" "}
              </h2>
                           {" "}
              <p>
                                Fotógrafo, captação, iluminação, produção,
                tratamento, vídeo,                 edição e tempo. Uma produção
                mais completa pode representar                 centenas ou até
                milhares de reais.              {" "}
              </p>
                           {" "}
              <ul className="fl-cost-list">
                               {" "}
                {traditionalProduction.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                             {" "}
              </ul>
                           {" "}
              <small style={{ color: "var(--muted)" }}>
                                *Estimativa de referência. O custo varia de
                acordo com o escopo                 e a produção.            
                 {" "}
              </small>
                         {" "}
            </div>
                       {" "}
            <div className="fl-cost-number">
                            <span>UMA PRODUÇÃO COMPLETA PODE CHEGAR A</span>   
                        <strong>R$ 1.500*</strong>
                            <i />             {" "}
              <span>FOTOGRAFIA · VÍDEO · PÓS-PRODUÇÃO</span>           {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </section>
               {" "}
        <section data-reveal className="fl-section fl-pricing" id="planos">
                   {" "}
          <div className="fl-section-heading">
                       {" "}
            <div>
                           {" "}
              <p className="fl-eyebrow">06 / Escolha o seu estúdio</p>         
                 {" "}
              <h2>
                                Fotos ou                {" "}
                <span style={{ color: "var(--accent)" }}>Fotos + Vídeos.</span> 
                           {" "}
              </h2>
                         {" "}
            </div>
                       {" "}
            <p>Um pagamento único. Seu próximo passo criativo começa aqui.</p> 
                   {" "}
          </div>
                   {" "}
          <div className="fl-pricing-grid">
                       {" "}
            <article className="fl-price-card">
                           {" "}
              <span className="fl-eyebrow">Estúdio Invisível</span>             {" "}
              <h3>Fotos</h3>             {" "}
              <p>Crie fotos com direção, método e identidade visual.</p>       
                   {" "}
              <ul>
                               {" "}
                {photoFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
                             {" "}
              </ul>
                           {" "}
              <div className="fl-price">
                                <strong>R$ 47</strong>               {" "}
                <span>Pagamento único</span>             {" "}
              </div>
                           {" "}
              <a
                className="fl-secondary"
                href="https://pay.kiwify.com.br/pDueN25?utm_id=97760_v0_s00_e0_tv4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ justifyContent: "center", marginTop: 18 }}
              >
                Quero o Estúdio Fotos <FiArrowUpRight aria-hidden="true" />
              </a>
                         {" "}
            </article>
                       {" "}
            <article className="fl-price-card featured">
                           {" "}
              <span className="fl-eyebrow">
                                Estúdio Invisível · melhor custo-benefício      
                       {" "}
              </span>
                            <h3>Fotos + Vídeos</h3>             {" "}
              <p>Leve sua criação da imagem ao movimento.</p>             {" "}
              <ul>
                               {" "}
                {videoFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
                             {" "}
              </ul>
                           {" "}
              <div className="fl-price">
                                <strong>R$ Em-breve</strong>               {" "}
                <span>Pagamento único</span>             {" "}
              </div>
                           {" "}
              <a
                className="fl-primary"
                href="https://pay.kiwify.com.br/pDueN25?utm_id=97760_v0_s00_e0_tv4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ justifyContent: "center", marginTop: 18 }}
              >
                Quero Fotos + Vídeos <FiArrowUpRight aria-hidden="true" />
              </a>
                         {" "}
            </article>
                     {" "}
          </div>
                 {" "}
        </section>
               {" "}
        <section data-reveal className="fl-section" id="faq">
                   {" "}
          <div className="fl-section-heading">
                       {" "}
            <div>
                           {" "}
              <p className="fl-eyebrow">07 / Perguntas frequentes</p>           
                <h2>Sem mistério.</h2>           {" "}
            </div>
                     {" "}
          </div>
                   {" "}
          <div className="fl-faq">
                       {" "}
            <details>
                           {" "}
              <summary>Preciso treinar um modelo de IA do zero?</summary>       
                   {" "}
              <p>
                                Não. A proposta é configurar instruções e uma
                base de                 conhecimento consultável por RAG. A IA
                recupera seus critérios e                 referências na hora de
                responder — sem treinar um modelo do                 zero.      
                       {" "}
              </p>
                         {" "}
            </details>
                       {" "}
            <details>
                            <summary>Funciona com ChatGPT e Claude?</summary>   
                       {" "}
              <p>
                                Sim. Os materiais e comandos são organizados
                para uso com o                 assistente escolhido, respeitando
                os recursos disponíveis em                 cada plataforma.    
                         {" "}
              </p>
                         {" "}
            </details>
                       {" "}
            <details>
                           {" "}
              <summary>Posso usar minhas próprias fotos e referências?</summary>
                           {" "}
              <p>
                                Sim. Suas imagens servem como referências para
                definir direção                 visual, e os documentos podem
                reunir presets, critérios de                 edição e exemplos
                do resultado que você busca.              {" "}
              </p>
                         {" "}
            </details>
                     {" "}
          </div>
                 {" "}
        </section>
               {" "}
        <section data-reveal className="fl-cta" id="contato">
                   {" "}
          <div>
                       {" "}
            <p className="fl-eyebrow">
                            Uma foto. Várias produções. Nenhuma sessão nova.    
                     {" "}
            </p>
                       {" "}
            <h2>
                            Essa foto não teve sessão.               <br />     
                     {" "}
              <span style={{ color: "var(--accent)" }}>
                                Esse vídeo não teve gravação.              {" "}
              </span>
                         {" "}
            </h2>
                       {" "}
            <p>
                            E você pode aprender a criar os dois para o seu
              negócio. Escolha               uma direção visual, teste a
              biblioteca e adapte o resultado à sua               marca.        
                 {" "}
            </p>
                     {" "}
          </div>
                   {" "}
          <a className="fl-primary" href="/#contact">
            Siga no instagram
            <FiArrowUpRight aria-hidden="true" />
          </a>
                 {" "}
        </section>
               {" "}
        <footer className="fl-footer">
                   {" "}
          <a className="fl-brand" href="/" aria-label="FoodLab — início">
            <span>
                            MÉTODO{" "}
              <span className="fl-brand-muted">FOODLAB</span>           {" "}
            </span>
                     {" "}
          </a>
                   {" "}
          <span>Uma foto. Várias produções. Nenhuma sessão nova.</span>       
           {" "}
        </footer>
             {" "}
      </div>
               {" "}
      {selectedPrompt && (
        <div
          className="fl-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedPrompt(null);
          }}
        >
          <section
            className="fl-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fl-prompt-title"
          >
            <div className="fl-modal-content">
              <div className="fl-modal-fields">
                <h3 className="fl-fields-title">{selectedPrompt.name}</h3>
                <div className="fl-field">
                  <label htmlFor="fl-brand">Nome da marca</label>
                  <input
                    id="fl-brand"
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}
                    placeholder="Ex.: FoodLab"
                  />
                </div>
                <div className="fl-field">
                  <label htmlFor="fl-product">Produto</label>
                  <input
                    id="fl-product"
                    value={product}
                    onChange={(event) => setProduct(event.target.value)}
                    placeholder="Ex.: hambúrguer artesanal"
                  />
                </div>
                <div className="fl-field">
                  <label htmlFor="fl-headline">Frase ou oferta</label>
                  <input
                    id="fl-headline"
                    value={headline}
                    onChange={(event) => setHeadline(event.target.value)}
                    placeholder="Ex.: O sabor que reúne todo mundo"
                  />
                </div>
                <div className="fl-field">
                  <label htmlFor="fl-price">Preço</label>
                  <input
                    id="fl-price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    placeholder="Ex.: 29,90"
                  />
                </div>
                <div className="fl-field">
                  <label htmlFor="fl-format">Formato e tamanho</label>
                  <select
                    id="fl-format"
                    value={format}
                    onChange={(event) => setFormat(event.target.value)}
                  >
                    <option>4:5 — Feed Instagram</option>
                    <option>9:16 — Stories / Reels</option>
                    <option>1:1 — Quadrado</option>
                    <option>16:9 — Horizontal</option>
                  </select>
                </div>
                <div className="fl-field">
                  <label htmlFor="fl-style">Estilo visual</label>
                  <input
                    id="fl-style"
                    value={visualStyle}
                    onChange={(event) => setVisualStyle(event.target.value)}
                  />
                </div>
                <div className="fl-field">
                  <label htmlFor="fl-sensation">Sensação</label>
                  <input
                    id="fl-sensation"
                    value={sensation}
                    onChange={(event) => setSensation(event.target.value)}
                  />
                </div>
                <div className="fl-field">
                  <label htmlFor="fl-trigger">Gatilho</label>
                  <input
                    id="fl-trigger"
                    value={trigger}
                    onChange={(event) => setTrigger(event.target.value)}
                  />
                </div>
              </div>
              <div className="fl-prompt-panel">
                <div className="fl-modal-toolbar">
                  <h3 id="fl-prompt-title">Prompt pronto</h3>
                  <div className="fl-modal-actions">
                    <button
                      type="button"
                      className={`fl-modal-copy ${copyStatus}`}
                      onClick={copyPrompt}
                    >
                      <FiCopy aria-hidden="true" />
                      {copyStatus === "copied"
                        ? "Copiado!"
                        : copyStatus === "error"
                          ? "Erro ao copiar"
                          : "Copiar"}
                    </button>
                    <button
                      type="button"
                      className="fl-modal-close"
                      onClick={() => {
                        setCopyStatus("idle");
                        setSelectedPrompt(null);
                      }}
                    >
                      Fechar <FiX aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="fl-prompt-text">{personalizedPrompt}</div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
