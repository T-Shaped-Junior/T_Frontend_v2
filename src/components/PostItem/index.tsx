import PostItemType from '@/types/PostItemType'
import React from 'react'
import * as S from './style'

const PostItem = ({ category, isAnonymous, contents, allowCode, image, user }: PostItemType) => {
	return (
		<S.ContentBoxWrap>
			<S.ContentBox>
				<S.HeaderInfoBox>
					<span>부마숲 {allowCode}번째 이야기</span>
					<S.DateTextBox>
						|
						<S.CategoryText>
							#
							{category
								.replace('free', '자유')
								.replace('worries', '고민')
								.replace('complaints', '불만')
								.replace('questions', '질문')
								.replace('suggestions', '건의')}
						</S.CategoryText>
						<S.DateText>{isAnonymous ? '익명' : `${user.grade}학년 ${user.class}반 ${user.name}`}님 제보</S.DateText>
					</S.DateTextBox>
					<S.AuthorTextBox>
						<S.AuthorText>2023년 1월 22일 일요일 4시 32분</S.AuthorText>
					</S.AuthorTextBox>
				</S.HeaderInfoBox>
				<S.ContentLine />
				<S.TextBox>
					<span className="content_text">{contents.replace(/<br>/gi, '\n')}</span>
					{image ? <S.PostImage src={image} alt="img" /> : ''}
				</S.TextBox>
			</S.ContentBox>
		</S.ContentBoxWrap>
	)
}

export default React.memo(PostItem)
