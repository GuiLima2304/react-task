import React from "react";

function List() {

    const tasks = [
        {
            item: 'React',
            time: '02:00:00'
        },
        {
            item: 'Javascript',
            time: '01:00:00'
        },
        {
            item: 'Typescript',
            time: '01:00:00'
        }
    ]

    return (
        <aside>
            <h2>Study Day</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li>
                        <h3>{task.item}</h3>
                        <span>{task.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
export default List;