import { brandService } from "@/app/services/brand.service"
import { useQuery } from "@tanstack/react-query";
import { log } from "console";

const useFetchBrand = () => {
    const query = useQuery({
        queryKey: ["brands"],
        queryFn: () => brandService.getAllBrand()
    })

    return {
        isLoading: query?.isLoading,
        isError: query?.isError,
        brand: query?.data ?? []
    }
}


export const useBrand = {
    useFetchBrand,
}