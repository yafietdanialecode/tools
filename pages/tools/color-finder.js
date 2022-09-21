import { useState } from "react";


function select(txt){

    let s = txt.split(',')
    return s
}


const ColorFinder = () => {

const [type, setType] = useState('h1')
const [text, setText] = useState('')
const [color, setColor] = useState('')
const [bg, setBg] = useState('')


    return ( 
        <div>


<div id="color-picker">

<h1>color picker</h1>

    <select value={type} onChange={(e)=>{setType(e.target.value)}}>
    <option value="h1">Title</option>
    <option value="p">Paragraph</option>
    <option value="button">Button</option>
    <option value="img">Image</option>
    <option value="div">Box</option>
    <option value="input">Input</option>
    <option value="textarea">Message box</option>
    <option value="img">Image</option>
    <option value="select">Select</option>
    </select>
    <input value={text} onChange={(e)=>{
        setText(e.target.value)
    }} type="text" placeholder="value"  />
    
    <span> {color} </span>
    <input type="color" value={color} onChange={(e)=>{setColor(e.target.value)}} placeholder="color" />
    <button onClick={()=>{setColor('transparent')}}>T</button>
    <span> {bg} </span>
    <input type="color" value={bg} onChange={(e)=>{
        setBg(e.target.value)
    }} placeholder="background" />
    <button onClick={()=>{setBg('transparent')}}>T</button>
   
    <input type="color" placeholder="border" />


    <button onClick={()=> {
        setText('')
        setType('h1')
    }}>clear all</button>

<div id="display">

  
{type == 'h1' && <h1 style={{color: color, background: bg}}>{text}</h1>}
  {type == 'p' && <p style={{color: color, background: bg}}>{text}</p>}
  {type == 'button' && <button  style={{color: color, background: bg}}>{text}</button>}
  {type == 'img' && <img  style={{color: color, background: bg}} src={text}/>}
  {type == 'input' && <input  style={{color: color, background: bg}} value={text} />}
  {type == 'textarea' && <textarea  style={{color: color, background: bg}} value={text}></textarea>}
  {type == 'div' && <div  style={{color: color, background: bg}}>{text}</div>}
  {type == 'select' && <select  style={{color: color, background: bg}}>
    {select(text).map(each => {
        return <option>{each}</option>
    })}
    </select>}


</div>




</div>





        </div>
     );
}
 
export default ColorFinder;