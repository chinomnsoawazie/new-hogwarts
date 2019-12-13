import React from 'react'

function Filter(props) {

    const handleSelect = (event) =>{
        props.handleSort(event.target.value)

    }

    return (
        <div>
            <select onChange={handleSelect} >
                <option >Chose Sort Criteria</option>
                <option value='weight'>Weight</option>
                <option value='name'>Name</option>
            </select>
        </div>
    )
}

export default Filter
