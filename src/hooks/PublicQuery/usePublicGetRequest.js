import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../lib/axios.config";

export default function usePublicGetRequest({
  endpoint,
  queryKey,
  options = {},
}) {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      const res = await axiosPublic.get(endpoint);
      return res?.data?.data;
    },
    ...options,
    staleTime: 10 * 1000,
  });

  return {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
}
