import React from 'react'
import { MutationFunction, useMutation, useQuery, useQueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'
import useDidMountEffect from '@/hooks/useDidMountEffect'
import ManagePostType from '@/types/ManagePostType'
import allowPost from '@/api/allowPost'
import deletePost from '@/api/deletePost'
import getManagePost from '@/api/getManagePost'
import userState from '@/context/userState'
import category from '@/util/etc/category'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Header from '@/components/Header'
import * as S from '@/styles/Manage'

const Manage = () => {
	const user = useRecoilValue(userState)
	const router = useRouter()
	const [post, setPost] = React.useState([])
	const [isLoad, setIsLoad] = React.useState(false)

	useQuery('getManagePost', getManagePost, {
		onSuccess: (res) => {
			if (!!res.data) setPost(res.data.reverse())
			setIsLoad(true)
		},
		onError: (err) => {
			console.log(err)
		},
	})

	const queryClient = useQueryClient()

	const updatePostMutation = useMutation(allowPost as MutationFunction, {
		onSuccess: () => {
			alert('글이 수락되었습니다.')
			queryClient.invalidateQueries('getManagePost')
		},
		onError: (err) => {
			alert('글 수락 도중 오류가 발생했습니다.')
			console.log(err)
		},
	})

	const deletePostMutation = useMutation(deletePost as MutationFunction, {
		onSuccess: () => {
			alert('글이 삭제되었습니다.')
			queryClient.invalidateQueries('getManagePost')
		},
		onError: (err) => {
			alert('글 수락 도중 오류가 발생했습니다.')
			console.log(err)
		},
	})

	useDidMountEffect(() => {
		if (user.role !== 'ADMIN') {
			router.push('/error')
		}
	}, [user])

	return (
		<div>
			{!isLoad ? (
				''
			) : (
				<>
					<Header />
					<S.ManageTitleBox>
						<S.ManageTitleText>게시글</S.ManageTitleText>
					</S.ManageTitleBox>
					<S.ManageContentWrap>
						<S.ManageContentTitle>
							<table>
								<tbody>
									<tr>
										<td>글번호</td>
										<td>글내용</td>
										<td>요청자</td>
										<td>사진</td>
										<td>카테고리</td>
										<td colSpan={2}>승인 여부</td>
									</tr>
								</tbody>
								{post.map((post: ManagePostType) => (
									<tbody key={post.postCode}>
										<tr>
											<td>{post.postCode}</td>
											<S.PostContents>{post.contents}</S.PostContents>
											<td>{post.isAnonymous ? '익명' : post.user?.name || '익명'}</td>
											<S.PostImageBox>
												<Image src={post.Image} alt="없음" className="post-img" />
											</S.PostImageBox>
											<td>{category(post.category)}</td>
											<td onClick={() => updatePostMutation.mutate(post.postCode)}>수락</td>
											{post.isAllow ? <td onClick={() => deletePostMutation.mutate(post.postCode)}>거절</td> : <td>&nbsp;&nbsp;&nbsp;</td>}
										</tr>
									</tbody>
								))}
							</table>
						</S.ManageContentTitle>
					</S.ManageContentWrap>
				</>
			)}
		</div>
	)
}

export default Manage
