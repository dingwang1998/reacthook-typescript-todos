import React,{FC} from 'react';
import { ITodo } from '../typings';

import TdItem from './Item'

interface IProps{
    todolist: ITodo[];
    toggleTodo:(id:number) => void;
    removeTodo:(idw:number)=> void;
}

const TdList:FC<IProps> =({
    todolist,
    toggleTodo,
    removeTodo
})=>{
    return (
        <div>
            {
                todolist && todolist.map((todo:ITodo)=>{
                    return (
                        <TdItem
                            key={todo.id}
                            todo = { todo}
                            removeTodo = {removeTodo}
                            toggleTodo ={toggleTodo}
                        />
                    )
                })
            }
            
        </div>
    )
}

export default TdList


