import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

interface PatientState {
    patientDetails: boolean| object
}


const initialState: PatientState = {
    patientDetails: false
}

export const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        // Actions
        selectedPatient: (state, action:PayloadAction<false | object>)  => {
            state.patientDetails = action.payload
        }
    }
})


export const { selectedPatient } = patientSlice.actions;


export default patientSlice.reducer;