import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface numberState {
    value: number
}

const initialState = { value: 0 } as numberState

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        addNumber(state) {
            state.value++
        },
        addRandomNumber(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
        asyncAdd(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
    },
})

export const { addNumber,addRandomNumber, asyncAdd, decrement, incrementByAmount } = numberSlice.actions
export default numberSlice.reducer
