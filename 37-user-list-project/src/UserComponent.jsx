import { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserComponent() {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/').then((res) => {
      setUsers(res.data.slice(0, 10))
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (!users) return null
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
