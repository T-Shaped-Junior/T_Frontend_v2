import styled from 'styled-components'

export const Textarea = styled.textarea`
	outline: none;
	resize: none;
	border: 2px solid #30363d;
	border-radius: 6px;
	background-color: #0d1117;
	color: #e5edf5;
	width: 65vw;
	height: ${({ rows, theme }) => +theme.listSize * (rows || 1) + 4}px;
	padding: 15px;
	font-size: 14px;
	min-height: 160px;
	max-height: 600px;
`

export const ArticleWrap = styled.div`
	display: flex;
	justify-content: center;
`

export const ArticleBox = styled.div`
	width: 65vw;
	margin-top: 10px;
`

export const PostTitleBox = styled.div`
	@media ALL and (max-width: 500px) {
		margin-top: 40px;
	}
`

export const PostingBox = styled.div`
	margin-bottom: 10px;
	color: white;
	float: right;
	display: flex;
	flex-direction: row;
	margin-top: 10px;

	@media ALL and (max-width: 500px) {
		float: left;
	}
`

export const PostingWrap = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 5px;

	@media ALL and (max-width: 500px) {
		width: 60vw;
	}
`

export const PreviewImg = styled.div`
	& > * {
		width: 25px;
		height: 25px;
		margin-right: 20px;
		margin-left: 10px;
	}
`

export const AnonyButtonWrap = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`

export const AnonyButtonSpan = styled.span`
	font-size: 14px;
	font-family: 'main';
	font-style: normal;
	font-weight: 700;
	cursor: pointer;

	@media ALL and (max-width: 500px) {
		font-size: 14px;
	}
`

export const AnonyButton = styled.button`
	margin-left: 5px;
	width: 18px;
	height: 18px;
	border-radius: 6px;
	background-color: #21262d;
	border: 1px solid #30363d;
	color: #e5edf5;
	cursor: pointer;

	@media ALL and (max-width: 500px) {
		width: 18px;
		height: 18px;
		border-radius: 6px;
		font-size: 10px;
	}
`

export const PostSelectWrap = styled.div`
	display: flex;
	margin-right: 14px;

	select {
		outline: none;
		background-color: #0d1117;
		border: 2px solid #30363d;
		color: white;
		width: 70px;
		height: 24px;
		border-radius: 2px;
		padding-left: 4px;
		font-size: 12px;
	}
`

export const PostButtonWrap = styled.div`
	display: flex;

	input {
		width: 230px;

		@media ALL and (max-width: 500px) {
			width: 60px;
			margin-right: 10px;
		}
	}

	input[type='file']::file-selector-button {
		margin-top: 2px;
		margin-bottom: 2px;
		font-family: 'main';
		font-style: normal;
		font-weight: 700;
		height: 20px;
		background-color: transparent;
		color: #e5edf5;
		border: none;
		cursor: pointer;
		font-size: 12px;

		&:hover {
			color: #fff;
		}

		margin-left: 16%;
	}
`

export const PostButton = styled.button`
	width: 60px;
	height: 25px;
	font-size: 12px;
	color: #e5edf5;
	border-radius: 4px;
	background-color: #238636;
	border: 1px solid #30363d;
	font-family: 'main';
	font-style: normal;
	font-weight: 700;
	cursor: pointer;

	@media ALL and (max-width: 500px) {
		margin-top: 1.5px;
		width: 50px;
		height: 20px;
	}

	span {
		margin-left: 4px;
		cursor: pointer;
		font-size: 13px;
	}
`

export const EditorBox = styled.div`
	.editor {
		outline: none;
		resize: none;
		border: 2px solid #30363d;
		border-radius: 6px;
		background-color: #0d1117;
		color: #e5edf5;
		width: 65vw;
		height: fit-content;
		padding: 15px;
		font-size: 14px;
	}
`

export const LengthBox = styled.div`
	display: flex;

	span {
		color: #30363d;
		font-weight: 600;
		font-size: 12px;
		margin-left: auto;
		margin-right: 5px;
	}
`
