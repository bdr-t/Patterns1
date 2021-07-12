const jugadors = {}
jugadors['Tony Stark'] = 10
jugadors['Steve Rogers'] = 9
jugadors['Carol Denvers'] = 11

const Singleton = (function () {
    let instance

    function init() {
        function returnGuanyador() {
            let max = 0
            let guanyador
            for (jugador in jugadors) {
                if (jugadors[jugador] > max) {
                    max = jugadors[jugador]
                    guanyador = jugador
                }
            }
            return `${guanyador} amb ${max} punts`
        }

        return {
            getResultat: function () {
                return returnGuanyador()
            }
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init()
            }
            return instance
        }
    }
})()

const resultat = Singleton.getInstance()
const a = Singleton.getInstance()
console.log(resultat.getResultat())







