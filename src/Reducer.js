export const intialstate = {
    cart: [],
    like: [],
    searchKey: ""
}

export const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = state.cart.find((i) => i.id === action.payload.id)
            if (item) {
                return {
                    ...state,
                    cart: state.cart.map((i) => i.id === action.payload.id
                        ? {
                            ...i,
                            qty: i.qty + 1
                        } : i)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, qty: 1 }]
                }
            }

            break;
        case "ADD_TO_LIKE":
            const data = state.like.find((i) => i.id === action.payload.id)
            if (data) {
                return {
                    ...state,
                    like: state.like.map((i) => i.id === action.payload.id)
                }
            }
            else {
                return {
                    ...state,
                    like: [...state.like, { ...action.payload }]
                }
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((i) => i.id !== action.payload.id)
            }
            break;
        case "REMOVE_FROM_LIKE":
            return {
                ...state,
                like: state.like.filter((i) => i.id !== action.payload.id)
            }
            break;
        case "SEARCH":
            return {
                ...state,
                searchKey: action.payload
            }
            break;
        default:
            return state
    }

}
