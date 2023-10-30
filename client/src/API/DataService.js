import $api from "../http";

export default class DataService {
    static async getAllPost(countPage, flag) {
        return await $api.get(`/api/post?limit=6&page=${countPage}&reverse=${flag}`);
    }
    static async postCreatePost(obj) {
        return await $api.post(
            `/api/post
        `,
            obj
        );
    }
}
