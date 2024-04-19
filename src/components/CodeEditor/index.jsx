import React, { useState } from 'react'
import './style.scss'
import CodeMirror from '@uiw/react-codemirror'
import { basicLight } from '@uiw/codemirror-theme-basic'
import { javascriptLanguage } from '@codemirror/lang-javascript'
import { htmlLanguage } from '@codemirror/lang-html'
import { sassLanguage } from '@codemirror/lang-sass'
import { javaLanguage } from '@codemirror/lang-java'
import { sql } from '@codemirror/lang-sql'

function CodeEditor({ codeText, codeLang }) {
  const [code, setCode] = useState(codeText)
  const [lang, setLang] = useState(codeLang)

  const _currentLanguage = () => {
    switch (lang) {
      case 'javascript':
        return javascriptLanguage
      case 'css':
        return sassLanguage
      case 'html':
        return htmlLanguage
      case 'java':
        return javaLanguage
      case 'sql':
        return sql()
      default:
        return javascriptLanguage
    }
  }

  const editCode = (editor, data, value) => {
    setCode(editor)
  }

  return (
    <div className={`code_editor_wrapper`}>
      <div className="question">
        <CodeMirror
          value={codeText}
          theme={basicLight}
          onChange={editCode}
          maxWidth="980px"
          height="200px"
          extensions={[_currentLanguage()]}
          editable={false}
          readOnly={true}
        />
      </div>
      <div className="answer">
        <p>請在以下區塊作答:</p>
        <CodeMirror
          value={code}
          theme={basicLight}
          onChange={editCode}
          maxWidth="980px"
          height="200px"
          extensions={[_currentLanguage()]}
        />
      </div>
    </div>
  )
}

export default CodeEditor
