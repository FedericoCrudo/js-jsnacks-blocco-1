//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
//dichiarazione
var primon=parseInt(prompt("Inserisci il primo numero")) ;
var secondon=parseInt(prompt("Inserisci il secondo numero")) ;

//controllo numero maggiore
if(primon>secondon){
   document.getElementById("message").innerHTML='Il numero maggiore è: '+primon;
   }
else if(primon<secondon){
   document.getElementById("message").innerHTML='Il numero maggiore è: '+secondon;
}
else{
   document.getElementById("message").innerHTML='Non vi è un numero maggiore';
}
