const API_KEY = '01e86adb5633e5446687b0c6a5d0f4c3';

//語言-繁體中文 &language=zh-TW

//img url ：https://image.tmdb.org/t/p/w500/

export const BASE_IMAGE_UTL = 'https://image.tmdb.org/t/p/w500/';
export const BACKDROP_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const requests = {
  // {media_type} : all, movie, tv, person
  // {time_window} : day, week
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=zh-TW`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=zh-TW`,
  fetchRendomTv: `/discover/tv?api_key=${API_KEY}&language=zh-TW`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=zh-TW`,
  fetchTvTopRated: `/tv/top_rated?api_key=${API_KEY}&language=zh-TW`,
};

export const tags = [
  {
    id: 28,
    name: '动作',
  },
  {
    id: 12,
    name: '冒险',
  },
  {
    id: 16,
    name: '动画',
  },
  {
    id: 35,
    name: '喜剧',
  },
  {
    id: 80,
    name: '犯罪',
  },
  {
    id: 99,
    name: '纪录',
  },
  {
    id: 18,
    name: '剧情',
  },
  {
    id: 10751,
    name: '家庭',
  },
  {
    id: 14,
    name: '奇幻',
  },
  {
    id: 36,
    name: '历史',
  },
  {
    id: 27,
    name: '恐怖',
  },
  {
    id: 10402,
    name: '音乐',
  },
  {
    id: 9648,
    name: '悬疑',
  },
  {
    id: 10749,
    name: '爱情',
  },
  {
    id: 878,
    name: '科幻',
  },
  {
    id: 10770,
    name: '电视电影',
  },
  {
    id: 53,
    name: '惊悚',
  },
  {
    id: 10752,
    name: '战争',
  },
  {
    id: 37,
    name: '西部',
  },
];

export default requests;
