import { combineReducers } from "@reduxjs/toolkit";



import contactsReduser from "./contacts/contacts-slice";
import filterReduser from "./filter/filter-slice";

const rootReduser = combineReducers({
    contacts: contactsReduser,
    filter: filterReduser,
})





export default rootReduser;