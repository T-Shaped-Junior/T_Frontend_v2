import Link from 'next/link'
import styled from 'styled-components'

export const HeaderWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const TitleBoxWrap = styled.div`
	background-color: #0d1117;
	width: 65vw;
	height: 140px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #30363d;

	@media ALL and (max-width: 600px) {
		display: none;
		height: 0px;
	}
`

export const LoginLink = styled.a`
	cursor: pointer;
	padding: 0 14px 0 14px;
	height: 32px;
	border: 2px solid #30363d;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	color: white;
	margin: 40px 4px auto auto;
	font-weight: 600;
	text-decoration: none;
`

export const LoginNextLink = styled(Link)`
	cursor: pointer;
	padding: 0 14px 0 14px;
	height: 32px;
	border: 2px solid #30363d;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	color: white;
	margin: 40px 4px auto auto;
	font-weight: 600;
	text-decoration: none;
`

export const MainLink = styled(Link)`
	& > * {
		border: 1px solid #30363d;
		border-radius: 10px;
	}
`

export const MainHeaderBox = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const ServiceNameBox = styled.div`
	color: #e5edf5;
	margin-left: 25px;

	span {
		font-size: 28px;
		font-family: 'main';
		font-style: normal;
		font-weight: 700;

		@media ALL and (max-width: 600px) {
			font-size: 16px;
		}
	}
`

export const ServiceNameSubBox = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 0px;
	margin-left: 25px;

	@media ALL and (max-width: 600px) {
		display: none;
	}
`

export const ImageBox = styled.div`
	margin-top: 3px;

	& > * {
		margin-top: 0;
	}
`

export const NameBox = styled.div``

export const SchoolName = styled.span`
	font-size: 16px;
	font-family: 'sub';
	color: #e5edf5;

	@media ALL and (max-width: 600px) {
		font-size: 12px;
	}
`
