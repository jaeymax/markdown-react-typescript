import DocumentIcon from '../../assets/icon-document.svg';
import './DocumentItem.css';

const DocumentItem = () => {
  return (
    <div className='document' >
      <div className="document-icon-container">
        <img src={DocumentIcon} alt="" />
      </div>
      <div className="document-info">
        <p className='document-date' >01 April 2022</p>
        <p className='document-name' >untitled-document.md</p>
      </div>
    </div>
  )
}

export default DocumentItem
