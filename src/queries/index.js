const BASE_URL = 'http://127.0.0.1:8000/';

export async function getStories() {
  return fetch(BASE_URL + 'stories').then(response => response.json());
}
