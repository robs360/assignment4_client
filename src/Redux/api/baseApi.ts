import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi=createApi({
    reducerPath:'baseApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/v1',
        credentials:'include'
    }),
    endpoints:(builder)=>({
    
       login:builder.mutation({
        query:(userInfo)=>({
            url:'/auth/login',
            method:'POST',
            body:userInfo
         })
       }),
       
       getProducts:builder.query({
          query:()=>'/products'
       }),
       getSingleProduct:builder.query({
        query:(id)=> `/products/${id}`
       }),
       postUser:builder.mutation({
        query:(userInfo)=>({
            url:'/users/create',
            method:'POST',
            body:userInfo,
            headers:{
                'Content-Type': 'application/json'
            }
        })
       })
    })
})

export const {useLoginMutation,useGetProductsQuery,
    usePostUserMutation,useGetSingleProductQuery
}=baseApi