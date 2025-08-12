
import { useEffect,useState, } from "react"

import lock from "/static/anime.jpg"
import '../../index.css'
import { FaLock } from "react-icons/fa";
import rootOS from '/static/rootOS-bg.png'
import { useNavigate } from "react-router-dom"
import Snow from "./Snow.jsx"
const Lock = () => {
  let [input,setInput] = useState('');
    let navigate = useNavigate();
 const  [currentTime,setCurrentTime] = useState(new Date())
  useEffect(()=>{
      let getDate = ()=> { 
          const interval = setInterval(()=>{
            setCurrentTime(new Date());
          },1000);
        let handleNavigate = () =>{
              if(!document.fullscreenElement){
            navigate('/');
          }
        }
window.addEventListener('fullscreenchange',handleNavigate);
return ()=>{
    window.removeEventListener('fullscreenchange',handleNavigate);
    clearInterval(interval)
}
    } 
    getDate();

  },[]);
  const handleChange = (e)=>{
setInput(e.target.value);

  }
  const handleSubmit = (e)=>{
  
    e.preventDefault();
    console.log(input)
    navigate('/start')
  }
       const formatDate = (date) =>{
           const day = date.toLocaleDateString('en-US',{weekday:"long"});
           const month = date.toLocaleDateString('en-US',{month:"long"});
           const todayDate = date.getDate();
           const [time,period] = date.toLocaleTimeString('en-US',{
            hour:'2-digit',
            minute:'2-digit',
            hour12:true
           }).split(" ")
           return {
            day:day,
            month:month,
            dateNum:todayDate,
            time:time,
            period:period

           }
          }
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <Snow/>

      <div className="relative overflow-hidden">
          <img src={lock} alt=""className=" w-full h-full object-cover fixed top-0 left-0 -z-10" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="fixed top-4 left-4">
          <img src={rootOS} className="w-[18%]" alt="" />
        </div>
      <div className="flex flex-col items-center fixed  top-2 ">
          <div className="w-full flex justify-center fixed">
<div className=" text-3xl bg-gradient-to-r from-black/95 to-black/50 p-2  font-bold  drop-shadow-white jet bg-clip-text text-transparent drop-shadow-lg ">{formatDate(currentTime).day},{formatDate(currentTime).month}&nbsp;{formatDate(currentTime).dateNum}</div> 
        </div>
       <div className="flex justify-center mt-4 items-center">
         <div className=" text-7xl font-extrabold text-slate-800 drop-shadow-lg mt-8 space tracking-widest">{formatDate(currentTime).time}</div>
          <div className=" text-5xl font-extrabold text-slate-800 drop-shadow-lg mt-8 space">&nbsp;{formatDate(currentTime).period}</div>
       </div>
      </div>
      <form action="" onSubmit={handleSubmit} className="w-full flex justify-center items-center fixed bottom-48 ">
       <div className=" w-[60%] flex items-center justify-center "> 
        <div className="w-full flex items-center justify-center bg-black/30 backdrop-blur-lg rounded-3xl p-2 border">
<FaLock className="inline-block mx-4  text-black text-xl"/>
 <input type="password" onChange={handleChange} id="lock" placeholder="Enter password" className="bg-transparent text-center w-[80%] outline-none  rounded-xl  placeholder:text-white/40 p-4 text-white placeholder:text-center" />
 <div onClick={handleSubmit} className=" bg-emerald-500 hover:cursor-pointer  p-4 inset-shadow-sm inset-shadow-emerald-800 text-gray-900 rounded-xl tracking-wide font-semibold shadow-lg jet">Root in</div>
        </div>
       
        </div>
      </form> 
      </div>
    </div>
  )
}

export default Lock