import React from 'react'

export default function About() {
  return (
    <>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h1>This App has following features:- </h1>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Convert to Upper Case
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        This will convert the text which the user enters in textarea to upper
        case.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        Convert to lower case
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        This will convert the text which the user enters in textarea to Lower
        case.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Copy text
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        This allow you to copy the text in the textarea to your clipboard.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Clear
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        This allow you to clear the text in the textarea.
      </div>
    </div>
  </div>
</div>

    </>
  )
}
