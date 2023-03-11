import { useEffect } from "react";
import styles from './phonebook.modules.css';
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "redux/filter/filter-slice";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";
import { getFilter } from "redux/filter/filter-selectors";
import { fetchAllContact, fetchAddContact, fetchDeleteContact } from "redux/contacts/contacts-operatins";

const Phonebook = () => {

    const filteredContacts = useSelector(getFilteredContacts);

    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContact())
    }, [dispatch])

    const onAddContact = ({ name, number }) => {
        dispatch(fetchAddContact({ name, number }));
    }

    const onRemoveContact = (id) => {
        dispatch(fetchDeleteContact(id));
    }

    const handelFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    };

    return (
        <div>
            <h3>Phonebook</h3>
            <div>
                <div className={styles.wrapper}>
                    <h4>Name</h4>
                    <ContactForm onSubmit={onAddContact} />
                </div>
                <div>
                    <h4>Contacts</h4>
                    <Filter value={filter} handelChange={handelFilter} />
                    <ContactList removeContact={onRemoveContact} contacts={filteredContacts} />
                </div>
            </div>
        </div>
    )

}

export default Phonebook;



