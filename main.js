
JULIA VITORIA PEREIRA ALVES
15:36 (há 5 minutos)
para mim

const botoes = documento . querySelectorAll ( ".botao" );

para ( let i = 0 ; i < botoes.length ; i ++){
botoes [ i ]. onclick = function (){

para ( seja j = 0 ; j < botoes.length ; j ++){
botoes [ j ]. lista de classes . remover ( "ativo" );
}
botoes [ eu ]. lista de classes . add ( "ativo" );
}
}