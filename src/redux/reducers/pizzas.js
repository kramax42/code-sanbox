import { SET_PIZZAS } from "../action_types";

const initialState = {
  items: [],
  isLoaded: false,
};

export default function pizzas(state = initialState, action) {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
}
