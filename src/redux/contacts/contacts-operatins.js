import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/contacts";

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetch-all",
    async (_, thunkApi) => {
        try {
            const data = await api.getAllContacts();
            console.log("fetchAllContacts data: ", data);
            return data;
        }
        catch ({ response }) {
            console.log("fetchAllContacts error: ", response.data);
            return thunkApi.rejectWithValue(response.data);
        }
    }
);

export const fetchAddContact = createAsyncThunk(
    "contacts/add",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addContact(data);
            console.log("fetchAddContact result: ", result);
            return result;
        }
        catch ({ response }) {
            console.log("fetchAddContact error: ", response.data);
            return rejectWithValue(response.data);
        }
    },
    {
        condition: (name, { getState }) => {
            const { contacts } = getState();
            const normName = name.toLowerCase();
            const result = contacts.items.find(({ name }) => {
                return (name.toLowerCase() === normName);
            });
            if (result) {
                console.log(`${name} is already in contacts`);
                alert(`${name} is already in contacts`);
                return false;
            }
        }
    }
);

export const fetchDeleteContact = createAsyncThunk(
    "contacts/delete",
    async (id, { rejectWithValue }) => {
        try {
            await api.deleteContact(id);
            console.log("fetchDeleteContact id: ", id);
            return id;
        }
        catch ({ response }) {
            console.log("fetchDeleteContact error: ", response.data);
            return rejectWithValue(response.data);
        }
    }
);