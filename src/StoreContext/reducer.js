import { ADD_PRODUCT, SET_TOP, SET_TOTAL, ADD_TO_CART } from "./constants"
const initState = {
    isTop: true,
    total: 0,
    inCart: [],
    products: [],
}

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case ADD_PRODUCT:
            newState = {
                ...state,
                products: [...action.payload]
            }
            break;
        case SET_TOP:
            newState = {
                ...state,
                isTop: action.payload
            }
            break;
        case SET_TOTAL:
            newState = {
                ...state,
                total: action.payload
            }
            break;
        case ADD_TO_CART:
            let cart = [...state.inCart];
            newState = {
                ...state,
                inCart: [...cart, action.payload]
            }
            break;
        default:
            throw new Error(`Invalid action ${action.type}`)

    }
    return newState;
}

export { initState }
export default reducer;