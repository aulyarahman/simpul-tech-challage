import { ReqPaging, ResPaging } from "."
import { req } from "./request"

export interface Support {
   url: string
   text: string
}

export interface UserDetail {
   dat: User
   support: Support
}

export interface User {
   id: number,
   email: string
   first_name: string
   last_name: string
   avatar: string
}

class Api {
   private static instance: Api
   private constructor() { }
   public static getInstance(): Api {
      if (!Api.instance) {
         Api.instance = new Api()
      }
      return Api.instance
   }

   private path = '/users'
   find(r: ReqPaging): Promise<ResPaging<User>> {
      return req<ResPaging<User>>({
         method: 'GET',
         path: `${this.path}?page=${r.page}&limit=${r.limit}`,
      })
   }
}

interface ApiUserInfo {
   find(r: ReqPaging): Promise<ResPaging<User>>
}

export function getUserApiInfo(): ApiUserInfo {
   return Api.getInstance()
}
