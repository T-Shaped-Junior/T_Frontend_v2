import Link from 'next/link'
import React from 'react'
import BambooDark from '@/assets/bambooDark.svg'
import LocationLogo from '@/assets/location.svg'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import userState from '@/context/userState'

const Header = () => {
	const user = useRecoilValue(userState)

	return (
		<S.HeaderWrap>
			<S.TitleBoxWrap>
				<S.MainLink href="/">
					<BambooDark />
				</S.MainLink>
				<S.MainHeaderBox>
					<S.ServiceNameBox>
						<span>부산소마고 대나무숲</span>
					</S.ServiceNameBox>
					<S.ServiceNameSubBox>
						<S.ImageBox>
							<LocationLogo />
						</S.ImageBox>
						<S.NameBox>
							<S.SchoolName>Busan, Software Meister High School</S.SchoolName>
						</S.NameBox>
					</S.ServiceNameSubBox>
				</S.MainHeaderBox>
				{user.isLogin ? (
					<S.LoginNextLink href="/mypage">마이페이지</S.LoginNextLink>
				) : (
					<S.LoginLink href="https://auth.bssm.kro.kr/oauth?clientId=75711f76&redirectURI=http://localhost:3000/oauth">로그인</S.LoginLink>
				)}
			</S.TitleBoxWrap>
		</S.HeaderWrap>
	)
}

export default Header
