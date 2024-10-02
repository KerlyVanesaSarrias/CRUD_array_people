
export const Person = () => {
    return (
        <div className='col'>
            <div className="card" style={{ width: "18rem;" }}>
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="card-img-top" alt="avatar1" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">role</p>
                    <button className="btn btn-success mx-2">Editar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
