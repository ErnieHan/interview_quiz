import React from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import Layout from 'containers/Layout'
import Entry from 'containers/Quiz/Entry'
import Main from 'containers/Quiz/Main'
import Success from 'containers/Quiz/Success'

function Quiz() {
  const activeContainer = useSelector(state => state.set.activeContainer)

  return (
    <Layout>
      {activeContainer === 'entry' && <Entry />}
      {activeContainer === 'main' && <Main />}
      {activeContainer === 'success' && <Success />}
    </Layout>
  )
}

export default Quiz
