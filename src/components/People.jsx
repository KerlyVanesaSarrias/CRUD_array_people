import React from 'react'

export const People = ({ people, setPeople }) => {
    return (
        <div>
            <h2 className='text-center my-4'>IT Team</h2>
            <div className='container '></div>
        </div>
    )
};

People.propTypes = {
    people: PropTypes.array,
    setPeople: PropTypes.func
}


