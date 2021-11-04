import { createStore } from "redux";
import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from "../../types";

function reducer(state = [], action) {
  let reminder = null;

  if (action.type === ADD_REMINDER) {
    reminder = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];

    console.log("from reducer", reminder);
    return reminder;
  } else if (action.type === REMOVE_REMINDER) {
    reminder = state.filter((reminder) => reminder.id !== action.id);

    return reminder;
  }else if (action.type === CLEAR_REMINDER){

    reminder =[];
    return reminder;

  } else {
    return state;
  }
}

let store = createStore(reducer);

export default store;
