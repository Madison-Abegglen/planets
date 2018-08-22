let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Planet'

let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description, choose your fate!'
    },
    color: {
        type: String,
        enum: [
            'black',
            'indigo',
            'purple',
            'blue',
            'teal',
            'green',
            'orange',
            'yellow',
            'red',
            'white'
        ],
        required: true
    },
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        require: true
    },
    starId: {
        type: ObjectId,
        ref: 'Star',
        required: true
    }
})


module.exports = mongoose.model(schemaName, schema)