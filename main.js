function exportarParaArquivo() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const CPF = document.getElementById('CPF').value;
    const telc = document.getElementById('telc').value;
    const telf = document.getElementById('telf').value;
    const CNPJ = document.getElementById('CNPJ').value;

    // Combine os dados em uma string no formato desejado
    const dados = `Nome: ${nome}\nCPF: ${CPF}\nEmail: ${email}\nTelefone Celular: ${telc}\nTelefone Fixo: ${telf}\nCNPJ: ${CNPJ}`;

    // Crie um objeto Blob com os dados
    const blob = new Blob([dados], { type: 'text/plain' });

    // Crie um link para download do arquivo
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'dados.txt'; // Nome do arquivo a ser baixado
    a.click();
}

// Adicione um ouvinte de evento ao botão de exportação
document.getElementById('exportarArquivo').addEventListener('click', exportarParaArquivo);