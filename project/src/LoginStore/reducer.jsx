import {createStore} from 'redux'


const initialState={

    users:[],
    loggedInuse:null
}

const reducer = (state, action)=>{
    switch (action.type) {
        case 'register':
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        case 'login':
            return{
                ...state,
                user : action.payload
            }
    
        default:
            return state
    }
}
export default createStore(reducer);