const Topic = require('./Topic')
const User = require('./User')


// Creació temes
const Node = new Topic()
const React = new Topic()

// Temes escolten 
Node.listen()
React.listen()


// Creació usuaris
const user1 = new User('User1')
const user2 = new User('User2')
const user3 = new User('User3')


// Subscripcions d'usuaris a temas
Node.subscribe(user1)
Node.subscribe(user2)
React.subscribe(user1)
React.subscribe(user3)


// Publicacions que fan usuaris
Node.publish(user1, 'hola node')
React.publish(user1, 'hola react')
Node.publish(user1, 'node > PHP')
React.publish(user3, 'React > Angular')
