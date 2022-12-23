import React from 'react'
import ReactMarkdown from 'react-markdown'
function Markdown({markText,setMarkText}) {
  return (
   <div>
    <ReactMarkdown children={markText} ></ReactMarkdown>
   </div>
  )
}

export default Markdown
