import Button from '../Button';
import style from './style.module.scss';
import { Watch } from './Watch/watch';

export default function Stopwatch() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Choose a card and start the timer </p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>
                Start!
            </Button>
        </div>
    )
}