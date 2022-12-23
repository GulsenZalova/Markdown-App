import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function EditNote({markText,setMarkText}) {
  return (
    <div className='edit'>
        <h1>Edit</h1>
    <textarea name="" id="" cols="30" rows="10"  onChange={(e)=>setMarkText(e.target.value)} ></textarea>
 </div>
  )
}

export default EditNote
