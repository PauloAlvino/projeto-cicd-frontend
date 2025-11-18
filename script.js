async function chamarAPI() {
  const saida = document.getElementById('saida');
  saida.innerText = "Carregando...";

  try {
    const RENDER_URL = 'https://projeto-back.onrender.com'; 
    
    const resposta = await fetch(RENDER_URL);
    
    if (!resposta.ok) {
        throw new Error(`HTTP Error: ${resposta.status}`);
    }

    const dados = await resposta.json();
    saida.innerText = JSON.stringify(dados, null, 2);

  } catch (error) {
    console.error("Erro ao chamar API:", error);
    saida.innerText = `Erro ao chamar API: ${error.message}`;
  }
}