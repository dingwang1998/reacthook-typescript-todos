import React, { FC, ReactElement } from 'react'
import { ITodo } from '../typings'

interface IProps{
    todo: ITodo;
    toggleTodo:(id:number) => void;
    removeTodo:(idw:number)=> void;
}

const TdItem:FC<IProps> = ({
    todo,
    toggleTodo,
    removeTodo
}):ReactElement=>{
    const { id, content, complete} = todo
    return (
        <div>
            <input type="checkbox"
            checked={complete}
            onChange={()=>toggleTodo(id)}
            />
            <span
                style={{textDecoration: complete? 'line-through':'none'}}
            >{content}</span>
            <button onClick={()=>removeTodo(id)}>删除</button>
        </div>
    )
}

export default TdItem