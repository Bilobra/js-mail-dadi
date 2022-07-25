// console.log prova
console.log('prova')

// creo una lista array da 1 a 6 
let numeriDado = [1, 2, 3, 4, 5, 6]

// creao due variabili random x generare numeri 
let numeriHuman = Math.floor(Math.random()*numeriDado.length)+1
console.log(numeriHuman)

let numeriBot = Math.floor(Math.random()*numeriDado.length)+1
console.log(numeriBot)

// creo le condizioni di vincita
// se il tuo numero è più alto di quello del computer allora hai vinto tu
// se i vostri numeri sono uguali allora avete pareggiato
// se i numeri del pc sono più alti ha vinto lui

if ( numeriHuman > numeriBot){
    console.log('hai vinto tu!')
    alert('hai vinto tu!')
}else if ( numeriHuman == numeriBot){
    console.log('pareggio!')
    alert('Pareggio!')
}
else {
    console.log('ha vinto il computer!')
    alert('ha vinto il computer!')
}




