const prompt = require('prompt-sync')();
function main(){

const media_14dias = Number(prompt("Média de Infectados há 14 dias: "))
const media_hoje = Number(prompt("Média de Infectados hoje: "))
const media_movel = (media_hoje / media_14dias) * 100
const variacao = parseInt(media_movel - 100)

// Variação na média de casos de COVID
if ( media_movel > 115){
    console.log(`Os casos de COVID variaram ${variacao} % e estão em alta.`)
}else if (media_movel < 85){
    console.log(`Os casos de COVID variaram ${variacao} % e estão em queda.`)
}else{
    console.log(`Os casos de COVID variaram ${variacao}% e estão em estabilidade.`)
}

}

main()

    