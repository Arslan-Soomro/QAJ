import "./styles/QuoteBox.css"
import { useState } from "react";

function QuoteBox(props){

    let [contentText, setContentText] = useState("What you seek is seeking you");
    let [authorText, setAuthorText] = useState("Rumi");

    async function nextHandler(){
        if(document.querySelector(".moving-box").classList.contains("move-right-anime")){//If jokes is selected
            const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
            const data = await response.json();
            //console.log(data.setup + "\n" + data.punchline);
            setContentText(data.setup + ' ' + data.punchline);
            setAuthorText("");
        }else{ //if quotes is selected
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            setContentText(data.content);
            setAuthorText(data.author);
        }
    }

    return(
      <div className="quote-container">
          <p className="quote-text">{contentText}</p>
          <p className="quote-author">{authorText}</p>
          <div className="quote-controls">
              <button className="quote-control-btn" onClick={nextHandler}>Next</button>
          </div>
      </div>
    );
}

export default QuoteBox;