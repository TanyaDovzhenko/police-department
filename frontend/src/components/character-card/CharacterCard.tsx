import style from './CharacterCard.module.scss'
import { useState, useEffect } from 'react'
import { CardTech } from './card-tech/CardTech'
import { BASE_URL } from '../../utils/constants'
import { CardAddInfo } from './card-add-info/CardAddInfo'
import { ICharacter } from '../../types/character.interface'
import { getInfo } from '../../api/getInfo'

interface ICharacterProps {
    character: ICharacter
}

export function CharacterCard({ character }: ICharacterProps) {
    const [homeworld, setHomeworld] = useState<string>('')

    useEffect(() => {
        (async () => {
            const homeworld = await getInfo(character.homeworld)
            setHomeworld(homeworld.name)
        })()
    }, [])

    return (
        <div className={style.card}>
            <div className={style.avatar}
                style={{ backgroundImage: `url(${BASE_URL + character.avatar})` }}>
            </div >
            <div className={style.info}>
                <div className={style.name}>{character.name}</div>
                <div>from: {homeworld ? homeworld : 'detecting'}</div>
                <div>gender: {character.gender}</div>
                <div>height: {character.height}</div>
                <CardAddInfo
                    hairColor={character.hair_color}
                    skinColor={character.skin_color}
                    eyeColor={character.eye_color}
                    birthYear={character.birth_year} />
            </div>
            <CardTech
                ships={character.starships}
                vehicles={character.vehicles} />
        </div>
    )
}
