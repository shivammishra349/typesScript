import {Router} from 'express'

import {todo} from '../model/todos';

let  route = Router();

let todos:todo[] = []

route.get('/', (req,res,next)=>{
    try{
        res.status(200).json({todos:todos})
    }
    catch{
        res.status(500).json({message:'internal server error'})
    }
    
})

route.post('/todo', (req,res,next)=>{
    try{
        const newTodo : todo ={
            id:new Date().toISOString(),
            text:req.body.text
        };
        todos.push(newTodo)
        res.status(200).json({data:todos})
    }
    catch{
        res.status(500).json({message:'internal server error'})
    }
    
})

route.put('/todo/:todoId', (req,res,next)=>{
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem)=> todoItem.id === tid)

    if(todoIndex >= 0){
        todos[todoIndex] = {id: todos[todoIndex].id , text:req.body.text};
        return res.status(200).json({message:'updated successfully'})
    }
    res.status(404).json({message:'element not found'})
})

route.delete('todo/:todoId',(req,res)=>{
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
    res.status(200).json({message:'deleted successfully'})
})

export default route

