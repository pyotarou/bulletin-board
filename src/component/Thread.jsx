import axios from 'axios'
import React, { Suspense } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { baseUrl } from '../App'
import { MutatingDots } from 'react-loader-spinner'

export const Thread = () => {
	const { thread_id } = useParams()
	const location = useLocation()
	const [title] = useState(location.state)
	const [posts, setPosts] = useState([])
	const [postingContent, setPosting] = useState("")
	const url = `${baseUrl}/threads/${thread_id}/posts`

	const onChangePost = useCallback((e) => {
		e.preventDefault();
		setPosting(e.target.value)
	}, [])

	const getPosts = useCallback(() => {
		axios.get(url).then(res => {
			setPosts(res.data.posts)
		}).catch(err => {
			console.error(err)
		})
	}, [url])

	const postingSubmit = () => {
		setPosts([{ id: Math.random(), post: postingContent }, ...posts])
		axios.post(url, { post: postingContent }).then(() => {
			setPosting("")
		}).catch(err => {
			console.error(err)
		})
	}

	useEffect(() => {
		getPosts()
	}, [getPosts])

	return (
		<>
			<SContents>
				<STitle>{title.title}</STitle>
				<SPosts>
					{posts === null ? (
						<p>投稿がありません</p>
					) : (
						<Suspense fallback={<MutatingDots
							height="100"
							width="100"
							color="#4fa94d"
							secondaryColor='#4fa94d'
							radius='12.5'
							ariaLabel="mutating-dots-loading"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
						/>}>
							<div>
								{posts.map((post) => (
									<SPost key={post.id}>{post.post}</SPost>
								))}
							</div>
						</Suspense>
					)}
				</SPosts>
				<SForm>
					<form>
						<STextarea value={postingContent} onChange={onChangePost} placeholder="投稿しよう！" />
					</form>
					<SButton disabled={postingContent === ""} onClick={postingSubmit}>投稿</SButton>
				</SForm>
			</SContents>
		</>
	)
}

const SContents = styled.div`
  width: 100%;
	margin: 0 auto;
`

const STitle = styled.h1`
	width: 100%;
	padding-left: 5%;
`

const SPosts = styled.div`
	width: 50%;
	margin-left: 5%;
	float: left;
`
const SPost = styled.p`
  background-color: white;
  padding: 5%;
  width: 100%;
`

const SForm = styled.div`
	width: 30%;
	position: fixed;
	right: 0;
	margin-right: 5%;
`

const STextarea = styled.textarea`
	width: 100%;
  padding: 5%;
	height: 100px;
	border: none;
`

const SButton = styled.button`
	background-color: #3e943e;
	color: white;
	width: 100%;
	margin: 5%;
	padding: 5%;
	font-size: 20px;
	border: none;
	border-radius: 10px;
	&:hover {
		background-color: #2a632a;
		cursor: pointer;
	}
`