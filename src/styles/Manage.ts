import styled from 'styled-components'

export const ManageTitleBox = styled.div`
	display: flex;
	color: white;
	justify-content: center;
`

export const ManageTitleText = styled.h1`
	margin-top: 20px;
	font-size: 22px;
`

export const ManageContentWrap = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: white;
`

export const ManageContentTitle = styled.div`
	display: flex;
	align-items: center;
	color: white;
	margin-bottom: 12px;
	flex-direction: column;

	table {
		margin-bottom: 50px;

		tr {
			td {
				text-align: center;
			}
		}
	}
`

export const PostContents = styled.td`
	width: 700px;
`

export const PostImageBox = styled.td`
	& > * {
		width: 150px;
	}
`
