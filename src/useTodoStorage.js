import { useEffect, useRef, useState } from "react"



function useTodoStorage(
    key,
    defaultValue = [],
    { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
    const [state, setState] = useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key)
        if (valueInLocalStorage) {
            return deserialize(valueInLocalStorage)
        }
        return defaultValue
    })

    const prevKeyRef = useRef(key)

    useEffect(() => {
        const prevKey = prevKeyRef.current
        if (prevKey !== key) {
            window.localStorage.removeItem(prevKey)
        }
        prevKeyRef.current = key
        window.localStorage.setItem(key, serialize(state))
    }, [key, state, serialize])

    return [state, setState]
}

export { useTodoStorage }
