import { useCallback, useState } from "react"
import axios from "axios"
import { baseUrl } from "../App"

export const useThread = () => {
	const [threads, setThread] = useState([])
	const url = `${baseUrl}/threads`

	const getThread = useCallback(() => {
		axios.get(url).then((res) => {
			setThread(res.data)
		}).catch((err) => {
			console.error(err)
		})
	}, [url])

	return { threads, getThread }
}