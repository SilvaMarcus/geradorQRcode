
var botao = document.querySelector('.botao');
var caixa_img = document.querySelector('#QRcodeImage');


botao.addEventListener('click', clicar => {
  var usuario = document.querySelector('.usuario').value; 
  var senha = document.querySelector('.senha').value;
      
// Pegando URL da API do GoogleCharts e concatenando usuario e senha com a url da API  
var googleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chl=WIFI%3AT%3AWPA%3BS%3A${usuario}%3BP%3A${senha}%3BH%3A%3B&chs=250x250&choe=UTF-8&chld=L|2`; 

                                                                   
caixa_img.src = googleChartAPI; // aadicionando o link  no src de img 

exibir() 

 })



// funcao adionando classes para ocultar e exibir 
const botao_print = document.querySelector('.fa-print');
const  input1 = document.querySelector('.input-usuario');
const  input2 = document.querySelector('.input-senha');
const titulo = document.querySelector('#titulo-qr');
function exibir () {
  botao_print.classList.toggle('show');
  input1.classList.toggle('hide');
  input2.classList.toggle('hide');
  titulo.classList.toggle('hide');

}

 // printar 
botao_print.addEventListener('click', printar => {
  
    print()

})
