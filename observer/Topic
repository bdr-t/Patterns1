const EventEmitter = require("events").EventEmitter;

module.exports = class Topic extends EventEmitter {
    constructor() {
        super()
        this.observers = [];
        this.articles = []
    }
    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => observer !== obs);
    }

    listen() {
        this.on('article', () => this.notify(this.observers, this.articles))
    }

    publish({ user }, article) {
        console.log('\x1b[36m%s\x1b[0m', `${user} ha publicat`, "\x1b[33m", article)
        this.articles.push([user, article])
        this.emit('article')
    }

    notify(observers, articles) {
        for (let x of observers) {
            x.imprimir(articles)
        }
    }

}
