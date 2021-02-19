
import { ACTION_TYPE, IAction, IState, ITodo } from "./typings";

function todoReducer(state:IState, action :IAction):IState{
    const { type, payload} = action

    switch(type){
        case ACTION_TYPE.ADD_TODO:
            return{
                ...state,
                todolist: [ ...state.todolist, payload as ITodo]
            }
        case ACTION_TYPE.REMOVE_TODO:
            return{
                ...state,
                todolist:state.todolist.filter(todo => todo.id !== payload)
            }
        case ACTION_TYPE.TOGGLE_TODO:
            return {
                ...state,
                todolist: state.todolist.map(todo=>{
                    return todo.id === payload ? 
                    {
                        ...todo,
                        complete: !todo.complete
                    }:{
                        ...todo
                    }
                })
            }
        default:
            return state
    }

}


export {
    todoReducer
}