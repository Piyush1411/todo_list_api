const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const Todo = require('../models/todoModel');

/*
* @desc For create Task
* @route /api/task 
* @access Public
*/

exports.createTask = asyncHandler(async (req, res) => {
    const { task, active } = req.body
    const todo = await Todo.create({ task, active });
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Task is created successfully'
    })
})

/*
* @desc For update Task
* @route /api/task 
* @access Public 
*/
exports.updateTask = asyncHandler(async (req, res) => {
    const { task, active } = req.body
    const existTask = await Todo.findOne({ _id: req.params.id });
    if (existTask) {
        existTask.task = task;
        existTask.active = active;
        const updatedTask = await existTask.save();
        res.status(200).jason({
            success: true,
            data: updatedTask,
            message: 'Task is updated successfully'
        })
    } else {
        res.status(401).jason({
            success: false,
            data: null,
            message: 'Task is not found'
        })
    }

})