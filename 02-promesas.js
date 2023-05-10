function sumarUnoPromesa(numero) {
    var promesa = new Promise(function(resolve,reject){
        if (numero>=7) {
            reject('Número muy grande')
            return;
        }
        setTimeout(function(){
            resolve (numero+1);
        },200)
    } );

    return promesa;
}

//console.log(sumarUnoPromesa(5)) ;

/*sumarUnoPromesa(5).then(function(nuevoValor){
    console.log(nuevoValor);
    sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
        console.log(nuevoValor);
        sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
            console.log(nuevoValor);
        })
    })
})*/

//.then atiende una promesa

sumarUnoPromesa(5)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch ( (err)=>{
    console.log(err);
})