// Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.

//dichiarazione variabili
 var numeroIndovinare;
 var sent=false;
 var numeroU;
 var i=3;
 var min=1;
 var max=0;

//sezione selezione difficolta
var difficolata=parseInt(prompt("Inserire livello difficolata 1=1-50 2=1-100 3=1-150 :")) ;
 switch(difficolata){
   case 1:
      max=50;
      break;
   case 2:
      max=100;
      break;
   case 3:
       max=150;
       break;
 }
numeroIndovinare=generaRandom();
//caricamento numeri 
while( i>=0 && sent==false){
    numeroU= parseInt(prompt("Inserire numero:"+"||||"+"Tentativi rimasti"+"  "+(i+1)));
   if(numeroU>numeroIndovinare){
      console.log("Il valore inserito è troppo alto");
   }
   else if(numeroU<numeroIndovinare){
      console.log("Il valore inserito è troppo basso");
   }
   else if(numeroU==numeroIndovinare){
      sent=true;
     
   }
   i--;
}
//esito 
if(sent==false){
   console.log("Hai perso, il numero era:  "+numeroIndovinare);
}
else{
   console.log("Hai indovinato il numero");
}

//FUNZIONI
// min e max compresi
function generaRandom(){
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 