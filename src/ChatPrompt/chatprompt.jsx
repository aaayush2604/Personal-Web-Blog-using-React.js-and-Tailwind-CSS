import './chatprompt.css'
import {useEffect, useState} from 'react'

const ChatPrompt=()=>{
    let flag=false;
    useEffect(()=>{
      console.log('Hello');
    },[flag])
  
    return <>
      <div className='WebChat'>
        <p className='chatprompt' onMouseEnter={()=>{flag=true}} onMouseLeave={()=>{flag=false}}>Chat with Me to Discuss Everything Books</p>
      </div>
    </>
  }

export default ChatPrompt;