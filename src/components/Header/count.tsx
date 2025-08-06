'use client'

import { useState } from 'react'

export const Count = () => {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount((prev) => prev + 1)
  }

  return <div onClick={onClick}>{count}</div>
}
