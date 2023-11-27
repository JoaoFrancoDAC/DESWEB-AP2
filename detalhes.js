// Obtém a URL atual
const urlAtual = window.location.href;

// Função para obter o valor do parâmetro "atleta-id" da URL
function obterValorAtletaId(url) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('atleta-id');
}

// Obtém o valor de "atleta-id" da URL atual
const atletaId = obterValorAtletaId(urlAtual);

async function fetchData() {
    try {
        const atletaId = obterValorAtletaId(urlAtual);
        const response = await fetch(`https://botafogo-atletas.mange.li/${atletaId}`);
  
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados');
        }
  
        // Converte a resposta para JSON
        const atleta = await response.json();
    
        // Insere os dados nos elementos HTML
        document.getElementById('imagem-atleta').src = atleta.imagem;
        document.getElementById('nome-atleta').textContent = atleta.nome;
        document.getElementById('nome_completo-atleta').textContent = atleta.nome_completo;
        document.getElementById('posicao-atleta').textContent = `Posição: ${atleta.posicao}`;
        document.getElementById('descricao-atleta').textContent = atleta.descricao;
        document.getElementById('nascimento-atleta').textContent = `Data de Nascimento: ${atleta.nascimento}`;
        document.getElementById('altura-atleta').textContent = `Altura: ${atleta.altura}m`;
        } catch (error) {
        console.error('Erro:', error.message);
        }
    }
    
    // Chama a função fetchData para buscar e exibir os dados
    fetchData();