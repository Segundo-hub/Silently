import axios from './axios'

const HEADERS = {
   headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${localStorage.getItem("neosl")}`,
   }
}

export const getMessages = async () => {
   const { data } = await axios.get('messages/get-all', HEADERS)
   return data
}