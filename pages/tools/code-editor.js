import { useState } from "react";
import Link from 'next/link'


const CodeEditor = () => {

    
  

const [mouse, setMouse] = useState({x: 0, y: 0, click: false})
const [code, editCode] = useState('')
const [css, editCss] = useState('')
const [autoSave, setAutoSave] = useState(0)
const [load, setLoad] = useState(false)
const refresh = () => {
    setTimeout(()=>{

        let c = `
        <html>
        <body>
        
${code}

        </body>
        </html>
       <style>

${css}
       </style>
        `

        document.getElementById('display').innerHTML = c
    
    
    }, 1000)
}






    return ( 



<div id="code-editor">

<div className="both">

<textarea value={code}

onChange={(e)=>{
    editCode(e.target.value)

  if(autoSave == 1){
refresh()
 
}
}} className="editor">

</textarea>

<textarea value={css}

onChange={(e)=>{
    editCss(e.target.value)

    if(autoSave == 1){
      
    refresh()
        
    }

}} className="editor">

</textarea>
</div>


<button id="resize" onMouseDown={(e)=>{
   let x = e.clientX
   let y = e.clientY
   
   setMouse({x: x, y: y, click: true})
}}

onMouseUp={(e)=>{
    let x = e.clientX
    let y = e.clientY
    
    setMouse({x: x, y: y, click: false})
 }}



></button>
<div  id="display">
    
</div>



<div id="status-bar">
<p>Code Editor 2.0</p>
<p>x: {mouse.x} y: {mouse.y}</p>
<p>Auto Save {autoSave == 1 && <span>ON</span>} {autoSave == 0 && <span>OFF</span>}</p>

<input type="range" min={0} max={1} onClick={()=>{
    if(autoSave == 0){
        setAutoSave(1)
    }else if(autoSave == 1){
        setAutoSave(0)
    }
}} value={autoSave}/>
<div className="buttons">
<button onClick={()=>{
    refresh()
    setLoad(true)
    setTimeout(()=>{setLoad(false)}, 2000)


}}>refresh  
{load == true && <img style={{height: '2vh', background: 'transparent'}} src="https://gifimage.net/wp-content/uploads/2017/09/animated-loading-gif-transparent-background-11.gif" />}
</button>
<Link href="../"><a><button>go home</button></a></Link>
<button>more</button>
</div>
</div>

        </div> );
}
 
export default CodeEditor;