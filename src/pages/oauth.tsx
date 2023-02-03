import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
import setCookie from '../util/cookie/setCookie'

const OAuth = () => {
	const router = useRouter()

	useQuery('getToken', async () => (await axios.post(`/oauth${window.location.search}`)).data, {
		onSuccess: (res) => {
			setCookie('Authorization', res.data, '7')
			localStorage.setItem('code', window.location.search)
			router.push('/')
			window.location.reload()
		},
		onError: (err) => {
			console.log(err)
		},
	})

	return <></>
}

export default OAuth
