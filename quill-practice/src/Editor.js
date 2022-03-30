import "./Editor.css";
import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
// import QuillTollbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";

import { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
Quill.register("modules/ImageResize", ImageResize);

//* 툴바 모듈 *//
const modules = {
  toolbar: [
    [{ 'font': []}],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
  //* 이미지 크기 조절 *//
  ImageResize: {
    parchment: Quill.import("parchment"),
  },
};

function Editor() {
  const [state, setState] = useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className="editor">
      <div className="text-editor">
        {/* <QuillTollbar /> */}
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder={"Write something awesome.."}
          modules={modules}
          // formats={formats}
        />
      </div>
    </div>
  );
}

export default Editor;
