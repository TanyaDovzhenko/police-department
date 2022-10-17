import { readdir } from 'node:fs/promises';
import * as path from 'path';

export async function setAvatar(name: string): Promise<string | undefined> {
    try {
        const files = await readdir(path.join(__dirname, '..', '..', 'static', 'characters'))
        let avatar = files.find(el => el.split('.')[0] == name.split(' ').join(''))
        return 'characters/' + avatar
    }
    catch (err) {
        return null
    }
}