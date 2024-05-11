import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppProvider'
import Markdown from '../MarkDown/Markdown'
import Preview from '../Preview/Preview'
import './Main.css'

const Main = () => {
  const {showPreview} = useAppContext();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
      {isSmallScreen?(showPreview?<Preview />:<Markdown />):(<>
          {!showPreview && <Markdown/>}
          <Preview/>
      </>)}
    </div>
  )
}

export default Main
