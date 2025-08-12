

const Task = ({name}) => {
    const iconMap = {
        File_explorer:  <svg
    width="60"
  className='hover:cursor-pointer'
    viewBox="0 0 220 220"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff950" />
        <stop offset="100%" stopColor="#faca00" />
      </linearGradient>
      <linearGradient id="folderTab" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff730" />
        <stop offset="100%" stopColor="#e3a900" />
      </linearGradient>
      <linearGradient id="gloss" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feOffset dx="0" dy="3" />
        <feGaussianBlur stdDeviation="3" result="offset-blur" />
        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
        <feFlood floodColor="black" floodOpacity="0.15" result="color" />
        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
      <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Folder Tab */}
    <path
      d="M40 60 h50 l12 18 h68 a10 10 0 0 1 10 10 v8 h-150 v-26 a10 10 0 0 1 10 -10 z"
      fill="url(#folderTab)"
      stroke="#c69800"
      strokeWidth="1.5"
      filter="url(#softShadow)"
    />

    {/* Folder Body */}
    <rect
      x="30"
      y="85"
      rx="10"
      ry="10"
      width="160"
      height="100"
      fill="url(#folderFront)"
      stroke="#c69800"
      strokeWidth="1.5"
      filter="url(#softShadow)"
    />

    {/* Gloss Reflection */}
    <path
      d="M30 85 q80 -12 160 0 v12 q-80 -12 -160 0 z"
      fill="url(#gloss)"
    />

    {/* Inner Shadow */}
    <rect
      x="30"
      y="85"
      rx="10"
      ry="10"
      width="160"
      height="100"
      fill="none"
      filter="url(#innerShadow)"
    />

    {/* Fake Inner File Lines */}
    <rect x="50" y="115" width="120" height="9" rx="2" fill="#ffffff" opacity="0.5" />
    <rect x="50" y="132" width="90" height="7" rx="2" fill="#ffffff" opacity="0.3" />
    <rect x="50" y="146" width="65" height="5" rx="2" fill="#ffffff" opacity="0.2" />
  </svg>
,
         note:<svg xmlns="http://www.w3.org/2000/svg"  width="50"  className='hover:cursor-pointer'  viewBox="0 0 256 256"> 
         <defs> <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#ffffff"/> <stop offset="100%" stop-color="#eaeaea"/> </linearGradient> <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0"> <stop offset="0%" stop-color="#fff176"/> <stop offset="100%" stop-color="#fbc02d"/> </linearGradient> <linearGradient id="glossOverlay" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6"/> <stop offset="50%" stop-color="#ffffff" stop-opacity="0.1"/> <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/> </linearGradient> </defs> <path d="M64,16 h128 a48,48 0 0 1 48,48 v128 a48,48 0 0 1 -48,48 h-128 a48,48 0 0 1 -48,-48 v-128 a48,48 0 0 1 48,-48 z" fill="url(#bodyGrad)" /> <path d="M64,16 h128 a48,48 0 0 1 48,48 v24 h-224 v-24 a48,48 0 0 1 48,-48 z" fill="url(#headerGrad)" /> <path d="M64,16 h128 a48,48 0 0 1 48,48 v30 q-112,20 -224,0 v-30 a48,48 0 0 1 48,-48 z" fill="url(#glossOverlay)" /> <line x1="64" y1="112" x2="192" y2="112" stroke="#b4b4b4" stroke-width="3" stroke-linecap="round"/> <line x1="64" y1="144" x2="192" y2="144" stroke="#b4b4b4" stroke-width="3" stroke-linecap="round"/> <line x1="64" y1="176" x2="192" y2="176" stroke="#b4b4b4" stroke-width="3" stroke-linecap="round"/> <line x1="64" y1="208" x2="160" y2="208" stroke="#b4b4b4" stroke-width="3" stroke-linecap="round"/> </svg>





,
         rootai:<svg width="55"  viewBox="0 0 100 100" className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fontFamily="sans-serif">
    {/*
      Rootos AI SVG Icon (React/JSX Compatible) - V5 (Flat & Glossy)
      - This version removes the 3D drop shadow for a flat look, per user request.
      - The glossy effect has been significantly enhanced with a dedicated gradient for a more realistic sheen.
      - The AI spark is now flat, removing its 3D spherical appearance.
    */}
    <defs>
        {/* Main gradient for the 'R' shape */}
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4AB8E2" stopOpacity="1" />
            <stop offset="100%" stopColor="#50E3C2" stopOpacity="1" />
        </linearGradient>

        {/* Enhanced gradient for the glossy highlight */}
        <linearGradient id="glossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>

    </defs>

    {/* Background with rounded corners */}
    <rect width="100" height="100" rx="22" ry="22" fill="#1E1E1E"/>

    {/* Main 'R' group */}
    <g transform="translate(5, 0)">
        {/* The base 'R' shape */}
        <g stroke="url(#grad1)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M 25,20 V 80" />
            <path d="M 25,35 H 45 C 65,35 65,60 45,60 L 75,90" />
        </g>

        {/* Enhanced glossy highlight overlay applied to the top surfaces */}
        <g stroke="url(#glossGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
             <path d="M 25,20 V 50" />
             <path d="M 25,35 H 45 C 65,35 65,50 55,50" />
        </g>

        {/* Flat AI 'spark' placed inside the 'R' */}
        <circle cx="42" cy="48" r="6" fill="#50E3C2"/>
    </g>
</svg>,
browser:  <svg viewBox="0 0 100 100" width="60" className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect x="5" y="5" width="90" height="90" rx="20" fill="#0f172a" />

    {/* Browser window */}
    <rect x="25" y="30" width="50" height="40" rx="6" fill="#1e293b" stroke="#00000020" strokeWidth="1.2" />

    {/* Tab bar */}
    <rect x="25" y="30" width="50" height="8" fill="#0ea5e9" />

    {/* Control buttons */}
    <circle cx="30" cy="34" r="1.5" fill="#ef4444" />
    <circle cx="35" cy="34" r="1.5" fill="#facc15" />
    <circle cx="40" cy="34" r="1.5" fill="#22c55e" />

    {/* Globe icon */}
    <circle cx="50" cy="50" r="10" stroke="#38f28f" strokeWidth="1.2" fill="none" />
    <line x1="40" y1="50" x2="60" y2="50" stroke="#38f28f" strokeWidth="1" />
    <line x1="50" y1="40" x2="50" y2="60" stroke="#38f28f" strokeWidth="1" />
    <path d="M43 43 A10 10 0 0 1 57 43" stroke="#38f28f" strokeWidth="1" fill="none" />
    <path d="M43 57 A10 10 0 0 0 57 57" stroke="#38f28f" strokeWidth="1" fill="none" />
  </svg>,
  setting:
 
  <svg viewBox="0 0 100 100" width="60" className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect x="5" y="5" width="90" height="90" rx="20" fill="#1e1e1e" />

    {/* Outer gear ring */}
    <circle cx="50" cy="50" r="22" stroke="#cbd5e1" strokeWidth="6" fill="none" />

    {/* Inner gear teeth */}
    <g stroke="#cbd5e1" strokeWidth="3">
      <line x1="50" y1="25" x2="50" y2="15" />
      <line x1="50" y1="75" x2="50" y2="85" />
      <line x1="25" y1="50" x2="15" y2="50" />
      <line x1="75" y1="50" x2="85" y2="50" />

      <line x1="35" y1="35" x2="27" y2="27" />
      <line x1="65" y1="65" x2="73" y2="73" />
      <line x1="35" y1="65" x2="27" y2="73" />
      <line x1="65" y1="35" x2="73" y2="27" />
    </g>

    {/* Core ring */}
    <circle cx="50" cy="50" r="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
  </svg>

    }
  return (
 <div>
     <div>
      {
        iconMap[name]
      }
     </div>
 </div>
  )
}

export default Task