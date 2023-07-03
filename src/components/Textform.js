import React, { useState } from 'react';



export default function Textform() {
    const clearTextarea = ()=>{
        const newText = '';
        setText(newText);
    };
    const handleCopyClick = ()=>{
        var text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
    };
    const handleUpClick = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
    };
    const handleLoClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
    };
    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
    const [text, setText] = useState('Enter text here');
  return (
    <>
  <div className="container">
    <div className="mb-3 mx-3 my-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h2>Enter the text here:-</h2>
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={10}
        value={text}
        onChange={handleOnChange}
        defaultValue={""}
      />
    </div>
    <button
      type="button"
      className="btn btn-outline-primary my-3 mx-3"
      onClick={handleUpClick}
    >
      Convert to Upper case
    </button>
    <button
      type="button"
      className="btn btn-outline-primary my-3 mx-3"
      onClick={handleLoClick}
    >
      Convert to Lower case
    </button>
    <button
      type="button"
      className="btn btn-outline-primary my-3 mx-3"
      onClick={handleCopyClick}
    >
      Copy Text
    </button>
    <button
      type="button"
      className="btn btn-outline-primary my-3 mx-3"
      onClick={clearTextarea}
    >
      Clear textarea
    </button>
  </div>
  <div className="container">
    <h2>Your text summary:-</h2>
    <p>
      It has {text.split(" ").length} words and {text.length} chareacters.
    </p>
    <h3>You have entered:-</h3>
    <p>
      {text}
    </p>
  </div>
</>
  )
}
