import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpercase = () => {
        console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        setText1(newText);
    }
    const handleCapitalize = () => {
        let words = text.split(" ");
        let capitalize = "";
        words.forEach(element => {
            capitalize += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText1(capitalize);
    }
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText1(newText);
    }
    const handleclear = () => {
        setText("");
    }
    const handleclear1 = () => {
        setText1("");
    }
    const handleTextExtract = () => {
        const regex = /[0-9/A-Z/a-z//]/g;
        const letters = text.match(regex);
        let newText = letters.join(' ');
        setText1(newText);
    }
    const handleExtraSpace = () =>{
        let newText  = text.split(/[ ]+/);
        setText1(newText.join(" "));
    }
    const handleCopy = () =>{
        let getText = document.getElementById("myBox1");
        getText.select();
        navigator.clipboard.writeText(getText.value);
    }
    const handleOnChangge = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here...");
    const [text1, setText1] = useState("Here you will go...");
  
    return (
        <>
        <div style={{color : props.mode==='dark'?'white':'black'}}>
            <div className="row my-4" style={{marginTop: 10}}>
                <div className="col-lg-6 col sm6">
                    <h2>{props.heading1}</h2>
                    <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChangge} id="myBox" rows="11"></textarea>
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <button className="btn btn-sm btn-primary mx-1 my-2" onClick={handleCapitalize}>Capitalize</button>
                            <button className="btn btn-sm btn-primary mx-1 my-2" onClick={handleUpercase}>Upercase</button>
                            <button className="btn btn-sm btn-primary mx-1 my-2" onClick={handleLowercase}>Lowercase</button>
                            <button className="btn btn-sm btn-primary mx-1 " onClick={handleclear}>Clear Text</button>
                            <button className="btn btn-sm btn-primary mx-1 " onClick={handleTextExtract}>Remove Symbols</button>
                            <button className="btn btn-sm btn-primary mx-1 " onClick={handleExtraSpace}>Remove Extra Spaces</button>                            
                        </div>
                        <div className="col-md-4 col-sm-6 my-3">
                            <p align="right"><strong>Text Summary</strong><br></br>{text.split(' ').filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style={{color : props.mode==='dark'?'white':'black'}}>
                    <h2>{props.heading2}</h2>
                        <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'grey':'white'}} value={text1} onChange={handleOnChangge} id="myBox1" rows="11"></textarea>
                     <div className="row">
                         <div className="col-md-8">
                             <button className="btn btn-md btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
                            <button className="btn btn-md btn-primary mx-1 " onClick={handleclear1}>Clear Text</button>
                         </div>
                         <div className="col-md-4 my-3">
                             <p align="right"><strong>Text Summary</strong><br></br>{text1.split(' ').filter((element)=>{return element.length!==0}).length} words, {text1.length} characters</p>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </>
  )
}
