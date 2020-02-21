import {fetchGet,fetchPost } from  "@/utils/https.js"

// import qs from 'qs';
export const lookWorklist = () => {
    return fetchGet('/zhaohuo/list').then(({ data }) => {
        return data;
    })
} 