import Link from 'next/link'
import styled from 'styled-components'

export const NotFoundWrap = styled.div`
	margin-top: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const NotFoundPage = styled.h1`
	font-size: 35px;
	color: white;
	margin-bottom: 20px;

	@media ALL and (max-width: 500px) {
		margin-top: 30%;
		font-size: 22px;
	}
`

export const ToHomeLink = styled(Link)`
	margin-top: 10px;
	font-size: 18px;
	text-decoration: none;
	color: blue;

	@media ALL and (max-width: 500px) {
		font-size: 16px;
	}
`
