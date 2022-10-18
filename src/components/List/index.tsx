import React from "react";
import Item from "./Item";
import style from './style.module.scss';

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
        <aside className={style.listTask}>
            <h2>Study Day</h2>
            <ul>
                {tasks.map((item, index) => (
                   <Item
                   key={index} //só uma forma do react se organizar
                    {...item}
                   />
                ))}
            </ul>
        </aside>
    )
}
export default List;