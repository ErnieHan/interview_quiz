import React from 'react'
import './style.scss'
import Header from 'components/Header'

function Layout({ children }) {
  return (
    <div className="layout_wrap">
      <Header />
      <main className="layout_main_wrap">{children}</main>
    </div>
  )
}

export default Layout
