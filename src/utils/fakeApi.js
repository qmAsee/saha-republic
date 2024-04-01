import {cafes, cultures} from './data.js';

export function fakeFetchCafes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cafes);
        }, 200)
    })
}

export function fakeFetchCultures() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cultures);
        }, 200)
    })
}