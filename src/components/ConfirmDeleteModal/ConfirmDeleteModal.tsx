import { useAppContext } from '../../context/AppProvider'
import './ConfirmDeleteModal.css'

const ConfirmDeleteModal = () => {
  
  const {updateModal} = useAppContext();

  return (
  <div className='modal' >
      <h3>Delete this document?</h3>
      <p>
        Are you sure you want to delete the 'welcome.md' document and its contents?
        This action  cannot be reversed.
      </p>
      <button onClick={()=>updateModal(false)} >
        Confirm & Delete
      </button>
  </div>
  )
}

export default ConfirmDeleteModal
