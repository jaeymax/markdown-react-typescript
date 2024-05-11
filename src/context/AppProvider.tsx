import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


interface Document{
    id:string;
    createdAt:string;
    name:string;
    content:string;
}

interface AppContextType{
    theme:string;
    showPreview:boolean;
    showMenu:boolean;
    showModal:boolean;
    documents:Document[];
    documentName:string;
    markdown:string;
    documentId:string;
    updateDocumentId:(newValue:string)=>void;
    updateDocuments:(newValue:Document[])=>void;
    updateDocumentName:(newValue:string)=>void;
    updateMarkdown:(newValue:string)=>void;
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
    documents:[],
    documentName:'',
    markdown:'',
    documentId:'',
    updateDocumentId:()=>{},
    updateDocuments:()=>{},
    updateDocumentName:()=>{},
    updateMarkdown:()=>{},
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
  const [documentId, setDocumentId] = useState(new Date().toUTCString());
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentName, setDocumentName] = useState('untitled-document.md');
  const [markdown, setMarkdown] = useState('');

  useEffect(()=>{
      let data = localStorage.getItem('documents');
    
      if(data){
         //console.log(JSON.parse(data));
         setDocuments(JSON.parse(data));
      }
  },[])

  const updateDocumentId = (newValue:string) =>{
      setDocumentId(newValue);
  }

  const updateDocuments = (newValue:Document[]) =>{
     setDocuments(newValue);
  }

  const updateDocumentName = (newValue:string)=>{
    setDocumentName(newValue);
  }

  const updateMarkdown = (newValue:string)=>{
    setMarkdown(newValue);
  }

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
    <AppContext.Provider value={{theme,documentId,updateDocumentId, documents,documentName,markdown,updateDocumentName,updateDocuments, updateMarkdown, updateTheme,showModal, updateModal, showPreview, showMenu, updateMenu, updatePreview}} >
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}

export default AppProvider
