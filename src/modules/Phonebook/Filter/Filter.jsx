/* eslint-disable react/no-typos */
import PropTypes from 'prop-types'

const Filter = ({ handelChange, value }) => {
    return (
        <div >
            <h5>Find contacts by name</h5>
            <input value={value} name='filter' onChange={handelChange} />
        </div>
    )
}

export default Filter;



Filter.PropTypes = {
    handelChange: PropTypes.func.isRequired,
}