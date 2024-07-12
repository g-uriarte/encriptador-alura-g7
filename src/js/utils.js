export const setTimeoutAsync = (fn, time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            fn(res, rej)
        }, time);
    });
}

export const waitAsync = async (time) => {
    return new Promise((res, _rej) => setTimeout(() => res(), time));
}