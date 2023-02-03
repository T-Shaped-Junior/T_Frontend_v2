import AllowPostType from '@/types/AllowPostType'
import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import PostItem from '../PostItem'
import * as S from './style'

const AllPost = () => {
	const [postData, setPostData] = useState([])

	useQuery('getPost', () => axios.get('/post'), {
		onSuccess: (res) => {
			setPostData(res.data.reverse())
		},
		onError: (err) => {
			console.log(err)
		},
	})

	return (
		<S.AllPostWrap>
			<S.ArticleTitleBox>
				<S.ArticleTitleText>모든 이야기들</S.ArticleTitleText>
			</S.ArticleTitleBox>
			<React.Suspense>
				{postData.map((data: AllowPostType) => (
					<PostItem
						key={data.post.postCode}
						category={data.post.category}
						isAnonymous={data.post.isAnonymous}
						contents={data.post.contents}
						allowCode={data.AllowedCode}
						image={data.post.Image}
						user={data.post.user}
					/>
				))}
			</React.Suspense>
		</S.AllPostWrap>
	)
}

export default AllPost
