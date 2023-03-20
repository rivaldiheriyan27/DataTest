import { configureStore } from '@reduxjs/toolkit'
import participantScreenReducer from "../pages/participant/slice"

export const store = configureStore({
    reducer:{
        // // foodsPackage: foodScreenReducer
        participantPackage : participantScreenReducer
    }
})