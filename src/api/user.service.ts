import { ReqPaging, ResPaging } from "."
import { req } from "./request"


export interface UserDetail {
   id: string;
   title: string;
   firstName: string;
   lastName: string;
   picture: string;
   gender: string;
   email: string;
   dateOfBirth: string;
   phone: string;
   location: Location;
   registerDate: string;
   updatedDate: string;
}

export interface Location {
   street: string;
   city: string;
   state: string;
   country: string;
   timezone: string;
}

export interface User {
   id: string;
   title: string;
   firstName: string;
   lastName: string;
   picture: string;
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

   private path = '/user'
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
