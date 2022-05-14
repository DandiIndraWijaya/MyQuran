import axios from 'axios';

const API = axios.create({
  baseURL: 'http://api.alquran.cloud/v1',
});

API.interceptors.response.use(
  async response => response.data,
  error => error,
);

const getSurahDetail = (surahNumber: number, edition: string) =>
  API.get(`/surah/${surahNumber}/${edition}`);

export {getSurahDetail};
