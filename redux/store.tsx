import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./slice/patientSlice";

export const store = configureStore({
    reducer: {
        patient: patientSlice
    }
})