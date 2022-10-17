import { CharacterCard } from '../character-card/CharacterCard'
import { ICharacter } from '../../types/character.interface'

interface ICardsListProps {
    characters: Array<ICharacter>
}

export function CardsList({ characters }: ICardsListProps) {
    return (
        <div>
            {characters?.map(el =>
                <CharacterCard character={el} key={el.name} />)}
        </div>
    )
}
