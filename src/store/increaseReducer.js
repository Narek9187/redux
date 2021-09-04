import { INCREMENT, DECREMENT } from "./types";

const InitialState = {
  count: 0
}

export const increaseReducer = (state = InitialState, action) => {
  switch(action.type){
    case INCREMENT:
      return {count: state.count + 1};
    case DECREMENT:
      return {count: state.count - 1};
    default:
      return state;
  }
}