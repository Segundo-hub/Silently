import { writable } from 'svelte/store'
import _axios from 'axios'

const axios = _axios.create({
	baseURL: 'http://localhost:8080/api',
	headers: {
		'Content-Type': 'application/json',
	},
})

const getUser = () => {
	return localStorage.getItem('sure') || null
}

const setUser = (user, token) => {
	localStorage.setItem('sure', user)
	localStorage.setItem('neosl', token)
}

const UserAuth = () => {
	const { subscribe, set } = writable(getUser())

	return {
		subscribe,
		userLogin: (arg) => set(arg),
		logoutUser: () => set(null),
	}
}

/**
 *   @param {Object} contain {username, password}.
 *   @return {Promise:<Object>} with {token, user }
 */

export const setUserAccount = async (user = {}) => {
	if (typeof user == 'undefined') throw Error('Especicific user argument')

	const { data, status } = await axios.post('/user/register', {
		username: user.username,
		password: user.password,
	})

	setUser(data.content.username, data.token)
	return {
		data,
		status,
	}
}

export const getUserAccount = async (user = {}) => {
	if (typeof user == 'undefined') throw Error('Especicific user argument')

	const { data, status } = await axios.post('/user/login', {
		username: user.username,
		password: user.password,
	})

	setUser(data.content.username, data.token)
	return {
		data,
		status,
	}
}

export const authContext = UserAuth()
