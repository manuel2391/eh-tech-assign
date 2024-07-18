import { useQuery } from "@tanstack/react-query";
import fetchProperties from "../../api/propertiesApi";
import { Property } from "../../models/property";

const QUERY_KEY = ['properties'];

const useGetProperties = () => {
    return useQuery<Property[],Error>({queryKey: QUERY_KEY, queryFn: fetchProperties});
}

export default useGetProperties;