const prompt = require('prompt-sync')();
function main(){

    // ENTRADA CONTA DE ENERGIA

const leitura_atual = Number(prompt("Digite o consumo atual (R$): "));
const leitura_anterior = Number(prompt("Digite o consumo do mês anterios (R$): "));

// PROCESSAMENTO
const consumo_atual = (leitura_atual - leitura_anterior)
const consumo30Kwh = consumo_atual
const consumoate100Kwh = consumo_atual * 0.59
const consumo_acimade100Kwh = consumo_atual * 0.75
const ilu_pub100 = consumoate100Kwh * 0.06
const ilu_pubacima100 = consumo_acimade100Kwh * 0.06
const icms_ate100 = consumoate100Kwh * 0.25
const pis_cofins_ate100 = consumoate100Kwh * 0.15
const icms_acima100 = consumo_acimade100Kwh * 0.25
const pis_cofins_acima100 = consumo_acimade100Kwh * 0.15
const bandeira_amarela2 = parseInt(consumo_atual / 100) * 8
const consumo_total_100 = consumoate100Kwh * 1.4 + bandeira_amarela2
const consumo_total_acima100 = consumo_acimade100Kwh * 1.4 + bandeira_amarela2



// PROCESSAMENTO

if (consumo_atual <= 30 ){
    console.log(`O usuário é isente de tarifa.`)
}else if (consumo_atual > 30 && consumo_atual <= 100){
    console.log(`Consumo: ${consumo_atual} KWh\n Valor Faturado R$ ${consumo_total_100}\n Bandeira R$: ${bandeira_amarela2}\n ICMS R$ ${icms_ate100}\n PIS/COFINS R$ ${pis_cofins_ate100}\n Taxa de Iluminação Pública R$ ${ilu_pub100}\n`)
} else (consumo_atual > 100)
    console.log(`Consumo: ${consumo_atual} KWh\n Valor Faturado R$ ${consumo_total_acima100}\n Bandeira R$: ${bandeira_amarela2}\n ICMS R$ ${icms_acima100}\n PIS/COFINS R$ ${pis_cofins_acima100}\n Taxa de Iluminação Pública R$ ${ilu_pubacima100}\n`)

}

main()

