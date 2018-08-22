let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Moon'

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description, choose your own fate!'
    },
    color: {
        type: String,
        enum: [
            'black',
            'gray',
            'silver',
            'blue',
            'teal',
            'orange',
            'red',
            'white'
        ],
        required: true
    },
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        required: true
    },
    starId: {
        type: ObjectId,
        ref: 'Star',
        required: true
    },
    planetId: {
        type: ObjectId,
        ref: 'Planet',
        required: true
    }
})

module.exports = mongoose.model(schemaName, schema)