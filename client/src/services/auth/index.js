
import { writable } from 'svelte/store';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';
const BASE_HEADERS = {
   'Content-Type': 'application/json'
}

const getUser = () => {
   return localStorage.getItem('sure') || null
}

const setUser = (user, token) => {
   localStorage.setItem('sure', user)
   localStorage.setItem('neosl', token)
}

const UserAuth = () => {
   const { subscribe, set } = writable(getUser());
   
   return {
      subscribe,
      userLogin: (arg) => set(arg),
      logoutUser: () => set(null)
   }
}

/** 
*   @param {Object} contain {username, password}.
*   @return {Promise:<Object>} with {token, user }
*/

export const setUserAccount = async (user = {}) => {
   if (typeof user == 'undefined') throw Error('Especicific user argument')

   const { data, status } = await axios.post(BASE_URL + '/sing-up', {
      username: user.username,
      password: user.password
   }, BASE_HEADERS);

   setUser(data.content.username, data.token)
   return {
      data, status
   }
}

export const getUserAccount = async (user = {}) => {
   const { data, status } = await axios.post(BASE_URL + '/sing-in', {
      username: user.username,
      password: user.password
   }, BASE_HEADERS);

   setUser(data.content.username, data.token)
   return {
      data, status
   }
}


export const authContext = UserAuth()