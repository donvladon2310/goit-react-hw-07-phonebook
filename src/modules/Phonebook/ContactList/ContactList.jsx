/* eslint-disable react/no-typos */
import PropTypes from 'prop-types'


const ContactList = ({ removeContact, items }) => {
    const contact = items.map(({ id, name, number }) => <li key={id}>{name}: {number}
        <button onClick={() => removeContact(id)} type="button">delete</button></li>)

    return (
        <ul>
            {contact}
        </ul>
    )
}


export default ContactList;


ContactList.defaultProps = {
    items: []
}

ContactList.PropTypes = {
    removeContact: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequireds,
        name: PropTypes.string.isRequireds,
        number: PropTypes.string.isRequireds,
    }))
}
