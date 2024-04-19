import React from 'react'
import './style.scss'
import { Button, Checkbox, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveContainer, setName, setTestID, setCountDownTimer } from 'store/actions/set'
import logo from 'images/logo-block-ai.png'
import { getCookie, writeCookie } from 'functions/cookiesLib'

function Entry() {
  let timer
  const dispatch = useDispatch()
  const name = useSelector(state => state.set.name)
  const testID = useSelector(state => state.set.testID)

  const handleSubmit = () => {
    const correct = name.trim() !== '' && testID.trim() !== ''
    if (!correct) return

    // 獲取當前時間(毫秒數)
    const currentTime = new Date().getTime()
    // 增加30分鐘(毫秒數)
    const afterThirtyMinutes = currentTime + 30 * 60 * 1000 + 1000
    writeCookie('dateline', afterThirtyMinutes)
    timer = setInterval(countdown, 1000)
    dispatch(setActiveContainer('main'))
  }

  const countdown = () => {
    const currentTime = new Date().getTime()
    const targetTime = getCookie('dateline')
    // 計算距離目標時間的時間差（以秒為單位）
    const timeDifference = Math.floor((targetTime - currentTime) / 1000)
    if (timeDifference < 0) {
      clearInterval(timer) // 停止計時器
      console.log('倒數計時結束')
      return
    }
    // 將時間差轉換為分鐘和秒
    const minutes = Math.floor(timeDifference / 60)
    const seconds = timeDifference % 60
    // 格式化時間顯示為 mm:ss
    const formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
    // 將時間顯示在控制台或其他你想要的地方
    dispatch(setCountDownTimer(formattedTime))
  }

  return (
    <div className="entry_wrap">
      <div className="entry_content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          initialValues={{
            remember: true
          }}
          style={{ minWidth: '320px' }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[
              {
                required: true,
                message: '請輸入姓名'
              }
            ]}
          >
            <Input style={{ minWidth: '240px' }} onChange={e => dispatch(setName(e.target.value))} />
          </Form.Item>

          <Form.Item
            label="試卷ID"
            name="quizId"
            rules={[
              {
                required: true,
                message: '請輸入試卷ID'
              }
            ]}
          >
            <Input style={{ minWidth: '240px' }} onChange={e => dispatch(setTestID(e.target.value))} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Button size="large" type="primary" htmlType="submit">
              開始測驗
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Entry
