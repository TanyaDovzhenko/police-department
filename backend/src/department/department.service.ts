import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { ICharacter } from 'src/types/character.interface';
import { setAvatar } from 'src/utils/setAvatar';


@Injectable()
export class DepartmentService {
  characters: Promise<ICharacter[]>

  constructor(private readonly http: HttpService) {
    this.characters = this.getCharacters()
  }

  async getCharacters() {
    const characters = await this.http.get('https://swapi.dev/api/people')
      .toPromise()
      .then(data => data?.data.results)
      .catch(() => [])

    for (let character of await characters) {
      let avatar = await setAvatar(character.name)
      if (avatar) character.avatar = avatar
    }

    return characters
  }

  async findAll(): Promise<ICharacter[]> {
    return await this.characters
  }

  async findOne(name: string): Promise<ICharacter> {
    const character = (await this.characters).find(el => el.name === name)
    return character
  }
}
