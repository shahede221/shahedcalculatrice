function valider() {
    var nombre1 = parseInt(document.getElementById("nombre1").value);
    var nombre2 = parseInt(document.getElementById("nombre2").value);
    var operation = document.getElementById("operation").value;
    var result;
    var resultav = document.getElementById("resultat");

    switch (operation) {
        case "somme":
            result = somme(nombre1, nombre2);
            break;
        case "difference":
            result = difference(nombre1, nombre2);
            break;
        case "produit":
            result = produit(nombre1, nombre2);
            break;
        case "division":
            result = division(nombre1, nombre2);
            break;
        default:
            result = "Opération non reconnue";
    }

    resultav.value = result;
}

function somme(nombre1, nombre2) {
    return nombre1 + nombre2;
}

function difference(nombre1, nombre2) {
    return nombre1 - nombre2;
}

function produit(nombre1, nombre2) {
    return nombre1 * nombre2;
}

function division(nombre1, nombre2) {
    if (nombre2 !== 0) {
        return nombre1 / nombre2;
    } else {
        return "Division par zéro";
    }
}

function binaire() {
    var decimal = parseInt(document.getElementById("decimal").value);
    var binaire = decimal.toString(2);
    document.getElementById("binaire").value = binaire;
}
