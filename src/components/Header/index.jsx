import React from 'react'
import './style.scss'
import { useSelector } from 'react-redux'
import logo from 'images/logo.png'
import AlarmIcon from '@mui/icons-material/Alarm'

function Header() {
  const activeContainer = useSelector(state => state.set.activeContainer)
  const name = useSelector(state => state.set.name)
  const countdownTimer = useSelector(state => state.set.countdownTimer)

  return (
    <header className="header_wrap">
      <div className="left_wrap">
        <img className="logo" src={logo} alt="" />
      </div>
      {activeContainer === 'main' && (
        <div className="right_wrap">
          <div className="name">
            受試者 <span>{name}</span>
          </div>
          <div className="alarm">
            <AlarmIcon style={{ marginRight: '4px' }} />
            {countdownTimer} / 30:00
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
