let router = require('express').Router()
let Planets = require('../models/planet')

// get all 
router.get('/', (req, res, next) => {
    Planets.find({})
        .then(planets => {
            return res.send(planets)
        })
        .catch(err => {
            return next(err)
        })
})

// get one 
router.get('/:id', (req, res, next) => {
    Planets.findById(req.params.id)
        .then(planet => res.send(planet))
        .catch(next)
})

// create one 
router.post('/', (req, res, next) => {
    Planets.create(req.body)
        .then(planet => req.send(planet))
        .catch(next)
})

// edit one
router.put('/:id', (req, res, next) => {
    Planets.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => res.send({
            message: 'Success'
        }))
        .catch(next)
})

// delete one
router.delete('/:id', (req, res, next) => {
    Planets.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: 'Successfully removed planet'
        }))
        .catch(next)
})


module.exports = router 