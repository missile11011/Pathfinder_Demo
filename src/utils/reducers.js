import {useReducer} from "redux";
import {UPDATE_STATE_CHANGE, SET_START_NODE, SET_FINISH_NODE, UPDATE_GRID} from "./actions";

const initialState = {
	stateChange: "",
	startNode: {row: 9, col: 10},
	finishNode: {row: 9, col: 39}
};
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_STATE_CHANGE:
			return {
				...state,
				stateChange: action.stateChange,
			};
		case SET_START_NODE:
			return {
				...state,
				startNode: {...action.startNode},
			};
		case SET_FINISH_NODE:
			return {
				...state,
				finishNode: {...action.finishNode},
			};
		default:
			return state;
	}
};

export default reducer;
