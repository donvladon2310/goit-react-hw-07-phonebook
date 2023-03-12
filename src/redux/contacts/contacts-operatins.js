import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/contacts";

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetch-all",
    async (_, thunkApi) => {
        try {
            const data = await api.getAllContacts();
            return data;
        }
        catch ({ response }) {
            return thunkApi.rejectWithValue(response.data)
        }
    }
)

export const fetchAddContact = createAsyncThunk(
    "contacts/add",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addContact(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data)
        }
    },
    {
        condition: ({ name }, { getState }) => {
            const { contacts } = getState();
            const normName = name.toLowerCase();
            const result = contacts.items.find(({ name }) => {
                return (name.toLowerCase() === normName)
            })
            if (result) {
                alert(`${name} is alredy in contacts`);
                return false;
            }
        }
    }
)

export const fetchDeleteContact = createAsyncThunk(
    "contacts/delete",
    async (id, { rejectWithValue }) => {
        try {
            await api.deleteContact(id);
            return id;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)

