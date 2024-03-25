import React,{useState} from 'react'



export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) =>{
        console.log(" On change");
        setText(event.target.value);
        
    }
    

    
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
                <textarea className="form-control" placeholder="Enter text here" id="myBox" onChange={handleOnChange} value={text} rows="5"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={() => setText(text.toUpperCase())}>Convert to Uppercase</button>
       <button className="btn btn-success mx-2" onClick={() => setText(text.toLowerCase())}>Convert to Lowercase</button>
       
    </div>
    <div className='container my-3'>
       <h3>Your Text Summary</h3>
       <p>{text.split(" ").length} Words and {text.length} Characters.</p>
      <p>{0.008 * text.split(" ").length} Minutes to read </p> 
       <h3>Preview</h3>
       <p>{text}</p>
    </div>
    </>
  )
}
