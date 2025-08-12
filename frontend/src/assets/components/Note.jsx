import { GiTireIronCross } from "react-icons/gi";
import {Rnd }from "react-rnd"
const Note = ({onClose}) => {
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
    <div className={`bg-gray-800 rounded-b-xl h-full flex flex-col`}>
     <div className=" bg-emerald-500 hover:cursor-pointer ml-auto m-2  p-4 inset-shadow-sm inset-shadow-emerald-800 text-gray-900 rounded-xl tracking-wide font-semibold shadow-lg jet">Save</div>
   <textarea name="note" id="note" className="h-full outline-none px-4 py-2 text-white text-lg " placeholder="Write here"></textarea>
    </div>
    </div>
    </Rnd>
     
        </div>
  )
}

export default Note