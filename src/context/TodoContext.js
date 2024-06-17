import React, { createContext } from "react";
import { useContext } from "react";


export const TodoContext = createContext({
    todos:[{
        id:1,
        todoName:"Todo",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    removeTodo:(id)=>{},
    toggleTodo:(id)=>{}
})
export const TodoContextProvider = TodoContext.Provider;
export const useTodo = ()=>{
   return useContext(TodoContext);
}

