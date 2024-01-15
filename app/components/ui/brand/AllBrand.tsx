"use client"
import React from 'react'
import NavBar from '../../../(landing)/page'
import { get } from 'http'
import { useBrand } from '../../../lib/hooks/use-fetch-brand'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"
import { useQuery, useQueryClient } from 'react-query'
import { brandService } from '@/app/services/brand.service'


type Inputs = {
    brandName: string
    // exampleRequired: string
}

function AllBrand() {

    // const queryClient = useQueryClient();
    const { brand } = useBrand.useFetchBrand();
    // const { isLoading: createBrandLoading, isError: createBrandError, brand: createdBrand } = useCreateBrand("BrandName");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        try {
            brandService.createNewbrand(data.brandName)
            // queryClient.invalidateQueries('brands');
        } catch (errors) {
            console.log("error"+errors)
        }
        
    }

    return (
        <>
            <NavBar />
            <div className='w-full items-center justify-center'>

                <form onSubmit={handleSubmit(onSubmit)} className='mx-auto w-1/3 mt-10 border border-gray-400 p-10 rounded-lg'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input {...register("brandName", { required: true })} className='border border-gray-400 rounded-lg' /> <br />
                    {errors.brandName && <span className='text-red-600'>This field is required</span>} <br />


                    {/* include validation with required or other standard HTML validation rules
                    <input {...register("exampleRequired", { required: true })} className='border border-gray-400 rounded-lg'/> <br />
                    {/* errors will return when field validation fails  */}
                    {/* {errors.exampleRequired && <span className='text-red-600'>This field is required</span>} */}
                    <br />
                    <input type="submit" className='h-8 w-16 rounded-lg font-semibold bg-blue-400' />
                </form>

                <table className='w-1/2 h-1/2 bg-red-300 mx-auto mt-6 border border-black p-2'>
                    <thead className='border border-black p-2'>
                        <tr className='border border-black'>
                            <td className='border border-black'>ID</td>
                            <td className='border border-black'>Name</td>
                        </tr>
                    </thead>
                    <tbody className='border border-black p-2'>
                        {brand?.map(brand => (
                            <tr key={brand.id} className='border border-black'>
                                <td className='border border-black'>{brand.id}</td>
                                <td className='border border-black'>
                                    {/* <Link href={`/brand/${brand.id}`} className='text-blue-500'>
                                        {brand.brandName}
                                    </Link> */}
                                    <Link href={`/model`} className='text-blue-500'>
                                        {brand.brandName}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>

    )
}



export default AllBrand