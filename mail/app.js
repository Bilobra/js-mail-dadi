// console.log prova
console.log('prova')

// Chiedi all’utente la sua email,
// creare un messaggio prompt che chieda all'utente la sa mail
// salvare il risultato in una costante
const mail = prompt(' qual è la tua email ')
console.log(mail)

// creo un Array che contenga una lista di mail

const emailList = ['bra.carrozzo@gmail.com', 'mario1234@gmail.com', 'freschello89@libero.it', 'orsobruno@alice.it']
console.log(emailList)

// controlla che sia nella lista di chi può accedere,
let check

// creo un ciclo che controlli effettivamente ogni punto della mia lista array

for (let i = 0; i < emailList.length; i++){
    console.log(emailList[i])
    // se la mail inserita è uguale alla mail nella lista allora :
    // il risultato è true
    if ( emailList[i] == mail){
        check = true 
        
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
    console.log(check)

// stampo un messaggio alert se la mail è presente nel sistema 

    if (check == true){
        alert('la tua mail è presente nel sistema')
    }