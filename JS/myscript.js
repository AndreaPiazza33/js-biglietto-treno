//variabile km
const  passengerkm = parseInt(prompt ("quanti km percorrerai?"))

//variabile età
const passengerage = parseInt(prompt("quanti anni hai?"))

//variabile sconto minorenni
const underagediscount = (20 / 100)

//variabile sconto over 65
const overagediscount = (40 / 100)

//variabile costo al km
const kmprice = (0.21)

//condizioni per lo sconto
if(passengerage < 18){
    x = underagediscount
}
else if (passengerage >= 65) {
    x = overagediscount
}
else {
    x = 1
}

//variabile prezzo finale
const ticketprice = ((kmprice * passengerkm) * x)

