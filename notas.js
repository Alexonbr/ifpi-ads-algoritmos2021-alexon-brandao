const prompt = require('prompt-sync')();
function main(){


    // ENTRADA
const nome = prompt("Digite o nome do aluno: ")
const av1 = Number(prompt("Digite a nota da primeira avaliação: "))
const av2 = Number(prompt("Digite a nota da segunda avaliação: "))
const atvs = Number(prompt("Digite a nota das atividades: "))


// PROCESSAMENTO

const nota1 = av1 * 2
const nota2 = av2 * 3
const nota3 = atvs * 1
const media_semestral = (nota1 + nota2 + nota3) / 6

// SAÍDA
if (media_semestral < 4 ){
    console.log(`${nome} obteve média de ${media_semestral} e foi reprovado(a).`)
}else if ( media_semestral >= 7){
    console.log(`${nome} obteve média de ${media_semestral} e foi aprovado(a).`)

}else if (media_semestral >= 4 && media_semestral < 7){
    console.log(`${nome} obteve média de ${media_semestral} e ficou de prova final.`)
const notaFinal = Number(prompt("Nota final: "))
const media_final = (media_semestral + notaFinal) / 2
if (media_final >=6)
    console.log(`${nome} obteve média final de ${media_final} e foi Aprovado(a) Pós-PF.`)
else {
    console.log(`${nome} obteve média de ${media_final} e foi Reprovado Pós-PF).`)

}
}
}
main()
