import { useState } from 'react';

export const useLocalStorage = (keyName, initialValue) => {
    const [value, setValue] = useState(() => {
        const items = JSON.parse(localStorage.getItem(keyName));
        if (items !== null){
           return items
        }else {
            return initialValue
        }
    })
    return [value, setValue];
}