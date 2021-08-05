import afetch from 'axios'
const axios = afetch.create({
   baseURL: 'http://localhost:8080/api/'
})

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

export const sendMessages = async (values) => {
   const { data } = await axios.post('messages/create', {
      message: values.message,
      title: values.title
   }, HEADERS)
   return data
}