import { createContext, useContext, useReducer } from "react";
import Filter_red from "./Filter_red";
import { intialstate, Reducer } from "./Reducer";
const Context = createContext()

const Store = ({ children }) => {
    const [product, dis] = useReducer(Reducer, intialstate)
    const [filter, dis_filter] = useReducer(Filter_red, {
        sort: null
    })
    return <Context.Provider value={{ product, dis, filter, dis_filter }}>
        {children}
    </Context.Provider>
}
export const Use_r_state = () => useContext(Context)
export default Store