import axios from 'axios';

export default class Api {
    static getPosts() {
        const uri = "https://jsonplaceholder.typicode.com/posts?_start=0&amp;_limit=20";

        return axios.get(uri);
    }

    static createPost(data) {
        const uri = "https://jsonplaceholder.typicode.com/posts";

        return axios.post(uri, data)
    }

    static getPostById(id) {
        const uri = "https://jsonplaceholder.typicode.com/posts/" + id;

        return axios.get(uri)
    }

    static editPost(id, data) {
        console.log(id, data);
        const uri = "https://jsonplaceholder.typicode.com/posts/" + id;

        return axios.put(uri, data)
    }

    static deletePost(id) {
        const uri = "https://jsonplaceholder.typicode.com/posts/" + id;

        return axios.delete(uri)
    }


    static getCountries() {
        const uri = "https://restcountries.com/v3.1/all";

        return axios.get(uri);
    }

    static getUniversities(country) {
        const uri = "http://universities.hipolabs.com/search?country=" + country;

        return axios.get(uri);
    }
}