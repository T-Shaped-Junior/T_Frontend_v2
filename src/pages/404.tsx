import Header from '@/components/Header'
import React from 'react'
import * as S from '@/styles/NotFound'

const NotFound = () => {
	return (
		<>
			<Header />
			<S.NotFoundWrap>
				<S.NotFoundPage>해당 페이지가 존재하지 않습니다.</S.NotFoundPage>
				<S.ToHomeLink href="/">홈으로 돌아가기</S.ToHomeLink>
			</S.NotFoundWrap>
		</>
	)
}

export default NotFound
