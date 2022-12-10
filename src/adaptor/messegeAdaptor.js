import { getChats } from "src/services/messegeRequest";
import useSWR from "swr";
import { swrConfigs } from "./swrConfigs.js";

export function useAllAcademies(params) {
    const { data, mutate, error } = useSWR([params, "getChat"], getChats, swrConfigs);

    const loading = !data && !error;

    return {
        loading,
        messeages: data,
        mutate,
        error,
    };
}
