import cn from 'classnames'
import { useRef, useState } from 'react'
import style from './CardAddInfo.module.scss'

interface ICardAddInfoProps {
    hairColor: string
    skinColor: string
    eyeColor: string
    birthYear: string
}

export function CardAddInfo({ hairColor, skinColor, eyeColor, birthYear }: ICardAddInfoProps) {
    const [showInfo, setShowInfo] = useState(false)
    const addInfoRef: React.MutableRefObject<any> = useRef(null)

    function chickHandler() {
        setShowInfo((prev) => !prev)
        document.addEventListener('click', (event) => {
            if (!addInfoRef.current?.contains(event.target)) {
                setShowInfo(false)
                document.removeEventListener('click', () => { })
            }
        })
    }

    return (
        <div className={style.addInfo}
            onClick={chickHandler}
            ref={addInfoRef} >
            <div className={cn(style.addInfoBtn,
                { [style.active]: showInfo })}>
                more info
            </div>
            {showInfo &&
                <div className={style.addInfoText}>
                    <div>hair color: {hairColor}</div>
                    <div>skin color: {skinColor}</div>
                    <div>eye color: {eyeColor}</div>
                    <div>birth year: {birthYear}</div>
                </div>}
        </div>
    )
}
