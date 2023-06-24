import express from 'express';
const router = express.Router();

import {createTask, updateTask, deleteTask, getSingleTask, getAllTasks} from '../controllers/todoController.js';

router.route('/').post(createTask);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);
router.route('/:id').get(getSingleTask);
router.route('/').get(getAllTasks);

//module.exports = router;
export default router;