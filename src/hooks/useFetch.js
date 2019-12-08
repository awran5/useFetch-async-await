import { useState, useCallback, useEffect } from "react"

function useFetch(url, options) {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)

  const memorizeState = useCallback(() => {
    async function serverFetch(api, config) {
      setLoading(true)
      try {
        const resolve = await fetch(api, config)
        const data = await resolve.json()
        setResponse(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        return console.error(error)
      }
    }
    // Calling the function with main args
    serverFetch(url, options)
  }, [url, options])

  useEffect(() => {
    memorizeState()
  }, [memorizeState])
  // returning hook state
  return { response, loading }
}

export default useFetch
