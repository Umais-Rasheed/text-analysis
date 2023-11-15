import React from "react";

export default function about() {
  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Join the millions of happy users.
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <div className="accordion-body">
              <strong>“On a recent test run of all three services, Text Free was the fastest, most reliable and easiest to use."</strong>
              "I have been using Text Free for nearly a decade. It has saved me so much money and headache." <code>.www.TextUtails1.com</code>,
              "I’ve had other free text and phone number apps and they don’t compare to this one."
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Start With the Title
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              but students should spend a few seconds thinking about the title of the reading assignment.
              This sets the stage for what comes ahead. For example, if you have assigned a chapter in an
              American History course titled, "The Great Depression and the New Deal: 1929-1939," then students
              would get a clue that they will be learning about these two topics that occurred during those
              specific years. about any HTML can go within the <code> This might seem obvious,</code>, though
              the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              READ AROUND THE TEXT
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Students are given a structured approach for reading and studying content material.</strong><br />
              <code>SURVEY:</code>  look at titles, intro paragraphs, bold face words, summary paragraphs<br />
              <code>QUESTION:</code>  use questions provided at the beginning of the chapter or turn headings into questions.<br />
              <code>READ:</code> Read to answer the purpose questions. <br />
              <code>RECITE:</code> Review what you read by trying to answer questions without referring back to the notes.<br />
              <code>REVIEW:</code> reread parts of the text or notes, verify answers to questions.<br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
