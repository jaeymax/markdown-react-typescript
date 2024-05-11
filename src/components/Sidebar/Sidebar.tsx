import lightModeIcon from '../../assets/icon-light-mode.svg'
import darkModeIcon from '../../assets/icon-dark-mode.svg'
import MarkdownLogo from '../../assets/logo.svg'
import './Sidebar.css'
import DocumentItem from '../DocumentItem/DocumentItem'
import { useAppContext } from '../../context/AppProvider'


const Sidebar = () => {

  const {showMenu, theme,updateDocumentId,updateMenu,updatePreview, updateTheme, documents, updateMarkdown, updateDocumentName} = useAppContext();

  const handleClick = () =>{
        updateDocumentName('untitled-document.md');
        updateMarkdown('');
        updateDocumentId(new Date().toUTCString());
        updatePreview(false);
        updateMenu(false);

  }


  return (
    <div  className={`sidebar ${showMenu?'show':''}`} >
    <div className="sidebar-container">

        <div className="markdown-logo">
            <img src={MarkdownLogo} alt="" />
        </div>

        <h5>MY DOCUMENTS</h5>

        <button onClick={handleClick} >+ New Document</button>

        <div className="documents-list">
            {
                documents.map((doc,index)=><DocumentItem key={doc.id} id = {doc.id} createdAt = {doc.createdAt} content = {doc.content} name = {doc.name} />)
            }
        
         {/* <DocumentItem  key={1} createdAt='21 june 2021' content='# Wecome to markdown' name='untitled.md'/> */}
        </div>
        <div className="light-mode">
            <div className={`moon-icon-container  ${theme==='dark'?'active':''}`}>
                <img src={darkModeIcon} alt="" />
            </div>
            <div className="toggler-container" onClick={()=>{updateTheme(theme==='light'?'dark':'light')}} >
                <div className={`toggler ${theme}`}>

                </div>
            </div>
            <div className={`sun-icon-container ${theme==='light'?'active':''}`}>
                <img src={lightModeIcon} alt="" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidebar
