import "./styles/Switcher.css";

function Switcher() {
    
    function switchHandler() {
        const box = document.querySelector(".moving-box");
        if(box.classList.contains("move-right-anime")){//The Right Side Option Is Selected
            box.style.left = "50%";
            box.classList.remove("move-right-anime");
            box.classList.add("move-left-anime"); 
        }else{//otherwise the left side option is selected
            box.style.left = "0";
            box.classList.remove("move-left-anime");
            box.classList.add("move-right-anime");
            
        }
    }

    return (
        <div className="switcher-container">
            <div className="moving-box"></div>
            <p className="switch-box" id="quote-switch" onClick={switchHandler}>Quotes</p>
            <p className="switch-box" id="joke-switch" onClick={switchHandler}>Jokes</p>
        </div>
    );
}

export default Switcher;