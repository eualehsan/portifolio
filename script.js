// trocar em tema escuro/claro button
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){ //troca entre as classes root do css
  $html.classList.toggle('modo-claro'); 
})

const projetos = [ //array que guarda os dados de cada projeto para montar cada card
  {
    id: 0,
    title: "Calculadora simples",
    date: "01 de novembro de 2023",
    description: "Uma calculadora simples feita com conhecimentos básicos em HTML5, CSS3 e Javascript. Com funções de somar, subtrair, multiplicar e dividir.",
    image: "./img/img-calculadora.jpeg",
    techIcons: [
      { id: "html5-colorfull", iconClass: "fa-brands fa-html5", label: "HTML5" },
      { id: "css3-colorfull", iconClass: "fa-brands fa-css3-alt", label: "CSS3" },
      { id: "javascript-colorfull", iconClass: "fa-brands fa-js", label: "JavaScript" },
    ],
    githubLink: "https://github.com/eualehsan/calculadora",
    link: "https://eualehsan.github.io/calculadora/"
  },
  {
    id: /*1*/ 100,
    title: "Hub de 'The Walking Dead'",
    date: "30 de novembro de 2024",
    description: "Este site funciona como um hub de fã para fã. Veja detalhes da série, dos seus spin-offs e dos quadrinhos!",
    image: "./img/proj-the-walking-dead.png",
    techIcons: [
      { id: "html5-colorfull", iconClass: "fa-brands fa-html5", label: "HTML5" },
      { id: "css3-colorfull", iconClass: "fa-brands fa-css3-alt", label: "CSS3" },
      { id: "javascript-colorfull", iconClass: "fa-brands fa-js", label: "JavaScript" },
      { id: "ux-ui-colorfull", iconClass: "fa-solid fa-wand-magic-sparkles", label: "UX/UI" },
      { id: "api-colorfull", iconClass: "fa-solid fa-cloud-arrow-down", label: "API" }
    ],
    githubLink: "https://github.com/eualehsan/thewalkingdeadhub",
    link: "https://eualehsan.github.io/the-walking-dead-hub"
  }
];

function abreModal(projectId) { //funcao que abre o modal e puxa do array as informaçoes de cada projeto quando clicado em 'ver projeto'
  const project = projetos.find((proj) => proj.id === projectId);

  if (project) {
    //preenche o modal com os dados de cada projeto
    document.getElementById("modal-img").src = project.image; //imagem
    document.getElementById("modal-title").innerText = project.title; //titulo
    document.getElementById("modal-date").innerText = project.date; //data de publicaçao
    document.getElementById("modal-description").innerText = project.description; //descricao

    //preencher ícones de tecnologia
    const techIconsContainer = document.getElementById("modal-tech-icons");
    techIconsContainer.innerHTML = ""; //limpar ícones antigos
    project.techIcons.forEach((tech) => {
      const li = document.createElement("li");
      li.id = tech.id; //atribui o id fornecido pelo array
      li.innerHTML = `<i class="${tech.iconClass}"></i><h6>${tech.label}</h6>`;
      techIconsContainer.appendChild(li);
    });

    // atualiza o link dos botoes 'ver no github' e 'ver execuçao'
    const modalLinkGithub = document.getElementById("modal-github-link"); //ver no github
    modalLinkGithub.href = project.githubLink;

    const modalLink = document.getElementById("modal-link"); //ver execuçao
    modalLink.href = project.link;
  

    //exibi o modal
    const modalConteiner = document.querySelector(".modal")
    modalConteiner.classList.add("visivel");

    const html = document.querySelector("html");
    html.style.overflowY = "hidden"; //nao permite rolagem vertical

  }
}

function fechaModal() { //fecha o modal
  const modalConteiner = document.querySelector(".modal");
  const html = document.querySelector("html");

  html.style.overflowY = "scroll"; //permite a rolagem vertival apos fechar o modal
  modalConteiner.classList.remove("visivel");

}
