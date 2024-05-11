import MarkdownPreview from '@uiw/react-markdown-preview'
import EyeIcon from '../../assets/icon-show-preview.svg'
import EyeIconClose from '../../assets/icon-hide-preview.svg';
import './Preview.css';
import { useAppContext } from '../../context/AppProvider';


const Preview = () => {

  const {showPreview, theme, updatePreview, markdown} = useAppContext();

  return (
    <div className='preview' >
      <div className='heading' >
        <h6>
        PREVIEW
        </h6>

        <div className="preview-icon-container" onClick={()=>updatePreview(!showPreview)} >
            <img src={showPreview?EyeIconClose:EyeIcon} alt="" />
        </div>

      </div>
      <div className="markdown-preview">
            <MarkdownPreview source={markdown} style={{padding:20, fontFamily:'Roboto Slab', background:''}} wrapperElement={{"data-color-mode":theme==='light'?'light':'dark'}}  />
      </div>

    </div>
  )
}

export default Preview
