import { useAppContext } from '../../context/AppProvider'
import './ConfirmDeleteModal.css'

const ConfirmDeleteModal = () => {
  
  const {updateModal, documentName,updateDocumentId, updateDocumentName, updateMarkdown, documents, updateDocuments} = useAppContext();

  const handleClick = () =>{
      updateModal(false);

      let newDocArray = [...documents]
      newDocArray = newDocArray.filter(doc=>doc.name !== documentName);
      updateDocuments(newDocArray);
      
      updateDocumentId(new Date().toUTCString());
      updateDocumentName('untitled.md');
      updateMarkdown('');
      localStorage.setItem('documents', JSON.stringify(newDocArray));
  }

  return (
  <div className='modal' >
      <h3>Delete this document?</h3>
      <p>
        {`Are you sure you want to delete the '${documentName}' document and its contents?
        This action  cannot be reversed.`}
      </p>
      <button onClick={handleClick} >
        Confirm & Delete
      </button>
  </div>
  )
}

export default ConfirmDeleteModal
