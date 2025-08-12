import Wallpaper from '/static/shinchan.png'
import rootOS from '/static/rootOS-bg.png'
import '../../index.css'
import { useState } from 'react'
import Task from "./Task.jsx"
import Settings from './Settings.jsx'
import Note from "./Note.jsx"


const Start = () => {
  let [setting,setSetting] = useState(false);
  let [note,setNote] = useState(false)
  let rendernew = ()=>{
    setSetting(true)
  }
  let renderNote = ()=>{
    
    console.log('clicked')
    setNote(true)
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden">
   
        <img src={Wallpaper} className='object-cover w-full h-full absolute top-0 left-0 overflow-visible -z-10' alt="" />
 
    <div className='absolute top-4 ml-2 inline-block rounded-full backdrop-blur-3xl bg-black/20 left-4'>
        <img src={rootOS} className='w-14 slowspin' alt="" />
    </div>
    <div className='absolute top-24 p-4 left-4 flex flex-col gap-y-14 items-center bg-black/30 rounded-xl backdrop-blur-xl w-18 h-[88%]'>
<Task name={"File_explorer"}/>
<div onClick={renderNote}>
  <Task  name={"note"}/>
</div>

<Task name={"browser"}/>
<Task name={"rootai"}/>
<div onClick={rendernew}>
<Task  name={"setting"} /></div>
{
  setting && <Settings onClose={()=>{setSetting(false)}} />
}
{
  note && <Note onClose={()=>{setNote(false)}}/>
}
    </div>
    </div>
   
  )
}

export default Start