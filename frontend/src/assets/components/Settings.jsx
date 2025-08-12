import {Rnd }from "react-rnd"

import { GiTireIronCross } from "react-icons/gi";

import ThemeStore from "../ThemeStore.jsx"

const Settings = ({onClose}) => {
const {theme,setTheme} = ThemeStore();

  return (
    <div>
        <Rnd
  default={{
   x: (window.innerWidth - 800) / 2,
    y: -600,
    width: 320,
    height: 200,
  }}
    bounds="window"
            minWidth={1000}
            minHeight={600}
            dragHandleClassName="handle"
            className=' handle cursor-move'
>
<div className="flex h-full bg-transparent rounded-xl flex-col shadow-xl shadow-black">
  <div className="handle rounded-xl  ">
<div className="bg-slate-600 p-2 h-10 rounded-t-xl  gap-x-2 flex ">
 <div className="flex ml-auto">
   <div onClick={onClose} className="text-white font-extrabold hover:bg-orange-800 hover:cursor-pointer w-6  rounded-full flex justify-center items-center  ">
    <GiTireIronCross  className=" text-xs inline-block "/>
     </div>
     
 </div>
      
</div>
</div>
<div className={`${theme =='white'?'bg-gray-800':'bg-white'} rounded-b-xl h-full flex flex-col`}>
 <div></div>
</div>
</div>
</Rnd>
 
    </div>
  )
}

export default Settings