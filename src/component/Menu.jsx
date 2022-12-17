import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
  return (
    <>
      <SContainer>
        <h1><Sa href='/'>掲示板</Sa></h1>
        <SCreateThread href='/thread/new'>スレッドをたてる</SCreateThread>
      </SContainer>
    </>
  )
}

const SContainer = styled.div`
  background: #3e943e;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Sa = styled.a`
  color: white;
  text-decoration: none;
`

const SCreateThread = styled.a`
  color: white;
  right: 0;
`