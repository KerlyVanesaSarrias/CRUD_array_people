import PropTypes from "prop-types";
import { Person } from "./Person";
import { useState } from "react";

export const People = ({ people, setPeople }) => {

    const [editingId, setEditingId] = useState(people);
    const [editedPerson, setEditedPerson] = useState(
        {
            name: '',
            role: '',
            img: ''
        });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPerson((prev) => ({ ...prev, [name]: value }));
    }

    const handleCreate = (e) => {
        e.preventDefault();
        setPeople([...people, { id: people.length + 1, ...editedPerson }])
        setEditedPerson({
            name: '',
            role: '',
            img: ''
        })
    }
    const handleEdit = (id) => {
        setEditingId(id);
        setIsEditing(true);
        const personToEdit = people.find((person) => person.id === id);
        setEditedPerson({...personToEdit}); 
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
                                        handleEdit={() => handleEdit(people.id)}
                                    />
                                </div>
                            );
                        })
                    }
                </div>

                <div className='container'>
                    <h2 className='text-center mt-4' >Crear Nuevo Empleado</h2>
                    <form action="">
                        <div>
                            <label htmlFor="name">Nombres</label>
                            <input type="text" name="name" value={editedPerson.name} onChange={handleChange} required className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="name">Rol</label>
                            <input type="text" name="name" value={editedPerson.role} onChange={handleChange} required className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="name">Avatar</label>
                            <input type="text" name="name" value={editedPerson.img} onChange={handleChange} required className="form-control" />
                        </div>
                        <div className="mt-2 text-center">
                            <button type="submit" className="btn btn-primary"> Crear</button>
                        </div>
                            
                    </form>
                </div>
            </div>
        </div>
    )
};

People.propTypes = {
    people: PropTypes.array,
    setPeople: PropTypes.func
}
