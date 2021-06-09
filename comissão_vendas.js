const prompt = require('prompt-sync')();
function main(){

    // ENTRADA
const nome = prompt("Digite o nome do vendedor: ")
const vendas = Number(prompt("Digite o valor do total de vendas (R$) : "))

// PROCESSAMENTO
const salario = 1100
const comissao5 = ( 10000 - vendas ) * ( 5 / 100)
const comissao10 = ( vendas - 10000 ) * ( 10 / 100 ) + ( 250 )
const comissao20 = ( vendas ) * ( 20 / 100 )
const remuneracao1 = salario + comissao5
const remuneracao2 = salario + comissao10
const remuneracao3 = salario + comissao20

// SAÍDA
if ( vendas <= 5000){
    console.log(`${nome} vendeu R$ ${vendas} em mercadorias e vai receber uma remuneração de R$ ${salario}.`)
}else if ( vendas >= 5000 && vendas <= 10000 ){
    console.log(`${nome} vendeu R$ ${vendas} em mercadorias e vai receber uma remuneração de R$ ${remuneracao1}.`)
}else if (vendas > 10000 && vendas <= 30000){
    console.log(`${nome} vendeu R$ ${vendas} em mercadorias e vai receber uma remuneração de R$ ${remuneracao2}.`)
}else {
    console.log(`${nome} vendeu R$ ${vendas} em mercadorias e vai receber uma remuneração de R$ ${remuneracao3}.`)
}

}

main()
