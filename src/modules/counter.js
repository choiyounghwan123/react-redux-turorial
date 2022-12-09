import { createAction, handleAction } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const initialState = { number: 0, diff: 1 };

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const counter = handleAction(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
