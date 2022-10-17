import style from './CardTech.module.scss'
import { useState, useEffect } from 'react'
import { getTechItems } from '../../../api/tech-items'

interface ICardTechProps {
    vehicles: Array<string>
    ships: Array<string>
}

export function CardTech({ vehicles, ships }: ICardTechProps) {
    const [shipsNames, setShipsNames] = useState<string[]>([])
    const [vehiclesNames, setVehiclesNames] = useState<string[]>([])

    useEffect(() => {
        (async () => {
            setShipsNames(await getTechItems(ships))
            setVehiclesNames(await getTechItems(vehicles))
        })()
    }, [])
    return (
        <div className={style.tech}>
            <div className={style.vehicles}>
                <span>{vehicles.length ? 'vehicles:' : 'no vehicles'}</span>
                {vehiclesNames?.map((el, index) =>
                    <div className={style.techItem} key={index}>{el}</div>)}
            </div>
            <div className={style.ships}>
                <span>{ships.length ? 'ships:' : 'no ships'}</span>
                {shipsNames?.map((el, index) =>
                    <div className={style.techItem} key={index}>{el}</div>)}
            </div>
        </div>
    )
}
