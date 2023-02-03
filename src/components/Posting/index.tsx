import createPost from '@/api/createPost'
import userState from '@/context/userState'
import Image from 'next/image'
import CheckLogo from '@/assets/checkImg.svg'
import PostLogo from '@/assets/postImg.svg'
import React, { useState } from 'react'
import { MutationFunction, useMutation, useQueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const Posting = () => {
	const [prevent, setPrevent] = useState(false)
	const [contents, setContents] = useState('')
	const [isAnonymous, setIsAnonymous] = useState(true)

	const queryClient = useQueryClient()

	const { mutate } = useMutation(createPost as MutationFunction, {
		onSuccess: () => {
			queryClient.invalidateQueries('getManagePost')
			setPrevent(false)
			window.location.reload()
		},
		onError: (err) => {
			alert('오류가 발생했습니다.')
			console.log(err)
			setPrevent(false)
		},
	})

	const user = useRecoilValue(userState)
	const [image, setImage] = React.useState('')
	const [imageType, setImageType] = React.useState('')
	const [option, setOption] = React.useState('free')
	const [textareaHeight, setTextareaHeight] = React.useState({
		row: 1,
		lineBreak: [],
	})

	const resizeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { scrollHeight, clientHeight, value } = e.target

		if (scrollHeight > clientHeight) {
			setTextareaHeight((prev) => ({
				row: prev.row + 1,
				lineBreak: { ...prev.lineBreak, [value.length - 1]: true } as any,
			}))
		}
		if (textareaHeight.lineBreak[value.length]) {
			setTextareaHeight((prev) => ({
				row: prev.row - 1,
				lineBreak: { ...prev.lineBreak, [value.length]: false } as any,
			}))
		}
	}

	const onKeyEnter = (e: KeyboardEvent & React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.code === 'Enter') {
			setTextareaHeight((prev) => ({
				row: prev.row + 1,
				lineBreak: { ...prev.lineBreak, [e.target.value.length]: true } as any,
			}))
		}
	}

	const encodeFileToBase64 = (fileBlob: any) => {
		setImageType(fileBlob.type.replace('image/', ''))
		if (
			fileBlob.type !== 'image/png' &&
			fileBlob.type !== 'image/jpg' &&
			fileBlob.type !== 'image/jpeg' &&
			fileBlob.type !== 'image/webp' &&
			fileBlob.type !== 'image/gif'
		) {
			alert('올바른 사진 형식이 아닙니다. 파일을 다시 확인해주세요.')
			window.location.reload()
			return
		} else {
			const reader = new FileReader()
			reader.readAsDataURL(fileBlob)
			return new Promise((resolve) => {
				reader.onload = () => {
					setImage(reader.result as any)
					resolve('')
				}
			})
		}
	}

	const postingPost = async () => {
		setPrevent(true)

		if (!user.isLogin) {
			alert('로그인 상태를 확인할 수 없습니다. 로그인 후에 글을 작성하실 수 있습니다.')
			setPrevent(false)
			return
		}

		if (!contents) {
			alert('내용이 비어있습니다. 제보 내용을 다시 한 번 확인해주세요.')
			setPrevent(false)
			return
		}

		if (contents.length > 5000) {
			alert('내용이 제한을 초과했습니다. 5000자 이내로 작성해주세요.')
			return
		}

		mutate({
			option,
			isAnonymous,
			contents,
			image,
			imageType,
		})
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<S.ArticleWrap>
				<S.ArticleBox>
					<S.PostTitleBox>
						<S.PostingBox>
							<S.PostingWrap>
								<input
									type="file"
									onChange={(e) => {
										encodeFileToBase64(!!e.target.files ? e.target.files[0] : '')
									}}
									accept="image/png, image/gif, image/jpg"
									disabled={!user.isLogin}
								/>
								<S.PreviewImg>{image ? <Image src={image || ''} alt="" /> : ''}</S.PreviewImg>
								<S.AnonyButtonWrap onClick={() => setIsAnonymous(!isAnonymous)}>
									<S.AnonyButtonSpan>익명</S.AnonyButtonSpan>
									<S.AnonyButton type="button" style={isAnonymous ? { backgroundColor: 'green' } : {}}>
										{isAnonymous ? <CheckLogo /> : ''}
									</S.AnonyButton>
								</S.AnonyButtonWrap>
								<S.PostSelectWrap>
									<select
										onChange={(e) => {
											setOption(e.target.value)
										}}>
										<option value={'free'}>자유</option>
										<option value={'worries'}>고민</option>
										<option value={'questions'}>질문</option>
										<option value={'complaints'}>불만</option>
										<option value={'suggestions'}>건의</option>
									</select>
								</S.PostSelectWrap>
								<S.PostButtonWrap>
									<S.PostButton type="button" onClick={postingPost} disabled={prevent}>
										<PostLogo />
										<span>제보</span>
									</S.PostButton>
								</S.PostButtonWrap>
							</S.PostingWrap>
						</S.PostingBox>
					</S.PostTitleBox>
					<S.EditorBox>
						<S.Textarea
							className="editor"
							autoComplete="off"
							onInput={resizeTextarea}
							onKeyDown={onKeyEnter as unknown as React.KeyboardEventHandler<HTMLTextAreaElement>}
							rows={textareaHeight.row}
							onChange={(e) => setContents(e.target.value)}
							value={contents}
							disabled={!user.isLogin}
							placeholder={!user.isLogin ? '로그인 후 글을 작성하실 수 있습니다.' : ''}
						/>
						<S.LengthBox>
							<span>{contents?.length || 0}/5000</span>
						</S.LengthBox>
					</S.EditorBox>
					{/* <AllPost /> */}
				</S.ArticleBox>
			</S.ArticleWrap>
		</form>
	)
}

export default Posting
