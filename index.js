const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Giovani Viniski";
const anoNascimento = 2005;
let anoAtual = 2024;
const idade = 19;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025;
let Idade = 20;
const NomeCompleto = " Giovani Viniski  ";
const Faculdade = " nenhuma ";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou ${NomeCompleto} meu ano de nascimento é ${anoNascimento} minha idade é ${idade}`)

const loginCerto = "Giovani";
const senhaCerta = 12345;
console.log(" ");
console.log("                              AGÊNCIA DE VIAGENS")
console.log(" ");
console.log("Faça seu login: ");

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto){
  console.log("Login Incorreto");
  login = entrada("Digite seu login novamente: ");
}

while(senha != senhaCerta){
  console.log("senha incorreta: ");
}

const listaDeViagens = new Array (
  `Dubai`,
  `Paris`,
  `Miami`,
  `Chile`,
  `Toquio`
);
console.log(listaDeViagens)

console.log( listaDeViagens [4])
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens);

var nomeComprador = entrada (" qual é seu  nome? ");
var idadeComprador = entrada ("qual é sua idade? ");

if(idadeComprador < 18){
  console.log(`olá
  ${nomeComprador} nao podemos vender nossas passagens já que sua idade é ${idadeComprador} anos`);
}
if(idadeComprador >= 18){
  console.log("Que legal agora você pode comprar nossas passagens!");
}