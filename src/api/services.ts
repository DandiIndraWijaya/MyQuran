import axios from 'axios';

const API = axios.create({
  baseURL: 'http://api.alquran.cloud/v1',
});

API.interceptors.response.use(
  async response => response.data,
  error => error,
);

const getSurahDetail = (surahNumber: number) =>
  API.get(`/surah/${surahNumber}/ar.alafasy`);

export {getSurahDetail};
