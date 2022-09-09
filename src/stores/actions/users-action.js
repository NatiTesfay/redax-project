
import { ADD_USERS, GET_USERS_BY_ID, UPDATE_USERS, DELETE_USERS } from '../types/users-types'

export const addUsers = (user) => {
    return { type: ADD_USERS,payload:user}
}

export const getUsersById = () => {
    return { type: GET_USERS_BY_ID }
}


export const updateUsers = () => {
    return { type: UPDATE_USERS }
}

export const deleteUsers = () => {
    return { type: DELETE_USERS }
}
