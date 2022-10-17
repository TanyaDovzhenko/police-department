import axios from "axios"

export async function getTechItems(urls: Array<string>) {
    const promises = []

    for (let el of urls) {
        promises.push(new Promise(resolve =>
            resolve(axios.get(el)))
            .catch(() => ''))
    }

    const results = await Promise
        .allSettled(promises)
        .then((results) => results)

    const techItemsNames = results.map((el: any) => el.value.data.name)
    return techItemsNames
}


