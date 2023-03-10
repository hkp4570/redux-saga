import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Item = {
    id: number,
    name: string,
}
interface studentState {
    studentData: Item[]
}

const initialState = { studentData: [] } as studentState

const studentState = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentData(state, action: PayloadAction<Item[]>) {
            state.studentData = action.payload;
        },
    },
})

export const { setStudentData } = studentState.actions
export default studentState.reducer
