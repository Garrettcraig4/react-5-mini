//constints  || action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//action creators

export function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount
  };
}

export function decrement(amount) {
  return {
    type: DECREMENT,
    payload: amount
  };
}

//initialstate
let initialState = {
  currentValue: 0
};
//reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        currentValue: state.currentValue + action.payload
      });
  }
  switch (action.type) {
    case DECREMENT:
      return Object.assign({}, state, {
        currentValue: state.currentValue - action.payload
      });
    default:
      return state;
  }
}
