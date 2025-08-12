import {create} from 'zustand'

  const ThemeStore = create((set)=>({
    theme:'dark',
    setTheme:(newTheme)=>set({theme:newTheme})
}

))
export default ThemeStore