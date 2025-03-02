import { useState, useRef } from 'react';

const Textform = (props) => {
  const [text, setText] = useState('');
  const textAreaRef = useRef(null);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted To UpperCase")
   
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted To LowerCase")
  };

  const handleClear = () => {
    setText('');
    props.showAlert("ALL Clear")
  };

  const handleCopy = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    props.showAlert("Copped")
  };

  const handleExtraSpace = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Extra Space Removed")
  };

  const handleCap = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1));
    props.showAlert("First Letter is Captial Now")
   
  };

  const handleCapAll = () => {
    setText(text.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '));
      props.showAlert("The firt letter of every word is captal")
  };
  const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="mt-[8vh]">
      <div className="text-3xl font-semibold m-3">
        <h1>Enter the Text to Analyze Below</h1>
      </div>

      <div>
        <textarea id='textar'
          className={`${props.mode ? "bg-[#242424] text-white":"bg-white"} text-black w-[70vw] border-4 border-blue-300 rounded-lg text-xl`}
          onChange={handleOnChange}
          ref={textAreaRef}
          value={text}
          rows={7}
        />
      </div>

      <div>
        <button className="bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white" onClick={handleUpClick}>Upper Case</button>
        <button className="bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white" onClick={handleLowClick}>Lower Case</button>
        <button className="bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white" onClick={handleClear}>Clear</button>
        <button className="bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white" onClick={handleCopy}>Copy Text</button>
        <button className="bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white" onClick={handleCap}>Capitalize First Letter</button>
        <button className="bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white" onClick={handleCapAll}>Capitalize All First Letters</button>
      </div>

      <div className="w-full m-5">
        <h1 className="text-4xl my-3 font-semibold">Your Text Summary</h1>
        <p className="text-xl my-2">{wordCount} Words and {text.length} Characters</p>
        <p className="text-xl">It's going to take {0.008 * text.split(" ").length} Minutes to Read</p>
        <h2 className="text-3xl my-2">Preview</h2>
        <p className="text-xl my-2">{text}</p>
      </div>
    </div>
  );
};

export default Textform;

