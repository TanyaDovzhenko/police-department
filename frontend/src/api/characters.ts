import axios from 'axios'
import { BASE_URL } from '../utils/constants';

export async function getAllCharacters() {
    const response = await axios.get(`${BASE_URL}department`)
    return response.data
}

export async function getCharacter(name: string) {
    const response = await axios.get(`${BASE_URL}department/character`, {
        params: { name }
    })
    return response.data
}