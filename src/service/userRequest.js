import axios from "axios";
import { MAIN_URL } from "./apiConfig.js";

export const login = async (data) => {
  try {
    const res = await axios.post(`${MAIN_URL}/login`, data, {
      headers: {
        // Authorization: "Bearer " + token,
      },
    })
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
