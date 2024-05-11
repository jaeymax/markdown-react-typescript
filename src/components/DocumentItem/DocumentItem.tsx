import DocumentIcon from '../../assets/icon-document.svg';
import { useAppContext } from '../../context/AppProvider';
import './DocumentItem.css';

interface DocumentItemProps{
  id:string;
  createdAt:string;
  name:string;
  content:string;
}

const DocumentItem = (props:DocumentItemProps) => {
  
  const {updateDocumentName, updateMarkdown, updateDocumentId} = useAppContext();

  const handleClick = () =>{
    updateDocumentName(props.name);
    updateMarkdown(props.content);
    updateDocumentId(props.id);
  }

  return (
    <div className='document' >
      <div className="document-icon-container">
        <img src={DocumentIcon} alt="" />
      </div>
      <div className="document-info">
        <p className='sidebar-document-date' >{props.createdAt}</p>
        <p className='sidebar-document-name' onClick={()=>{handleClick()}} >{props.name}</p>
      </div>
    </div>
  )
}

export default DocumentItem
