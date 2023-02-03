import styled from 'styled-components'

export const ContentBoxWrap = styled.div`
	color: #e5edf5;
`

export const ContentBox = styled.div`
	margin: 20px 0px 20px 0px;
	border-radius: 8px;
	border: 2px solid #30363d;
	padding: 10px 20px 20px 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ContentLine = styled.div`
	width: 62vw;
	height: 1px;
	background-color: #30363d;
`

export const HeaderInfoBox = styled.div`
	margin: 10px 0 8px 0;
	display: flex;
	width: 100%;

	span {
		font-size: 16px;
		font-weight: 500;
		margin-right: 8px;
	}

	@media ALL and(max-width: 600px) {
		font-size: 10px;
	}
`

export const DateTextBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media ALL and (max-width: 600px) {
		margin-top: -6px;
	}
`

export const CategoryText = styled.span`
	font-size: 14px;
	margin-left: 8px;
`

export const DateText = styled.span`
	font-size: 12px;
	color: #83888e;
	margin-left: 10px;

	@media ALL and (max-width: 600px) {
		font-size: 8px;
	}
`

export const AuthorTextBox = styled.div`
	margin-left: auto;
	font-size: 12px;

	@media ALL and (max-width: 600px) {
		font-size: 10px;
	}
`

export const AuthorText = styled.span`
	color: #acafb2;

	@media ALL and (max-width: 600px) {
		font-size: 10px;
		width: 30px;
	}
`

export const TextBox = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const PostImage = styled.img`
	margin-top: 20px;
	width: 350px;
	height: auto;

	@media ALL and (max-width: 500px) {
		width: 170px;
		height: auto;
	}
`

export const ContentText = styled.span`
	font-size: 15px;
	line-height: 22px;
	color: #e5edf5;
	white-space: pre-wrap;

	@media ALL and (max-width: 600px) {
		font-size: 11px;
	}
`
