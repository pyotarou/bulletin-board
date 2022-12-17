import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CreateThread = () => {
	const navigate = useNavigate();
	const [thread, setThread] = useState("")
	const onChangeThread = useCallback((e) => {
		e.preventDefault();
		setThread(e.target.value)
	}, []);
	const onSubmit = () => {
		axios.post("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads", { title: thread }).then(res => {
			alert("スレッドが作成されました！")
			navigate("/")
		}).catch(err => {
			console.error(err);
		})
	}

	return (
		<>
			<SContainer>
				<STitle>スレッド新規作成</STitle>
				<form>
					<SInput value={thread} onChange={onChangeThread} placeholder="スレッドタイトル" />
				</form>
				<SContainer2>
					<a href="/">Topに戻る</a>
					<SButton disabled={thread === ""} type="submit" onClick={onSubmit}>作成</SButton>
				</SContainer2>
			</SContainer>
		</>
	)
}

const SContainer = styled.div`
	width: 100%;
	max-width:500px;
	margin: 0 auto;
	margin-top: 5vh;
`

const STitle = styled.h1`
	width: 100%;
	margin-top: 5vh;
`

const SInput = styled.input`
	width: 100%;
	height: 50px;
`

const SContainer2 = styled.div`
	margin-top: 3vh;
	display: flex;
	justify-content: space-around;
`

const SButton = styled.button`
	background-color: #3e943e;
	color: white;
	width: 20%;
	height: 5vh;
	font-size: 20px;
	border: none;
	border-radius: 10px;
	&:hover {
		background-color: #2a632a;
		cursor: pointer;
	}
`