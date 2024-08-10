import React from 'react'
import authService from '../../appwrite/auth_service'
import {logOut} from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
	const dispatch = useDispatch()

	const logoutHandler = () => {
		authService.logout()
		.then(() => {
			dispatch(logOut())
		})
		.catch((error) => {
			console.log('Header :: logoutHandler :: Error : ', error);
		})
	}

	return (
		<button
			className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
			onClick={logoutHandler}
		>
			LogoutBtn
		</button>
	)
}

export default LogoutBtn