import axios from "axios";
import { MAIN_URL } from "./apiConfig.js";

export const getChatRoomByUserID = async (params) => {
  try {
    const res = await axios.get(`${MAIN_URL}/getchatroombyuserid`, {
      params:params,
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