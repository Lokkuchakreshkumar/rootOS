
import rootOs from '/static/rootOS.png'
import '../../index.css'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
const Booting = () => {
    let navigate = useNavigate()
    const audio = new Audio('/static/Static Echo Pulse (mp3cut.net).mp3');
    audio.play();
    setTimeout(() => {
      navigate('/lock');
    }, 10000);
    
  return (
   
    <div className='text-white bg-black min-h-screen flex flex-col justify-center items-center'>
      <audio src={audio} autoPlay></audio>
        <img className='w-[10%] mb-4 h-[5%] slowspin ' src={rootOs} alt="" /><span className='mt-16 text-4xl space text-white'>root OS</span>
       <TypeAnimation
        sequence={[
          'Initializing Root Kernel...', 1000,
          'Loading AI modules...', 1000,
          'Injecting RootAI personality...', 1000,
          'Calibrating cognitive functions...', 1000,
          'Decrypting user memory vault...', 1000,
          'Establishing secure uplink...', 1000,
        ]}
        wrapper="span"
        speed={50}
       className='text-green-500'
        repeat={0} 
        cursor={true}
      />
    
    </div>
   
  )
  
}

export default Booting