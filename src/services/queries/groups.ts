import { useQuery } from "@tanstack/react-query";
import axios from "@/services/axios";
import { urls } from "../urls";

export const useGetAllGroups = () => {
    return useQuery(["getMyGroups"], async () => {
        const res = await axios.get(urls.getAllGroupsUrl);
        return res.data.data;
    });
};
export const useGetOtherGroups = () => {
    return useQuery(["getOtherGroups"], async () => {
        const res = await axios.get(urls.getOtherGroupsUrl);
        return res.data.data;
    });
};

export const useGetGroupById = (id: string) => {
    return useQuery(["getGroupById", id], async () => {
        const res = await axios.get(urls.getGroupByIdUrl(id));
        return res.data.data;
    });
};
