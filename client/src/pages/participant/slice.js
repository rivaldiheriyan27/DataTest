import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { participantsData } from '../../api/participantApi'

const sliceName = 'rentalBooks'

export const participantsAll = createAsyncThunk(
    `${sliceName}/getActivity`,
    async (arg, thunkAPI) => {
      try {
        console.log(arg , "ini data slice")
        const response = await participantsData(arg.token)
        console.log(response.data, "ini hasil response")
        return thunkAPI.fulfillWithValue(response.data.data)
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
    },
)

const initialState = {
    participantPackage: [],
    isLoading: false,
    isError: '',
}

const participantSlice = createSlice({
    name : "booksData",
    initialState,
    reducers:{
        resetState: () => {
            return initialState
        },
    },
    extraReducers: {
        [participantsAll.pending]: state => {
          state.isLoading = true
        },
        [participantsAll.fulfilled]: (state, action) => {
          state.isLoading = false
          state.participantPackage = action.payload
        },
        [participantsAll.rejected]: (state, action) => {
          state.isLoading = false
          state.participantPackage = []
          state.isError = action.error.message
        },
      },
})

export const { resetState } = participantSlice.actions
export default participantSlice.reducer