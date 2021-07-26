module.exports = MarcadorSingleton = (function () {
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
