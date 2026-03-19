let lucro = 30
let lucro2 =10;
function soma(a,b){
    return a + b
}
soma(lucro,lucro2)
function resultadoDivisaoSocio(){
    return soma(lucro,lucro2)/2
}
function caculadora(ari,a,b){
  switch(ari){
    case '+':
      resultado = a +b
  break;
  case '-':
  resultado = a - b;
  break;
  case '*':
  resultado = a * b;
  break;
  case '/':
  resultado = a/b;
  break;
  default:
  resultado ='operador inválido';
}
return resutado
}