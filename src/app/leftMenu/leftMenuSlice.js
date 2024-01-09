import { createSlice } from '@reduxjs/toolkit'

export const leftMenuSlice = createSlice({
    name: "leftMenu",
    initialState: {
        value: ""
    },
    reducers: {
        showLeftMenu: (state, customeClass="") => {
            if (customeClass.payload) {
                state.value = customeClass.payload
            } else {
                state.value = "sidebar-collapse"
            } 
        },
        hiddeLeftMenu: (state) => {
            state.value = ""
        },
    },
})

export const { showLeftMenu, hiddeLeftMenu } = leftMenuSlice.actions
export default leftMenuSlice.reducer
export const stateLeftMenu = (state) => state.leftMenu.value

