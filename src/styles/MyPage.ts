import Link from 'next/link'
import styled from 'styled-components'

export const MyPageWrap = styled.div`
	color: white;
	height: 100vh;
`

export const MyProfileTitleBox = styled.div`
	margin-top: 3%;
	display: flex;
	justify-content: center;

	@media ALL and (max-width: 500px) {
		margin-top: 10%;
	}
`

export const MyProfileTitle = styled.h1`
	font-size: 30px;

	@media ALL and (max-width: 500px) {
		font-size: 30px;
	}
`

export const MyProfileImageBox = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
`

export const MyProfileImage = styled.img`
	width: 130px;
	height: 130px;
	border-radius: 999px;
	border: 3px solid #ccc;

	@media ALL and (max-width: 500px) {
		width: 120px;
		height: 120px;
	}
`

export const UserInfoWrap = styled.div`
	margin-top: 20px;
`

export const UserNicknameBox = styled.div`
	display: flex;
	justify-content: center;
`

export const UserNickname = styled.span`
	font-size: 24px;
	font-weight: 500;

	@media ALL and (max-width: 500px) {
		font-size: 20px;
	}
`

export const UserSchoolInfoBox = styled.div`
	font-size: 16px;
	display: flex;
	justify-content: center;

	span {
		margin: 5px 2px 0px 2px;
	}
`

export const ManagePageBox = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`

export const ManageLink = styled(Link)`
	font-size: 14px;
	cursor: pointer;
	color: rgb(58, 58, 255);
`
