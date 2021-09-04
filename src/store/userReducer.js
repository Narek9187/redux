import { GET_USERS } from "./types";

const InitialState = {
  users: []
}

export const userReducer = (state = InitialState, action) => {
  switch(action.type){
    case GET_USERS:
      return {users: action.payload};
    default:
      return state;
  }
}