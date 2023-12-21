import axios from "axios";
const url = "/api/post";

export default class API{
    //Para obtener todos los post del server
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    //Para obtener los post post by id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //Para insertar post en la bd
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }
    //Para actualizar post en la bd
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    //Para eliminar post en la bd
    static async delatePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}