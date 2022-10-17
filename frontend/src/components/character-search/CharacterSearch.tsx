import { Autocomplete } from "@mui/material";
import style from './CharacterSearch.module.scss'
import searchIcon from '../../images/icons/search.icon.svg'

interface ICharacterSearchProps {
    charactersNames: Array<string>
    searchHandler: (value: string | null) => void
}

export function CharacterSearch({ charactersNames, searchHandler }: ICharacterSearchProps) {

    return (
        <Autocomplete
            id="combo-box-demo"
            className={style.search}
            options={charactersNames}
            onChange={(e, value) => {
                searchHandler(value)
            }}
            renderInput={params => (
                <div ref={params.InputProps.ref}>
                    <span {...params.InputLabelProps}>
                        <img src={searchIcon} /> Search:
                    </span>
                    <input {...params.inputProps} autoFocus />
                </div>
            )}
        />
    )
}
