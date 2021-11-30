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
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #222;
`

export default App;
