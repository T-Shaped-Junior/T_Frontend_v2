import React from 'react'
import { useRecoilValue } from 'recoil'
import userState from '@/context/userState'
import Header from '@/components/Header'
import Link from 'next/link'
import * as S from '@/styles/MyPage'
import Image from 'next/image'

const MyPage = () => {
	const user = useRecoilValue(userState)

	const onDefaultProfile = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		if (e.target instanceof HTMLImageElement) {
			e.target.src = 'https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75'
		}
	}

	return (
		<S.MyPageWrap>
			<React.Suspense>
				<Header />
			</React.Suspense>
			<S.MyProfileTitleBox>
				<S.MyProfileTitle>유저 정보</S.MyProfileTitle>
			</S.MyProfileTitleBox>
			<S.MyProfileImageBox>
				<S.MyProfileImage
					src={`https://auth.bssm.kro.kr/_next/image?url=https%3A%2F%2Fauth.bssm.kro.kr%2Fresource%2Fuser%2Fprofile%2F${user.code}.png&w=256&q=75`}
					onError={onDefaultProfile}
				/>
			</S.MyProfileImageBox>
			<S.UserInfoWrap>
				<S.UserNicknameBox>
					<S.UserNickname>{user.name || '익명'}</S.UserNickname>
				</S.UserNicknameBox>
				<S.UserSchoolInfoBox>
					{user.isLogin ? (
						<>
							<span>{user.grade || '?'}학년</span>
							<span>{user.class || '?'}반</span>
							<span>{user.name || '익명'}</span>
						</>
					) : (
						<span>로그인이 필요합니다.</span>
					)}
				</S.UserSchoolInfoBox>
				{user.role === 'ADMIN' ? (
					<div className="management_page">
						<Link href="/manage" className="management_button">
							관리자 페이지
						</Link>
					</div>
				) : null}
			</S.UserInfoWrap>
		</S.MyPageWrap>
	)
}

export default MyPage
