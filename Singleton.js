
class Joc {
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

const MarcadorSingleton = (function () {
    let instance

    function init(jugadors) {
        function returnMarcador(){
            let ordenats = Object.entries(jugadors)
            ordenats.sort((a, b) => b[1]-a[1])

            let res = ""
            for (let [i, x] of ordenats.entries()){
                res += `${i+1}. ${x[0]} amb ${x[1]} punts\n `
            }
            return res
        }

        return {
            getMarcador: function () {
                return returnMarcador()
            }
        }
    }
    return {
        getInstance: function (jugadors) {
            if (!instance) {
                instance = init(jugadors)
            }
            return instance
        }
    }
})()


const joc1 = new Joc({
    'Tony Stark': 10,
    'Steve Rogers': 9,
    'Carol Denvers': 10
}
)
joc1.incrementPunt('Carol Denvers')
joc1.incrementPunt('Carol Denvers')
joc1.incrementPunt('Carol Denvers')
joc1.incrementPunt('Steve Rogers')
joc1.incrementPunt('Tony Stark')
joc1.getMarcador()



const joc2 = new Joc({
    'Thanos': 12,
    'Ultron': 10,
    'Loki': 9
}
)

joc2.getMarcador()


if(joc1.getMarcador === joc2.getMarcador) console.log(true)
