export * from './user.service'

export interface ReqPaging {
   page: number
   limit: number
}

export interface ResPaging<T> {
   data: T[]
   page: number
   per_page: number
   total: number
   total_pages: number
}