import axios from "axios";

const api = async () => {
  try {
    const response = await axios.get("/wp-json/wp/v2/posts");
    return response.data;
  } catch (err) {
    return "error";
  }
};

export default api;
