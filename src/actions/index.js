//CREATING AN ACTION FETCH_POSTS
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(section){

	console.log('Action creator section variable:', section);
	const API_KEY = '2616bc3d37e1493ca77d72f97b4e8859';
	const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;
	const request = axios.get(url);

	return {
			type: FETCH_POSTS,
			payload: request
	};
}

