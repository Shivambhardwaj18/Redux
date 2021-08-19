import { L_D, L_T, R_T, R_D } from "./ActionTypes"

const intialState = {
    leftTop: "Left Top",
    leftDown: "Left Down",
    rightTop: "Right Top",
    rightDown: "Right Down",
};

export const stateReducer = (state = intialState, action) => {
    switch (action.type) {
        case L_T:
            return {
                ...state,
                leftTop: action.value
            }
        case L_D:
            return {
                ...state,
                leftTop: action.value,
                leftDown: action.value
            }
        case R_T:
            return {
                ...state,
                rightTop: action.value,
                leftDown: action.value,
                leftTop: action.value
            }
        case R_D:
            return {
                ...state,
                rightDown: action.value,
                rightTop: action.value,
                leftDown: action.value,
                leftTop: action.value
            }
        case "reset":
            return {
                ...state,
                leftTop: "Left Top",
                leftDown: "Left Down",
                rightTop: "Right Top",
                rightDown: "Right Down",
            }
        default:
            return {
                ...state
            }
    }

}