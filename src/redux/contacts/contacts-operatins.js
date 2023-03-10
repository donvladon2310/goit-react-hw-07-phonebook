import * as api from "../../shared/services/contacts";
import * as actions from "./contacts-actions"


export const fetchAllContacts = () => {
    const func = async (dispatch) => {
        try {
            dispatch(actions.fetchAllContactsLoading());
            const data = await api.getAllContacts();
            dispatch(actions.fetchAllContactsSuccess(data));
        }
        catch ({ response }) {
            dispatch(actions.fetchAllContactsError(response.data.message));
        }
    }

    return func;
}

const isDublicate = (contacts, { name }) => {
    const normName = name.toLowerCase();
    const duble = contacts.find(({ name }) => {
        return (name.toLowerCase() === normName)
    })
    return Boolean(duble)
}

export const fetchAddContact = (data) => {
    const func = async (dispatch, getState) => {
        try {
            const { contacts } = getState();
            if (isDublicate(contacts.items, data)) {
                return alert(`${data.name} is alredy in contacts`);
            }
            dispatch(actions.fetchAddContactsLoading());
            const result = await api.addContact(data);
            dispatch(actions.fetchAddContactsSuccess(result));
        }
        catch ({ response }) {
            dispatch(actions.fetchAllContactsError(response.data.message));
        }
    }
    return func;
}

export const fetchDeleteContact = (id) => {
    const func = async (dispatch) => {
        try {
            dispatch(actions.fetchDeleteContactsLoading());
            await api.deleteContact(id);
            dispatch(actions.fetchDeleteContactsSuccess(id))
        }
        catch ({ response }) {
            dispatch(actions.fetchDeleteContactsError(response.data.message));
        }
    }
    return func;
}