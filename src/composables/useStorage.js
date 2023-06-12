import { ref } from "vue";

export function useStorage(key) {
    let storedVal = localStorage.getItem(key);

    let val = ref(storedVal);

    return val;
}