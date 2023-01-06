import './App.css';
import Draggable from 'react-draggable';


// import Body from "./components/body/index";

function App() {

  
  return (
    <div>
      {/* <Body /> */}

      <Draggable>
        <div className='box'>
          <div>Move me around!</div>
        </div>
      </Draggable>

      <Draggable grid={[50, 50]}>
          <div className="box">I snap to a 50 x 50 grid</div>
      </Draggable>
      
    </div>
  );
}

export default App;
