import React, { useState } from 'react'
import './style.scss'
import isArray from 'functions/isArray'
import { Input, Radio } from 'antd'
import CodeEditor from 'components/CodeEditor'

const { TextArea } = Input

function QuestionItem({ itemNumber, data }) {
  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.target.value)
  }

  const _answerKey = index => {
    if (index == 0) return 'A'
    if (index == 1) return 'B'
    if (index == 2) return 'C'
    if (index == 3) return 'D'
  }

  return (
    <div className="question_item_wrapper">
      <div className="question">
        {itemNumber}. {data?.question}
      </div>
      {data.type === 'choice' && (
        <Radio.Group onChange={onChange} value={value}>
          {isArray(data?.answers) &&
            data?.answers?.map((answer, index) => (
              <div className="answer_item" key={index}>
                <div className="answer_icon"></div>
                <Radio value={_answerKey(index)}>
                  <span className="key">{`(${_answerKey(index)})`}</span>
                  <span className="text">{answer?.text}</span>
                </Radio>
              </div>
            ))}
        </Radio.Group>
      )}
      {data.type === 'shortAnswer' && (
        <TextArea style={{ width: 520 }} value={value} autoSize={{ minRows: 4, maxRows: 4 }} onChange={onChange} />
      )}
      {data.type === 'debug' && (
        <div>
          <CodeEditor codeText={data.code} codeLang={data.subject} />
        </div>
      )}
    </div>
  )
}

export default QuestionItem
