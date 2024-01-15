import { BRAND } from "../lib/types/brand"
import { http } from "../utils/http"

const ServiceId = {
    BRAND: '/brand/getAllBrand',
    CREATE: "/brand/createNewBrand",
    GET_BY_ID: '/users/{0}'
}

// const getAllBrand = async (): Promise<BRAND[]> => {
//     const reslt = await http.get(ServiceId.BRAND)
//     return reslt?.data
// }

const getAllBrand = async (): Promise<BRAND[]> => {
    try {
        const reslt = await http.get(ServiceId.BRAND);
        return reslt?.data || []; // Return an empty array if reslt or reslt.data is undefined
    } catch (error) {
        // Handle the error, log it, or throw it again if needed
        console.error("Error fetching brands:", error);
        throw error;
    }
}


const createNewbrand = async (name: string) => {

    try {
        const reslt = await http.post(ServiceId.CREATE, {name});
        return reslt?.data || null; // Return null if reslt or reslt.data is undefined
    } catch (error) {
        console.error("Error creating new branch:", error);
        throw error;
    }
}

export const brandService = {
    getAllBrand,
    createNewbrand
}