import React, { useState } from 'react';
import dropdown from "../assets/dropdown.svg";
import dropup from "../assets/dropup.svg";


const About = (props) => {


  const Dropdown = ({ text, content }) => {
  
    const [open, setOpen] = useState(false);
  
    const toggleDropdown = () => {
      setOpen(!open);
    };
  
    return (
      <div className={`w-full h-full flex flex-col items-center justify-between   rounded-md p-6 m-1 text-lg ${props.mode ? "bg-slate-700":"bg-slate-100"} shadow-2xl`} >
  
        <div   className='flex justify-between w-full  '>
          <span>{text}</span>
          <img onClick={toggleDropdown} className='size-7 mx-3 ' src={open ? dropup : dropdown} alt="dropdown icon" /></div>
  
  
        {open && <div className={`  m-3 shadow-2xl ${props.mode ? "bg-slate-600":"bg-slate-200"}  p-3  rounded-md `} >{content}</div>}
      </div>
    );
  };



  return (
    <>
      <div className={`${props.mode ?"bg-[#232323]":"bg-slate-100"} rounded-xl shadow-2xl roun p-5 w-[80vw] flex items-center justify-center my-10`} >
        <div className={`${props.mode ?"bg-[#282828]":"bg-slate-100"} shadow-2xl rounded-xl p-5 w-[75vw] flex flex-col`} >
          <Dropdown 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. facilis fugiat, hic laudantium corporis eum minus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore, debitis temporibus voluptatum quaerat optio rerum id omnis molestiae, obcaecati iste eum. Facere cumque tenetur, aliquid nemo architecto odio doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid magni nemo nihil doloremque eaque saepe, aut asperiores !"
          />
          <Dropdown
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque ipsam laboriosam aspernatur qui dolore officiis ullam"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore, debitis temporibus voluptatum quaerat optio rerum id omnis molestiae, obcaecati iste eum. Facere cumque tenetur, aliquid nemo architecto odio doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid magni nemo nihil doloremque eaque saepe, aut asperiores !"
          />
          <Dropdown
            text="Lorem ipsum dolor sit amet consectetur adipisicing elitventore totam assumenda mollitia laborum, earum, facere voluptates "
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore, debitis temporibus voluptatum quaerat optio rerum id omnis molestiae, obcaecati iste eum. Facere cumque tenetur, aliquid nemo architecto odio doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid magni nemo nihil doloremque eaque saepe, aut asperiores !"
          />
        </div>

      </div>


      {/* <button className='bg-slate-500 p-5 rounded-2xl text-white text-xl hover:p-6 duration-500'>enable dark</button> */}
    </>
  );
};

export default About;
