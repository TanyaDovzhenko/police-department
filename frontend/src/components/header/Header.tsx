import style from './Header.module.scss'

export function Header() {
    return (
        <div className={style.header}>
            <div className={style.text}>STAR WARS</div>
            <div className={style.subText}>police department</div>
        </div>
    )
}
