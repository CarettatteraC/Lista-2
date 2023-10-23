// exercicio 4
const nota = prompt("Digite a nota (0-100)");
if ( nota >= 60 ) {
    console.log("Aprovado!");
} 
if (nota < 60) {
    console.log("Reprovado!");
}
if ( 0 < nota || nota > 100){
    console.log("Valor inválido!");
}

