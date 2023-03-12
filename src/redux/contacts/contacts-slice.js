import { createSlice } from "@reduxjs/toolkit";
import { fetchAllContact, fetchAddContact, fetchDeleteContact } from "./contacts-operatins";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllContact.pending, (store) => {
                store.isLoading = true;
            })
            .addCase(fetchAllContact.fulfilled, (store, { payload }) => {
                store.isLoading = false;
                store.items = payload;
            })
            .addCase(fetchAllContact.rejected, (store, { payload }) => {
                store.isLoading = false;
                store.error = payload;
            })
            .addCase(fetchAddContact.pending, (store) => {
                store.isLoading = true;
            })
            .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
                store.isLoading = false;
                store.items.push(payload);
            })
            .addCase(fetchAddContact.rejected, (store, { payload }) => {
                store.isLoading = false;
                store.error = payload;
            })
            .addCase(fetchDeleteContact.pending, (store) => {
                store.isLoading = true;
            })
            .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
                store.isLoading = false;
                const index = store.items.findIndex(item => item.id === payload)
                store.items.splice(index, 1);
            })
            .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
                store.isLoading = false;
                store.error = payload;
            })
    }
})


export default contactsSlice.reducer;