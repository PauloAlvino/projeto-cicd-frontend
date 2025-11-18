const RENDER_URL = 'https://api-cicd-p0ck.onrender.com'; 

async function verificarStatus() {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "Carregando...";

    try {
        const resposta = await fetch(RENDER_URL);
        
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        divResultado.innerHTML = `
            <p>${dados.mensagem}</p>
            <span class="versao">v${dados.versao_atual}</span>
        `;

    } catch (error) {
        console.error("Erro:", error);
        divResultado.innerHTML = `<span style="color: red;">Erro ao conectar: ${error.message}</span>`;
    }
}