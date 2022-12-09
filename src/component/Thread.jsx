import { useEffect } from "react";
import styled from "styled-components";
import { useThread } from "../hooks/useThread";

export const Thread = () => {
	const { threads, loading, getThread } = useThread();
	useEffect(() => {
		getThread()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<>
			<SContainer>
				<h1>新着スレッド</h1>
				{loading ? (
					<></>
				) : (
					<>
						{threads.map((thread) => (
							<SThread key={thread.id}>{thread.title}</SThread>
						))}
					</>
				)}
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