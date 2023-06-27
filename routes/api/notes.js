const express = require('express')
const router = express.Router()
const notesController = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', notesController.index)
router.get('/:id', notesController.show)
router.post('/', notesController.create)
router.patch('/:id', notesController.update)
router.delete('/:id', notesController.noteDelete)

module.exports = router
