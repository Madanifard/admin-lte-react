import { createSlice } from '@reduxjs/toolkit'

export const leftMenuSlice = createSlice({
    name: "leftMenu",
    initialState: {
        value: ""
    },
    reducers: {
        showLeftMenu: (state) => {
            // console.log(newValue, "===========================");
            state.value = "ADD CLEASS"
        },
        hiddeLeftMenu: (state) => {
            state.value = ""
        },
    },
})

export const { showLeftMenu, hiddeLeftMenu } = leftMenuSlice.actions
export default leftMenuSlice.reducer
export const stateLeftMenu = (state) => state.leftMenu.value

