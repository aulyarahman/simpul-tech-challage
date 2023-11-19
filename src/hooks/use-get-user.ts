import { useState } from "react"
import { ResPaging, User, getUserApiInfo } from "@/api"
import { asyncHandler } from "@/lib/async"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

const key = 'user'
export function useGetUser() {
   const [page, setPage] = useState(1)
   const limit = 10
   const byPaging = asyncHandler(async (page: number) => {
      const currentPage = page || 1
      return await getUserApiInfo().find({
         page: currentPage,
         limit,
      })
   })

   const query = useQuery<ResPaging<User>, Error>(
      {
         queryKey: [key, page],
         queryFn: () => byPaging(page),
         placeholderData: keepPreviousData,
      }
   )

   return {
      isPending: query.isPending,
      error: query.error,
      data: query.data?.data,
      page,
      setPage
   }

}