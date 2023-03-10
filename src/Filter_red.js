const Filter_red = (state, action) => {
    switch (action.type) {
        case "SORT_FILTER":
            return {
                ...state,
                sort: action.payload
            }
        default:  return state
            break;
    }
}

export default Filter_red