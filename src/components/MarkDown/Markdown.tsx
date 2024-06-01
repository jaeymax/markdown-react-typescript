import EyeIcon from '../../assets/icon-show-preview.svg'
import EyeIconClosed from '../../assets/icon-hide-preview.svg'
import './Markdown.css';
import { useAppContext } from '../../context/AppProvider';
import { useEffect, useRef } from 'react';



const Markdown = () => {

  const {showPreview, updatePreview, markdown, updateMarkdown} = useAppContext();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(()=>{
      if(textAreaRef != null){
        textAreaRef.current?.focus();
      }
  }, [markdown]);

  return (
    <div className='mkdown' >
        <div className='heading' >
            <h6>MARKDOWN</h6>

            <div className="preview-icon-container" onClick={()=>updatePreview(!showPreview)} >
                <img src={showPreview?EyeIconClosed:EyeIcon} alt="" />
            </div>

        </div>
        <div className="mkdown-text-area">
            <textarea ref ={textAreaRef} spellCheck = {false} name="md-text-area" value={markdown} onChange={(e)=>updateMarkdown(e.target.value)} id="md-text-area"></textarea>
        </div>
    </div>
  )
}


export default Markdown
