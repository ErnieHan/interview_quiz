import React from 'react'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveContainer } from 'store/actions/set'
import { Button } from 'antd'
import isArray from 'functions/isArray'
import QuestionItem from 'components/QuestionItem'
import WaterMark from 'components/WaterMark'

function Main() {
  const dispatch = useDispatch()
  const name = useSelector(state => state.set.name)

  const _quiz = [
    {
      subject: 'javascript',
      type: 'choice',
      question: '在 JavaScript 中，以下哪個語句可以用來判斷一個數字是否是奇數？',
      answers: [
        { text: 'if (number % 2 == 0)' },
        { text: 'if (number % 2 == 1)' },
        { text: 'if (number / 2 == 0)' },
        { text: 'if (number / 2 == 1)' }
      ],
      code: null
    },
    {
      subject: 'javascript',
      type: 'shortAnswer',
      question: '請簡答你對clean code的看法？',
      answers: null,
      code: null
    },
    {
      subject: 'javascript',
      type: 'debug',
      question: '以下程式碼中何者有誤？',
      answers: null,
      code: `const apple = () => {
        return 'apple'
      }`
    },
    {
      subject: 'javascript',
      type: 'choice',
      question: '在 JavaScript 中，以下哪個語句可以用來判斷一個數字是否是奇數？',
      answers: [
        { text: 'if (number % 2 == 0)' },
        { text: 'if (number % 2 == 1)' },
        { text: 'if (number / 2 == 0)' },
        { text: 'if (number / 2 == 1)' }
      ],
      code: null
    },
    {
      subject: 'javascript',
      type: 'shortAnswer',
      question: '請簡答你對clean code的看法？',
      answers: null,
      code: null
    },
    {
      subject: 'javascript',
      type: 'debug',
      question: '以下程式碼中何者有誤？',
      answers: null,
      code: `const apple = () => {
        return 'apple'
      }`
    },
    {
      subject: 'javascript',
      type: 'choice',
      question: '在 JavaScript 中，以下哪個語句可以用來判斷一個數字是否是奇數？',
      answers: [
        { text: 'if (number % 2 == 0)' },
        { text: 'if (number % 2 == 1)' },
        { text: 'if (number / 2 == 0)' },
        { text: 'if (number / 2 == 1)' }
      ],
      code: null
    },
    {
      subject: 'javascript',
      type: 'shortAnswer',
      question: '請簡答你對clean code的看法？',
      answers: null,
      code: null
    },
    {
      subject: 'javascript',
      type: 'debug',
      question: '以下程式碼中何者有誤？',
      answers: null,
      code: `const apple = () => {
        return 'apple'
      }`
    }
  ]

  const submitQuiz = () => {
    dispatch(setActiveContainer('success'))
  }

  return (
    <div className="quiz_wrapper">
      <WaterMark name={name}>
        <div className="content">
          {isArray(_quiz) &&
            _quiz.map((quiz, index) => <QuestionItem key={index} itemNumber={index + 1} data={quiz} />)}
          <div className="submit">
            <Button size="large" type="primary" style={{ width: 140 }} onClick={submitQuiz}>
              提交試卷
            </Button>
          </div>
        </div>
      </WaterMark>
    </div>
  )
}

export default Main
