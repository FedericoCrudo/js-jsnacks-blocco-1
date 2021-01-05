// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeri=[];
var sommadisp=0;
//caricamento numeri 
for(var i=0;i<6;i++){
   numeri[i]=generaRandom(1,10)
   if((numeri.length-1) %2==1){
   sommadisp+=numeri[i];
   }
}
console.log(numeri);
console.log(sommadisp);


//FUNZIONI
// min e max compresi
function generaRandom(max,min){
   return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 