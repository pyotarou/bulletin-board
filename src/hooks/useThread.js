import { useState } from "react"
import axios from "axios"

export const useThread = () => {
	const [threads, setThread] = useState([])
	const [loading, setLoading] = useState(false)

	const getThread = () => {
		setLoading(true)
		axios.get("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads").then((res) => {
			console.log(res)
			setThread(res.data)
		}).catch((err) => {
			console.error(err)
		}).finally(() => {
			setLoading(false)
		})
	}
	return { threads, loading, getThread }
}