import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("converted to Lower", "success");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text is cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //sentence case 
  const handleSentenceCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence;
      })
      .join("");

    setText(newText);
      props.showAlert("converted to Sentence Case", "success");
  };
  // copy
  const handleLoCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("The text is copied", "success");

  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
          props.showAlert("Its speeking...", "success");
  };

  const [text, setText] = useState("Enter the text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to LowerCase </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCaseClick}> Sentence Case </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoCopy}> Copy Text </button>
          <button disabled={text.length===0} type="submit mx-1" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle"> Speak </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summery</h1>
        <p>
          <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
          <p>Time to Read {0.01 * text.split(" ").length} Minuts</p>
        <h3>Preview text</h3>
          <p>{text.length>0?text: "Enter something in the textbox above to Preview"}</p>
        </p>
      </div>
    </>
  );
}
