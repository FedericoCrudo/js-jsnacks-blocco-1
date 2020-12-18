//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while
var numeri;
var somma=0;
//caricamento dati
//     for(var i=0; i<5;i++){
//         numeri=parseInt(prompt("Inserisci numero")) ;
//         somma+=numeri;
    
//     }
// console.log(numeri);
// console.log(somma);
var i=0;
while(i<5){
    numeri=parseInt(prompt("Inserisci numero"));
     somma+=numeri;
     i++;
 
    }

 console.log(somma);