export const getAllContacts = ({ contacts }) => contacts.items;
export const getFilteredContacts = ({ contacts, filter }) => {
    if (!filter) {
        return contacts.items
    }
    const normFilter = filter.toLowerCase()
    const result = contacts.items.filter(({ name, phone }) => {
        return (name.toLowerCase().includes(normFilter) || phone.toLowerCase().includes(normFilter))
    })
    return result;
}