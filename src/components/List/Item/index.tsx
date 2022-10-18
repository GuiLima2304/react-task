import style from '../style.module.scss'

export default function Item({ item, time }: { item: string, time: string }) {
    return (
        <li className={style.item}>
            <h3>{item}</h3>
            <span>{time}</span>
        </li>
    )
}