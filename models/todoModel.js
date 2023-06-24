import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo;