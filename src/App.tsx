import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppContext } from './context/AppProvider';


function App() {

  const {theme, showModal} = useAppContext();

  return (
    <div className={`App ${theme}`}>
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
