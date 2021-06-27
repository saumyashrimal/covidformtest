import React from 'react'

function SavedDependents(props) {
    let deleteSavedDependent = props.deleteSavedDependent;
    let i = 0;
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Relation</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Adhaar no</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.dependents.map((dObj, key) => {
                    return (
                        <tr key={key}>
                            <td>{++i}</td>
                            <td>{dObj.name}</td>
                            <td>{dObj.relation}</td>
                            <td>{dObj.dob}</td>
                            <td>{dObj.adhaarno}</td>
                            <td>
                                <button className="btn btn-danger text-white" onClick={(e) => deleteSavedDependent(e, dObj)}>X</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default SavedDependents
