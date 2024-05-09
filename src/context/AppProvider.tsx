import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface AppContextType{
    theme:string;
    showPreview:boolean;
    showMenu:boolean;
    showModal:boolean;
    updateModal:(newValue:boolean)=>void;
    updateMenu:(newValue:boolean)=>void;
    updateTheme:(newValue: string)=>void;
    updatePreview:(newValue: boolean)=>void;
}

export const AppContext = createContext<AppContextType>({
    theme:'',
    showPreview:false,
    showMenu:false,
    showModal:false,
    updateModal:()=>{},
    updateMenu:()=>{},
    updateTheme:()=>{},
    updatePreview:()=>{},
    
});

interface AppContextProviderProps{
    children:ReactNode;
}

const AppProvider:React.FC<AppContextProviderProps> = ({children}) => {
  
  const [theme, setTheme] = useState('light');
  const [showPreview, setShowPreview] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateTheme = (newValue:string)=>{
     setTheme(newValue);
  }

  const updatePreview = (newValue:boolean)=>{
     setShowPreview(newValue);
  }

  const updateMenu = (newValue:boolean)=>{
    setShowMenu(newValue);
  }

  const updateModal = (newValue:boolean)=>{
    setShowModal(newValue);
  }

  return (
    <AppContext.Provider value={{theme, updateTheme,showModal, updateModal, showPreview, showMenu, updateMenu, updatePreview}} >
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}

export default AppProvider
