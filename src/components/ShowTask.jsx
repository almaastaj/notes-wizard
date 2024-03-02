import React from "react";

function ShowTask({ tasklist, setTasklist, handleEdit, handleDelete }) {
    return (
        <section className="showTask">
            <div className="head">
                <span>
                    <span className="title">Notes</span>
                    <span className="count">{tasklist.length}</span>
                </span>
                <span className="clearAll" onClick={() => setTasklist([])}>
                    Clear All
                </span>
            </div>
            <ul>
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i
                            className="bi bi-pencil-square"
                            onClick={() => handleEdit(task.id)}
                        ></i>
                        <i
                            className="bi bi-trash"
                            onClick={() => handleDelete(task.id)}
                        ></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ShowTask;
