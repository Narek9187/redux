import { INCREMENT, DECREMENT, GET_USERS } from "./types";
import axios from "axios";

export const INCREASE = () => ({ type: INCREMENT })

export const DECREASE = () => ({ type: DECREMENT })

const getUsers = (data) => ({
    type: GET_USERS,
    payload: data
})

export const getUsersFn = () => {
    return async({ dispatch }) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const data = response.data;
            dispatch(getUsers(data));
        } catch (e) {

        }
    }
}