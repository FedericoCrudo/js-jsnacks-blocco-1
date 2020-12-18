//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
var numeri;
var numeridisp=[];

//caricamento dati
     for(var i=0; i<6;i++){
         numeri=parseInt(prompt("Inserisci numero")) ;
         if(numeri%2 !=0){
         numeridisp[i]=numeri;
        }

    }
    console.log(numeridisp);

    // // secondo metodo
    // var numeri=[];
    // for(var i=0; i<6;i++){
    //     numeri[i]=parseInt(prompt("Inserisci numero")) ;
    //     if(numeri[i]%2 == 0){
    //         numeri.splice(i);
    //     }

    // }


    //console.log(numeri);
