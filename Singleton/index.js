const Joc = require('./joc')

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


if(joc1.getMarcador === joc2.getMarcador) console.log(true)
