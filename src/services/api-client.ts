import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dfc8f5ab87a74eb38a61a9096c1be9cc",
  },
});
