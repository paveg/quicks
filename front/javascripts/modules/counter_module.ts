import { createSlice } from '@reduxjs/toolkit'

const counterModule = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
    },
})

export default counterModule
