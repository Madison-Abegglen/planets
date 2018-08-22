let mongoose = require('mongoose')
const connectionString = 'mongodb://studentOne:student1@ds018498.mlab.com:18498/planets'
let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log('DATABASE ERROR: ', error)
})

connection.once('open', () => {
    console.log('Connected to Database')
})