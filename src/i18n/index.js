import uz from "./uz.json"
import ru from "./ru.json"
import en from "./en.json"

export const languages = [
    {
        key: "uz",
        label: "Uz",
        value: uz
    },
    {
        key: "ru",
        label: "Ru",
        value: ru
    },
    {
        key: "en",
        label: "En",
        value: en
    }
]


export const languagesList = Object.fromEntries(languages.map(({ key, value }) => [[key], value]))
