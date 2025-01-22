/**
 *  APP FLEX
 *  @autor Gabriela Queiroz
 */
// Declaação de variáveis
let etanol,gasolina

function calcular() {
    // Entradas de dados
    etanol = frmFlex.inputEtanol.value
    gasolina = frmFlex.inputGasolina.value
    //console.log(etanol)
    //console.log(gasolina)
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src="img/etanol.png"
    } else {
        document.getElementById('status').src="img/gasolina.png"
    }
    
    return false
}