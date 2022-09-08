import {ADD_USERS,GET_USERS_BY_ID,UPDATE_USERS,DELETE_USERS} from '../types';


export const Users = ({...users},action)=>{
    switch (action.type) {
        case ADD_USERS:
            return [...users,action.payload] 
        case GET_USERS_BY_ID:
            return [...users] ;
        case UPDATE_USERS:
            let newArray = users.filter((userItem)=>{
                userItem.id==action.payload
            })
            users[users.indexOf(newArray[0])]=action.payload
            return [...users] ;
        case DELETE_USERS:
            newArray = users.filter((userItem)=>{
                userItem.id == action.payload
            })
            return [...newArray];
        default:
            return {users};
    }
}
