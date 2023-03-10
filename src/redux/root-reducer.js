import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReduser from "./contacts/contacts-slice";
import filteredReduser from "./filter/filter-slice";

const rootReduser = combineReducers({
    contacts: contactsReduser,
    filter: filteredReduser,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReduser)

export default persistedReducer;