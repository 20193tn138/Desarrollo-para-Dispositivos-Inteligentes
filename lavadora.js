const lavadora = {

    power : false,
    nivel_agua : int,
    nivel_lavado : int,
    tiempo_lavado : int,
    enjuage : int,
    lavar : false
}
    
function power( ) {
    if (lavadora.power) {
        lavadora.power = false;
    } else {
        lavadora.power = true;
    }
}

function name(params) {
    
}