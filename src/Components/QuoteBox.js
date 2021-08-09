import "./styles/QuoteBox.css"

function QuoteBox(){
    return(
      <div className="quote-container">
          <p className="quote-text">What you seek is seeking you</p>
          <p className="quote-author">Rumi</p>
          <div className="quote-controls">
              <button className="quote-control-btn">Next</button>
          </div>
      </div>
    );
}

export default QuoteBox;