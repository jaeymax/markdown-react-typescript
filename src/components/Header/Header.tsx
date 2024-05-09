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

  const {showMenu, updateMenu, showModal, updateModal} = useAppContext();

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
                    <input type="text" className="doc-name" />
                </div>
            </div>
            <div className="save">
                <div className='delete-icon-container' onClick={()=>updateModal(true)} >
                    
                    <img  className='hoverable' src={DeleteIcon} alt="" />
                </div>
                <button>
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
