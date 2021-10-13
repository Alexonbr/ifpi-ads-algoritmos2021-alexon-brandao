// Questão 01:

/* Classe é uma representação da estrutura que descreve um objeto.
Já objeto é materialização de uma classe através de atributos (características) e métodos (ações) próprios,
que interagem entre si durante a execução do programa.
Geralmente, um objeto é uma representação de algo do mundo real.
Abaixo temos exemplos de classe celular e objeto celular, respectivamente:
classe Celular {
   modelo: String
   camera fronta: String
   memoriaInterna: String
   tipo: String
   marca: String
}
Objeto do tipo celular
   Modelo: iPhone 13
   Câmera frontal: 12mp
   Memória Interna: 256gb
   Tipo: Smartphone
   Marca: Apple
*/

// Questão 02:

/* Atributos são variáveis ​​internas da classe, muitas vezes, o conjunto de atributos de uma classe é denominado "estado" da classe.
Essas variáveis ​​podem ser qualquer tipo de texto de tipo (string, número, booleano, etc) ou também podem ser outros objetos.
Já o métodos consiste no comportamento que uma classe pode ter.
Em outras palavras, eles são pedaços de código que podem ser executados.
Esses métodos são internos à classe e um método pode acessar o estado de sua classe (seus atributos).
Tomando por exemplo uma pessoa, podemos ter como atributo o seu nome, altura, peso, CPF, etc. Como método podemos
atribuir a ação de comer, correr, cantar, dormir, dentre outras.
*/
/* Questão 03:
Peso - importante - sistema de uma academia
Peso - não importante - sistema de uma oficina

Tipo de CNH - importante - sistema de uma empresa de transporte
Tipo de CNH - não importante - sistema de uma loja de roupas

Tipo sanguíneo - importante - sistema de um hospital
Tipo sanguíneo - não importante - sistema de um hotel

Habilidade destra - importante - sistema de uma banca examinadora de concurso
Habilidade destra - não importante - sistema de um banco

Percentual de gordura - importante - sistema de uma clínica de estética
Percental de gordura - não importante - sistema de uma escola

Saldo em conta - importante - sistema de um banco
Soldo em conta - não importante - sistema de uma empresa de transporte aéreo

Etnia - importante - sistema do IBGE
Etnia - não importante - sistema de uma revendedora de veículos

 Questão 04:

a) Não seria interessante um obejeto "conta" possuir um atributo "pessoa", pois a pessoa (atributo) pode possuir mais de uma conta bancária (objeto).
b) De modo contrário ao ítem a, seria interessante uma pessoa possuir mais de uma conta como atributo.
Questão 05:

Podemos identificar como objetos de um sistema de controle acadêmico o calendário acadêmico,
o boletim, o histórico escolar, a matriz curricular e o diário. */

/* Questão 06
Em jogo de corrida de carros podemos citar como objetos os veículo, com atributos cor, ano, número de portas e tipo de combustível, entre outras.
Além disso, tem os comportamentos acelerar, frear, virar à esquerda e outros. Podemos tambpem destacar como objeto o piloto, com atributo idade, cor,
nacionalidade, etc, e como método perder, vencer, bater.

*/

// Questão 07:

class Retangulo {
l1: number = 0;
l2: number = 0;

calculaPerimetro(): number {
return (this.l1 * 2) +  (this.l2 * 2);

}
}
let r: Retangulo;
r = new Retangulo();
r.l1 = 20;
r.l2 = 10;
console.log("O perímetro de retângulo é: " + r.calculaPerimetro());

//Questão 08:

class Circulo {
r: number = 0;
calcularArea(): number{
  return  Math.pow(this.r, 2) * Math.PI;
}
calcularPerimetro(): number{
  return Math.PI * 2 * this.r;
}
}
let c: Circulo;
c = new Circulo();
c.r = 5;
console.log("A área do círculo é: " + c.calcularArea());
console.log("O perímetro do círculo é: " + c.calcularPerimetro());

// Questão 09:

class SituacaoFinanceira {
  valorCredito: number = 0;
  valorDebito: number = 0;
  saldo: number = 0;

  calcularSaldo(): number{
    return this.saldo = this.valorCredito - this.valorDebito;
  }
}
let s: SituacaoFinanceira;
s = new SituacaoFinanceira();
s.valorCredito = 200;
s.valorDebito = 100;
console.log("O cliente possui R$" + s.calcularSaldo());
