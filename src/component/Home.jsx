import { Suspense, useEffect } from "react";
import { MutatingDots } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useThread } from "../hooks/useThread";

export const Home = () => {
	const { threads, getThread } = useThread()
	const navigation = useNavigate()

	useEffect(() => {
		getThread()
	}, [getThread])

	return (
		<>
			<SContainer>
				<h1>新着スレッド</h1>
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
					<>
						{threads.map((thread) => (
							<SThread key={thread.id} onClick={() => {
								navigation("/thread/" + thread.id, { state: { title: thread.title } })
							}}>{thread.title}</SThread>
						))}
					</>
				</Suspense>
			</SContainer>
		</>
	)
}

const SContainer = styled.div`
	text-align: center;
	width: 100%;
	margin-top: 5vh;
`

const SThread = styled.p`
	border: 1px solid;
	height: 50px;
	max-width: 500px;
	margin: 0 auto;
	background: white;
`