const express = require('express');
const router = express.Router();

const {createTask, updateTask} = require('../controllers/todoController');

router.route('/').post(createTask);
router.route('/:id').put(updateTask);

module.exports = router;