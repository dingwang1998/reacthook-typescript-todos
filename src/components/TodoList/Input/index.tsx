import React, { useRef,FC, ReactElement } from 'react'

import { ITodo } from '../typings';

interface IProps {
    addTodo:(todo: ITodo)=> void;
    todolist: ITodo[];
}

const TdInput:FC<IProps> = ({
    addTodo,
    todolist
}): ReactElement=>{
    const inputRef = useRef<HTMLInputElement>(null);
    const addItem = ():void =>{
        const val:string = inputRef.current!.value.trim();
        if(val.length){
            const isExist = todolist.find(todo =>todo.content === val)
            if(isExist){
                alert('已经在该项')
                return; 
            }
            addTodo({
                id: new Date().getTime(),
                content:val,
                complete:false
            })
            inputRef.current!.value = ''
        }
        
    }
    return (
        <div>
            <input type="text" placeholder="请输入代办" ref={inputRef}/>
            <button onClick={addItem}>增加</button>
        </div>
    )
}

export default TdInput