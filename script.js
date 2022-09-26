var botao = document.querySelector('.botao');
var caixa_img = document.querySelector('#QRcodeImage');
const main_qr = document.querySelector('#main-qr');
 
botao.addEventListener('click', clicar => {

// Pegando URL da API do GoogleCharts e concatenando usuario e senha com a url da API  
var googleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chl=WIFI%3AT%3AWPA%3BS%3A${usuario}%3BP%3A${senha}%3BH%3A%3B&chs=280x280&choe=UTF-8&chld=L|2`; 

var usuario = document.querySelector('.usuario').value; 
var senha = document.querySelector('.senha').value;
                                                                       
caixa_img.src = googleChartAPI; // aadicionando o link  no src de img 

exibir() // chamando a funcao que exibe a div de imprimir 
 })
  
 const botao_print = document.querySelector('.fa-print');

//funcao que adiciona classe para exibir botao de imprimir apos gerar o qr code
function exibir () {

    botao_print.classList.toggle('show');

}

botao_print.addEventListener('click', printar => {

    print()

})
