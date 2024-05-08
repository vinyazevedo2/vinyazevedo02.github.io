var numberOne;
var numberTwo;
var digitado;
var pontos;
var operadores = ['+', '-', '*', '/']
var operadorEscola = '';
var primaryValue = '';
var  secondValue = '';
var valor = null;
var somaPontos =null;

function sortear(){
    numberOne();
    numberTwo();
    resultOperation();
    resultCalc();
}

function numberOne (){
    primaryValue =  Math.floor(Math.random() * 100) ;
    document.getElementById('primeiro').innerHTML = `<h1>${primaryValue}</h1>`;
  
}

function numberTwo (){
     secondValue =  Math.floor(Math.random() * 100) ;
    
     document.getElementById('segundo').innerHTML = `<h1>${secondValue}</h1>`; 
 }
 
function resultOperation(){
    resultOpera = Math.floor(Math.random() * 3.5)

    operadorEscola = operadores[resultOpera]


    document.getElementById('operador').innerHTML = `<h1>${operadorEscola}</h1>`;

}
function resultCalc (){


    if(operadorEscola== '-'){
        valor = primaryValue - secondValue ;

    }else     if(operadorEscola== '+'){
        valor = primaryValue + secondValue ;

    }else     if(operadorEscola== '*'){
        valor = primaryValue * secondValue ;
    }else {
        valor = primaryValue / secondValue;
    }
    
   

}
function valida(){

 
    let input_digitado = document.getElementById('input_digitado');
 

    if(Number(input_digitado.value) == valor){
      somaPontos = somaPontos + 10;
    document.getElementById('pontuacao').innerHTML = `<h1>SEUS PONTOS:${somaPontos}</h1>`;
     
    }else{
        console.log('errado')
    }

}


 