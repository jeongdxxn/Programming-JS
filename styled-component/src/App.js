import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

// 전역 스타일링
const GlovalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

function App() {
  return (
    <Container>
      <GlovalStyle />
      <Button>Hello</Button>
      <Button danger rotationTime={5}>Hello</Button>
      <Anchor href='http://google.com'>Go to google</Anchor>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #222;
`
const Button = styled.button`
  border-radius: 50px;
  min-width: 120px;
  padding: 5px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "red" : "gray")};
  ${props => {
    if(props.danger){
      return css` // 함수의 return 값으로 css를 전달할때는 return 값에 css를 적용시켜줘야 한다
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`

// Button태그의 스타일링 컴포넌트를 a태그에 적용시키기만 할때
// -> const Anchor = Button.withComponent('a')`
// Button태그의 스타일링 컴포넌트를 적용시키고 추가할 때
const Anchor = styled(Button)`
  text-decoration : none;
  background-color: green;
`;

// animation
const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export default App;
