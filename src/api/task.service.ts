import { ReqPaging, ResPaging, User } from "."
import { req } from "./request"


export interface CreateTask {
   text: string
   image: string
   likes: number
   tags: string[]
   owner: string
}


export interface Task {
   id: string
   text: string
   image: string
   likes: number
   tags: string[]
   publishDate: string
   owner: User
}


export interface DetailTask {
   id: string
   text: string
   image: string
   likes: string
   link: string
   tags: string[]
   publishDate: string
   owner: User
}