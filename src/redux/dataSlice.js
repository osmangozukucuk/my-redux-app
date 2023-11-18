import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: [],
}   


export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: 0,
  },
  reducers: {

  createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { createDataFunc } = dataSlice.actions

export default dataSlice.reducer