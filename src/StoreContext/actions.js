import { ADD_PRODUCT, SET_TOP, SET_TOTAL, ADD_TO_CART } from "./constants";
export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload
    }
}
export const setTop = (payload) => {
    return {
        type: SET_TOP,
        payload
    }
}
export const setTotal = (payload) => {
    return {
        type: SET_TOTAL,
        payload
    }
}
export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}
