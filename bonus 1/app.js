console.log('prova bonus')

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(numberList)
// senza ciclo con .slice 
const Listnumber = numberList.slice(-5)
console.log(Listnumber)


// non funziona
// con ciclo for 
// for (let i = numberList.length; i < numberList.length; i--){
//     console.log(numberList[i])
// }