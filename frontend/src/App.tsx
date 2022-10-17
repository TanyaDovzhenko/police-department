import { useState, useEffect } from 'react'
import { Header } from "./components/header/Header";
import { ICharacter } from "./types/character.interface";
import { CardsList } from "./components/cards-list/CardsList";
import { getAllCharacters, getCharacter } from './api/characters';
import { CharacterSearch } from './components/character-search/CharacterSearch';


function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [currentCharacter, setCurrentCharacters] = useState<ICharacter | null>(null)
  const [charactersNames, setCharactersNames] = useState<string[]>([])

  async function searchHandler(value: string | null) {
    if (value) setCurrentCharacters(await getCharacter(value))
    else setCurrentCharacters(null)
  }

  useEffect(() => {
    (async () => {
      const characters = await getAllCharacters()
      setCharacters(characters)
      setCharactersNames(characters.map((el: ICharacter) => el.name))
    })()
  }, [])

  return (
    <div>
      <Header />
      <CharacterSearch
        charactersNames={charactersNames}
        searchHandler={searchHandler} />
      <CardsList
        characters={currentCharacter ? [currentCharacter] : characters} />
    </div>
  );
}

export default App;
