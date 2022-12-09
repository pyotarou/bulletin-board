import React from 'react'
import styled from 'styled-components'

const Menu = () => {
  return (
    <>
      <SContainer>
        <SService>掲示板</SService>
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

const SService = styled.h1`
  color: white;
`

const SCreateThread = styled.a`
  color: white;
  right: 0;

`

export default Menu