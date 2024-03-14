/* istanbul ignore file */
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://instagram.com/ubaculturatrance'
  }, [])
  return <div>Redirecionando...</div>
}
