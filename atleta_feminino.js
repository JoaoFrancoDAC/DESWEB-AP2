async function fetchData() {
    try {
        const response = await fetch('https://botafogo-atletas.mange.li/feminino');
      
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados');
        }
      
        const data = await response.json();
      
        // Mapeando os resultados para exibição na página
        const resultsDiv = document.getElementById('results');
        data.forEach(item => {
            // Criar uma div para cada item
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('playerInfos');

    

            const playerImage = document.createElement('img');
            playerImage.classList.add ('playerImage')
            playerImage.src = item.imagem;
            playerDiv.appendChild(playerImage);
            
            const playerName = document.createElement('p');
            playerName.textContent = `${item.nome}`;
            playerName.classList.add ('nome');
            playerDiv.appendChild(playerName);

            const detailsButton = document.createElement('button');
            detailsButton.classList.add ('playerButton')
            detailsButton.textContent = 'Ver detalhes';
            detailsButton.addEventListener('click', () => {
                window.location.href = `detalhes.html?atleta-id=${encodeURIComponent(item.id)}`;
            });
            playerDiv.appendChild(detailsButton);

            

            resultsDiv.appendChild(playerDiv);

            const lineBreak = document.createElement('br');
            resultsDiv.appendChild(lineBreak);
        });

    
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}





fetchData();