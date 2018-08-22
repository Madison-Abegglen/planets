let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Star'

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
            'red',
            'yellow',
            'orange',
            'blue',
            'white',
            'black'
        ],
        required: true
    },
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy',
        required: true
    }
})


module.exports = mongoose.model(schemaName, schema)