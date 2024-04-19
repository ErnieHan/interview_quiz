import React, { useState, useEffect } from 'react'
import './style.scss'
import { Watermark } from 'antd'

function WaterMark({ name, children }) {
  const [today, setToday] = useState('')

  useEffect(() => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2) // 補零
    const day = ('0' + currentDate.getDate()).slice(-2) // 補零
    const formattedDate = `${year}${month}${day}`
    setToday(formattedDate)
  }, [])

  return (
    <Watermark content={`${name} ${today}`} font={{ fontFamily: 'Roboto, Noto Sans TC, sans-serif' }}>
      {children}
    </Watermark>
  )
}

export default WaterMark
