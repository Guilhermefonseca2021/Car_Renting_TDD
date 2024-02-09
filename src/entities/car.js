const Base = require('./base/base')

exports = class Car extends Base {
    constructor({ id, name, available, releaseYear, gasAvailable }) {
        super({ id, name })

        this.releaseYear = releaseYear
        this.available = available 
        this.gasAvailable = gasAvailable
    }
}