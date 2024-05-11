import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppContext } from './context/AppProvider';


function App() {

  const {theme, showModal, updateModal} = useAppContext();

  const handleClick = () =>{
     if(showModal)updateModal(false);
  }

  return (
    <div className={`App ${theme}` } onClick={handleClick} >
      {/* {showModal && <div className="overlay"></div>} */}
      <div className={`overlay ${showModal?'show':''}`}></div>
      <Sidebar/>
      <div className="container">
        <Header/>
        <Main/>
        </div>  
    </div>
  );
}

export default App;
