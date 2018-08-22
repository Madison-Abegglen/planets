let router = require('express').Router()
let Moons = require('../models/moon')

// get all 
router.get('/', (req, res, next) => {
    Moons.find({})
        .then(moons => {
            return res.send(moons)
        })
        .catch(err => {
            return next(err)
        })
})

// get one 
router.get('/:id', (req, res, next) => {
    Moons.findById(req.params.id)
        .then(moon => res.send(moon))
        .catch(next)
})

// create one 
router.post('/:id', (req, res, next) => {
    Moons.create(req.body)
        .then(moon => res.send(moon))
        .catch(next)
})

// edit one 
router.put('/:id', (req, res, next) => {
    Moons.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => res.send({
            message: 'Success'
        }))
        .catch(next)
})

// delete one 
router.delete('/:id', (req, res, next) => {
    Moons.findByIdAndRemove(req.params.id)
        .then(() => res.send({
            message: 'Successfully removed moon'
        }))
        .catch(next)
})


module.exports = router