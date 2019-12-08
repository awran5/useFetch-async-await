import React from "react"
import ReactDOM from "react-dom"
import useFetch from "./hooks/useFetch"

import "./styles.css"

// Set config if you want to use other Method
// Make sure to put these outside to avoid infinite loop
const url = `https://jsonplaceholder.typicode.com/users`
const options = {
  method: "GET"
}

function App() {
  // useFetch returns the data (response) and a 'Flag' to check if the server is (loading) so we need to destructuring them
  // @see hooks/useFetch.js
  const { loading, response } = useFetch(url, options)

  return (
    <div className="App">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        response.map(user => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
