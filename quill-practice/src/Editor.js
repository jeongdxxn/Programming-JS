import React, { useMemo } from "react";
import { useState } from "react";
import Select from 'react-select';

// import QuillTollbar, { modules, formats } from "./EditorToolbar";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
import "./Editor.css";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/ImageResize", ImageResize);

//* Quill Toolbar modules *//
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


// * Selet Component *//
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];


function Editor() {
  const [state, setState] = useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };

const customStyles = useMemo(
  () => ({
    option: (provided, state) => ({
      ...provided,
      border: "1px dotted black",
      color: state.data.color,
      opacity: 0.8,
      padding: 20,
    }),
    control: (provided) => ({
      ...provided,
      width: 500,
      background: "red",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
    }),
  }),
  []
);

  return (
    <>
      <Select options={options} styles={customStyles} />
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
    </>
  );
}

export default Editor;
