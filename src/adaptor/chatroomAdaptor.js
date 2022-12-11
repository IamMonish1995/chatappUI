
import useSWR from "swr";
import { getChatRoomByUserID } from "../service/chatRoomRequest.js";
import { swrConfigs } from "./swrConfigs.js";

export function useAllChatRooms(params) {
    
    const { data, mutate, error } = useSWR([params, "getChatroom"], getChatRoomByUserID, swrConfigs);

    const loading = !data && !error;

    return {
        loading,
        chatrooms: data,
        mutate,
        error,
    };
}
