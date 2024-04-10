import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const Counter2 = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // useState와 useEffect를 둘다 사용해주셔서 진행해주시면 됩니다!
  const [count,setcount] = useState(0); //유동적으로 변하는 parameter, 그것을 컨트롤하는 함수명 , parameter의 초기값. setcount(~)의 형태로 사용됨.
  const [text,SetText] = useState("");

  const Increase =  () =>{
    setcount(count+1); //count의 값을 조정하기 위해 setcount함수로 건드려줌. -> count에 1을 더해주는 함수는 Increase로 설정
  }
  const Textchange = e => {
    SetText(e.target.value) //input에 담긴 값을 담아오는 역할. 
  }

  useEffect(()=>{
    console.log("렌더링이 완료되었습니다.")
  },[])

  useEffect(()=>{
    console.log("Count 값이 변경되었습니다") //usestate는 유동적으로 변하는 '변수' useeffect는 유동적으로 변하는 변수에 대한 상황.
  },[count])

  useEffect(()=>{
    console.log("text 값이 변경되었습니다.") //text값이 변할때마다 함수내부의 사항을 실행해 update
  },[text])
  return ( //출력부 구성에 관한 이야기
    <div className="counter">
      <h>Counter 2</h>
      <hr></hr>
      <h3>{count}</h3>
      {/* count값을 표시 */}
      <button onClick={Increase}>+1</button>
      {/* 태그 꺾새 안에 버튼의 기능을 추가 (onclick이라는 이벤트 핸들러 사용. -> onclick일때 Increase함수 사용, 버튼 내부에는 "+1"문구 표시) */}
      <hr></hr> 
      <input type={'text'} onChange={Textchange}></input>
      {/* input 태그는 여러 형태로 지정 가능 (color,submit,text,checkbox..)이 중 type="~"으로 어떤 역할을 input태그가 수행할 것인지 정하는거임.
      태그의 별명을 정하는 식별자 (class,name,id)와는 기능이 다름. */}
      <h3>{text}</h3> 

    </div>
  )
}

export default Counter2
