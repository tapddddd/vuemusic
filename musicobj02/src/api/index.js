import axios from "axios"

const baseUrl = "http://localhost:3000";

export function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

export function getMusic(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

export function getMusicList(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

export function getLyric(id){
	return axios.get(`${baseUrl}/lyric?id=${id}`);
}

export function searchMusic(keywords){
	return axios.get(`${baseUrl}/search?keywords=${keywords}`);
}

export default { getBanner,getMusic,getMusicList,getLyric,searchMusic };