import {fetchGet,fetchPost } from  "@/utils/https.js"

// import qs from 'qs';
export const zhaogonglist = () => {
    return fetchGet('/zhaogong/list').then(({ data }) => {
        return data;
    })
} 