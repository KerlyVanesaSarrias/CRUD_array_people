import PropTypes from "prop-types";
import { Person } from "./Person";
import { useState } from "react";

export const People = ({ people, setPeople }) => {

const [editingId, setEditingId] = useState(people);
const [editedPerson, setEditedPerson] = useState(
    {
        name: '',
        role: '',
        img:''
    });

const handleChange =(e) => {
    const { name, value } = e.target;
    setEditedPerson((prev) => ({ ...prev, [name]: value }));
}

const handleCreate = (e) => {
    e.preventDefault();
    setPeople([...people,{id:people.length + 1, ...editedPerson}])
    setEditedPerson({
        name: '',
        role: '',
        img:''
    })
}




    return (
        <div>
            <h2 className='text-center my-4'>IT Team</h2>
            <div className='container'>
                <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        people.map((people) => {
                            return (
                                <div key={people.id}>
                                    <Person
                                        id={people.id}
                                        name={people.name}
                                        img={people.img}
                                        role={people.role}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
};

People.propTypes = {
    people: PropTypes.array,
    setPeople: PropTypes.func
}
