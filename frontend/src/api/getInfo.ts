import axios from "axios"

export async function getInfo(url: string) {
    const response = await axios.get(url)
    return response.data
}