import { createSlice } from "@reduxjs/toolkit";
import { fetchAllContactsLoading, fetchAllContactsSuccess, fetchAllContactsError, fetchAddContactsLoading, fetchAddContactsSuccess, fetchAddContactsError, fetchDeleteContactsLoading, fetchDeleteContactsSuccess, fetchDeleteContactsError } from "./contacts-actions";

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        [fetchAllContactsLoading]: (store) => {
            store.isLoading = true;
        },
        [fetchAllContactsSuccess]: (store, { payload }) => {
            store.isLoading = false;
            store.items = payload;
        },
        [fetchAllContactsError]: (store, { payload }) => {
            store.isLoading = false;
            store.error = payload;
        },
        [fetchAddContactsLoading]: (store) => {
            store.isLoading = true;
        },
        [fetchAddContactsSuccess]: (store, { payload }) => {
            store.isLoading = false;
            store.items.push(payload);
        },
        [fetchAddContactsError]: (store, { payload }) => {
            store.isLoading = false;
            store.error = payload;
        },
        [fetchDeleteContactsLoading]: (store) => {
            store.isLoading = true;
        },
        [fetchDeleteContactsSuccess]: (store, { payload }) => {
            store.isLoading = false;
            const index = store.items.findIndex(item => item.id === payload)
            store.items.splice(index, 1);
        },
        [fetchDeleteContactsError]: (store, { payload }) => {
            store.isLoading = false;
            store.error = payload;
        }

    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;