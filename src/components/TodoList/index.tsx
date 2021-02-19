import React, { FC, ReactElement, useCallback, useReducer, useEffect } from 'react'

import TdInput from './Input'
import TdList from './List'

import { ITodo,IState, ACTION_TYPE } from './typings'
import { todoReducer } from './reducer'

// const initialState: IState = {
//     todolist:[]
// }

function init(initTodoList:ITodo[]):IState {
    return {
        todolist:initTodoList
    }
}

const TodoList:FC = (): ReactElement=>{
    // const [todolist, settodolist] = useState<ITodo[]>([])
    const [state, dispatch] = useReducer(todoReducer, [], init)

    const addTodo = useCallback(( todo:ITodo ):void =>{
        // settodolist(todolist => [...todolist, todo])
        dispatch({
            type:ACTION_TYPE.ADD_TODO,
            payload:todo
        })
    },[])
    useEffect(() => {
        console.log(state.todolist)
    }, [state.todolist])
    const removeTodo = useCallback((id:number):void=>{
        dispatch({
            type:ACTION_TYPE.REMOVE_TODO,
            payload:id
        })
    },[])
    const toggleTodo = useCallback((id:number):void=>{
        dispatch({
            type:ACTION_TYPE.TOGGLE_TODO,
            payload:id
        })
    },[])
    return(
        <div>
            <TdInput 
              addTodo = {addTodo}
              todolist = {state.todolist}
            />
            <TdList
                todolist = {state.todolist}
                removeTodo = {removeTodo}
                toggleTodo = {toggleTodo}
            />
        </div>
    )
}

export default TodoList