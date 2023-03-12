export const getAllContacts = ({ contacts }) => contacts.items;
export const getFilteredContacts = ({ contacts, filter }) => {
    if (!filter) {
        return contacts.items
    }
    const normFilter = filter.toLowerCase()
    const result = contacts.items.filter(({ name, number }) => {
        return (name.toLowerCase().includes(normFilter) || number.toLowerCase().includes(normFilter))
    })
    return result;
}