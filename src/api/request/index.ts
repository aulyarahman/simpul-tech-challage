interface Treq {
   method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'PATCH'
   path: string
   errors?: { [key: number]: string }
   body?: any
}

export async function req<R>({
   method,
   path,
   body,
}: Treq): Promise<R> {

   // using api https://dummyapi.io
   const baseUrl = `${process.env.NEXT_PUBLIC_API_HOST}/data/v1`
   try {
      const mReq = await fetch(baseUrl + path, {
         method,
         body:
            method === 'GET' || method === 'DELETE' || body === undefined
               ? undefined
               : JSON.stringify(body),
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'app-id': `${process.env.NEXT_PUBLIC_APP_ID}`
         },
      })
      const data: R = await mReq.json()
      return data satisfies R
   } catch (e) {
      const err = e as Error
      throw new Error(err.message)
   }
}
