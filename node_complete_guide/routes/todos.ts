import {Router} from 'express'

import {todo} from '../model/todos';

let  route = Router();

let todos:todo[] = []

type requestBody = {text:string};
type requestParam = {todoId:string}

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
        let body = req.body as requestBody
        const newTodo : todo ={
            id:new Date().toISOString(),
            text:body.text
        };
        todos.push(newTodo)
        res.status(200).json({data:todos})
    }
    catch{
        res.status(500).json({message:'internal server error'})
    }
    
})

route.put('/todo/:todoId', (req,res,next)=>{
    let params = req.params as requestParam
    const tid = params.todoId;

    const body = req.body as requestBody;

    const todoIndex = todos.findIndex((todoItem)=> todoItem.id === tid)

    if(todoIndex >= 0){
        todos[todoIndex] = {id: todos[todoIndex].id , text:body.text};
        return res.status(200).json({message:'updated successfully'})
    }
    res.status(404).json({message:'element not found'})
})

route.delete('/todo /:todoId',(req,res)=>{
    
    try{
        let params = req.body as requestParam;
        todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
        res.status(200).json({message:'deleted successfully'})
    }
    catch{
        res.status(500).json({message:'somthing went wrong'})
    }
   
})

export default route

