import "./App.css";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";

// 

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

const Editor = styled.div`
  width: 1000px;
  height: 500px;
`;

function App() {
  return (
    <Container>
      <Editor>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
          }}
        />
      </Editor>
    </Container>
  );
}

export default App;
