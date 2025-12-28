// Lista de projetos 
const projetos = [
    { 
        titulo: "Página Inicial Para um Produto", 
        descricao: "Desenvolvimento de uma Landing Page focada em conversão e design visual para um produto específico." 
    },
    { 
        titulo: "Formulário de Pesquisa", 
        descricao: "Criação de uma interface de formulário interativa com validações e foco na experiência do usuário (UX)." 
    }
];

// Função para os projetos no HTML
function renderizarProjetos() {
    const lista = document.getElementById('projeto-lista');
    
    
    lista.innerHTML = "";

    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="#" style="color: #00d4ff; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 10px;">Ver Projeto →</a>
        `;
        lista.appendChild(card);
    });
}

// Formulário de Contato do Portfólio
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
        form.reset(); 
    });
}

//  carregar a página
window.onload = renderizarProjetos;

window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.card, .skill-card, h2');
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < window.innerHeight - 100) {
            el.classList.add('aparecer');
        }
    });
});
const btnTop = document.getElementById("btnTop");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

btnTop.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
