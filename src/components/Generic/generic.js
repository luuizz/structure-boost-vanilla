import React from 'react'
import { styleGeneric } from './style.css'

export default function Generic({children}) {
  return (
    <div className={styleGeneric}>{children}</div>
  )
}
