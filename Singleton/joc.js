const MarcadorSingleton = require('./marcador')
module.exports = class Joc {
    constructor(jugadors) {
        this.jugadors = jugadors
    }
    incrementPunt(jugador) {
        this.jugadors[jugador]++
    }
    getMarcador() {
        const marcador = MarcadorSingleton.getInstance(this.jugadors)
        console.log(marcador.getMarcador())
    }

}
