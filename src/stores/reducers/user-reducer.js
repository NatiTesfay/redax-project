import {ADD_USERS,GET_USERS_BY_ID,UPDATE_USERS,DELETE_USERS} from '../types';


export const Users = ({...users},action)=>{
    switch (action.type) {
        case ADD_USERS:
            return [...users,action.payload] 
        case GET_USERS_BY_ID:
            return;
        case UPDATE_USERS:
            return;
        case DELETE_USERS:
            return;
        default:
            return {users};
    }
}
