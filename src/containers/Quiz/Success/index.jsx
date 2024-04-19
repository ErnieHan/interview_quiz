import React from 'react'
import './style.scss'
import logo from 'images/logo-block-ai.png'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveContainer } from 'store/actions/set'

function Main() {
  const dispatch = useDispatch()

  const redirectEntry = () => {
    window.location.href = '/'
  }

  return (
    <div className="success_wrap">
      <div className="success_content">
        {/* <div className="logo"><img src={logo} alt="" /></div> */}
        <div className="round">
          <img src="https://media4.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.gif?cid=de9bf95efd190gu32j7pqzgme77k94vx5ijgoirao18s04u4&amp;ep=v1_gifs_trending&amp;rid=giphy.gif&amp;ct=g" />
        </div>
        <h2>試卷已成功提交</h2>
        <h1>🩵 感謝您前來應試 🩵</h1>
        <div className="footer_btn">
          <div onClick={redirectEntry}></div>
        </div>
      </div>
    </div>
  )
}

export default Main
