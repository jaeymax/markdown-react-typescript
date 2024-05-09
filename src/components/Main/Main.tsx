import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppProvider'
import Markdown from '../MarkDown/Markdown'
import Preview from '../Preview/Preview'
import './Main.css'

const Main = () => {
  const {showPreview} = useAppContext();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [markdownText, setMarkdownText] = useState('');

  useEffect(()=>{
        const handleResize = () =>{
          setIsSmallScreen(window.innerWidth < 375);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return ()=>window.removeEventListener('resize', handleResize);
  },[])

  return (
    <div className='main' >
      {isSmallScreen?(showPreview?<Preview markdownText = {markdownText} />:<Markdown markdownText = {markdownText} setMarkdownText={setMarkdownText} />):(<>
          {!showPreview && <Markdown markdownText = {markdownText} setMarkdownText = {setMarkdownText} />}
          <Preview markdownText = {markdownText }/>
      </>)}
    </div>
  )
}

export default Main
