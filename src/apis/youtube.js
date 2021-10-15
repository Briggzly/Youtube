import axios from "axios";

const KEY = "AIzaSyBb3hXgGx46yCr7_vliV5Y4xO2APF4tIuc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
