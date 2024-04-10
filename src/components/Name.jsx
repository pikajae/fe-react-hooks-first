import React from 'react'
import { useState } from 'react'

const Name = () => {
  const [name1,setname] = useState("")
  const [nickname,setnickname] = useState("")

  const nameChange = e =>{
    setname(e.target.value)
  }
  const nicknameChange = e =>{
    setnickname(e.target.value)
  }

  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요"  onChange={nameChange}/>
      {/* input에 들어오는 값을 받아야 하니 nameChange와 이벤트 핸들러는 input 태그 안에 있어야 함. */}
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={nicknameChange}/>
      <p>이름: {name1}</p>
      <p>닉네임: {nickname}</p>
    </div>
  )
}

export default Name
