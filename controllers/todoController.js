const mongoose = require('mongoose');
const asyncHandeler = require('express-async-handler');

const Todo = require('../models/todoModel');

/*
* @desc For create Task
* @route /api/task 
* @access Public
*/

exports.createTask = asyncHandeler(async (req, res) => {
    const {task, active} = req.body
    const todo = await Todo.create({task, active});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Task is created successfully'
    })
})