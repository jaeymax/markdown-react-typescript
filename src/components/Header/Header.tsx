import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal"
import IconMenu from '../../assets/icon-menu.svg';
import MarkdownLogo from '../../assets/logo.svg';
import IconDocument from '../../assets/icon-document.svg'
import DeleteIcon from '../../assets/icon-delete.svg';
import IconSave from '../../assets/icon-save.svg';
import CloseButton from '../../assets/icon-close.svg';
import './Header.css';
import { useAppContext } from "../../context/AppProvider";


const Header = () => {

  const {showMenu, updateMenu,documentId, showModal,updateDocuments, updateModal,documents, documentName, updateDocumentName, markdown} = useAppContext();

  const handleSave = () =>{
      
    let newDocArray = [...documents];

    //Check if document with same name already exists
    if(documents.find(doc=>doc.name === documentName)){
        
        newDocArray = newDocArray.filter(doc=>doc.name !== documentName);

        const newDocument = {
            id:documentId,
            name:documentName,
            content:markdown,
            createdAt:new Date().toDateString()
        }
      
        newDocArray.push(newDocument);
    }
    else{


        //Check if a document with same id already exists
        if(documents.find(doc=>doc.id === documentId)){
            //In this case it is an update
            const newDocument = {
                id:documentId,
                name:documentName,
                content:markdown,
                createdAt:new Date().toDateString()
            }

            newDocArray = newDocArray.filter(doc=>doc.id !== documentId); //remove the old document
            newDocArray.push(newDocument); //update it with the existing one
        }
        else{
            //In this case it is a create operation
            const newDocument = {
                id:documentId,
                name:documentName,
                content:markdown,
                createdAt:new Date().toDateString()
            }

            newDocArray.push(newDocument);
        }


        //updateDocumentId(new Date().toUTCString());
    }



    localStorage.setItem('documents', JSON.stringify(newDocArray));
    updateDocuments(newDocArray);
    
  }

  return (
    <div className='header' >
        {showModal && <ConfirmDeleteModal/>}
        <div className="icon-menu-container" onClick={()=>updateMenu(!showMenu)} >
            <img src={showMenu?CloseButton:IconMenu} alt="" />
        </div>
        <div className="markdown-logo-container">
            <img src={MarkdownLogo} alt="" />
        </div>
        <div className='header-right' >
            <div className="document-details">
                <div className="document-icon-container">
                    <img src={IconDocument} alt="" />
                </div>
                <div>
                    <p className='document-name'>Document Name</p>
                    {/* <p className='doc-name' >welcome.md</p> */}
                   <input type="text" className="doc-name" value={documentName} onChange={(e)=>updateDocumentName(e.target.value)} />
                </div>
            </div>
            <div className="save">
                <div className='delete-icon-container' onClick={()=>updateModal(true)} >
                    
                    <img  className='hoverable' src={DeleteIcon} alt="" />
                </div>
                <button onClick={()=>{handleSave()}} >
                    <div className='save-icon-container' >
                        <img src={IconSave} alt="" />
                    </div>
                    <p>
                    Save Changes
                    </p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
