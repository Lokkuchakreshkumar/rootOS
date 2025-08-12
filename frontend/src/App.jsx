import { useEffect, useState } from 'react'
import rootOs from "../static/rootOS.png"
import './index.css'
import Booting from "./assets/components/Booting.jsx"

function App() {
  let [full,setFull] = useState(false)
 let gofull = ()=>{
   document.documentElement.requestFullscreen()
  setFull(true)
 }


 useEffect(()=>{
let handleScreen = ()=>{
   if(!document.fullscreenElement){
    console.log('out of full screen')
  setFull(false)
  
 }else{
   console.log('in full screen')
  setFull(true)
 }

}

handleScreen();
window.addEventListener('fullscreenchange',handleScreen);
return ()=>{
  window.removeEventListener('fullscreenchange',handleScreen)
}
 
 },[])

  return (
<div className='jet'>
  {
    !full &&  <div  onClick={gofull}  className='bg-black min-h-screen cursor-pointer flex flex-col justify-center items-center '> 
<img className='w-[10%] h-[5%] ' src={rootOs} alt="" /><span className='mt-8 text-4xl space text-white'>root OS</span>
<div className='text-white/50 mt-8 animate-pulse'>click anywhere to enter into rootOS</div>

 </div>
  }
  {
  full && <Booting/>

}
</div>


  )
}

export default App
