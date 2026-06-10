let pessoas = []

let votosA = 0
let votosB = 0 
let votosC = 0

function adicionar() {

let nome = document.getElementById("nome").value
let idade = Number(document.getElementById("idade").value)

if (nome === "" || idade <=0){
    
alert("Por favor preencha todos os campos corretamente")
return
}

pessoas.push({nome: nome, idade: idade})

let item = document.createElement("li")
item.innerHTML = nome + " - " + idade + " anos"

document.getElementById("lista").appendChild(item)

document.getElementById('nome').value = ""
document.getElementById('idade').value = ""
}

function analisar() {
    
    if (pessoas.length === 0){
        alert("Não há pessoas cadastradas para análise.")
        return
    }
let resultado = ""
let aptos = 0
let somaIdades = 0
let menores =""
let maiores=""
for (let i = 0; i < pessoas.length; i++){

    let nome = pessoas[i].nome
let idade = pessoas[i].idade

somaIdades += idade

if (idade < 18){
menores += nome + " - " + idade + " anos<br>"
}

else{
    maiores += nome +"- " + idade + " anos<br>"
}

if (idade < 16){
resultado += nome + " - Não pode votar <br>"
}

else if (idade < 18 || idade >= 70){
resultado += nome + " - Voto facultativo <br>"
aptos++
}

else{
resultado += nome + " - Voto obrigatório <br>"
aptos++
}
}
    
let media = somaIdades / pessoas.length

resultado += "<br><strong>Media das idades: " + media.toFixed(1) + "anos</strong>"

resultado += "<br><strong>Pessoas aptas a votar: " + aptos + "</strong>"

resultado += "<br><h3>Menores de 18 anos</h3>"

if (menores === ""){
    resultado += "Nenhuma pessoa menor de 18 anos. <br>"
}

else{
    resultado += menores
}

resultado += "<h3>Maiores de idade</h3>"
if( maiores === "" ){
    resultado += "Nenhuma pessoa maior de idade.<br>"
}
else{
    resultado += maiores
}

document.getElementById("resultado").innerHTML = resultado

}