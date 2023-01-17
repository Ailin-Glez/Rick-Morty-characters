export const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const navigateToPage = async (url = 'https://rickandmortyapi.com/api/character') => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw Error('Error getting info')
        } else {
            const data = await res.json()
            return data
        }
    } catch (err) {
        return err
    }

}