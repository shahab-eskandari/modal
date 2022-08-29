import Modal from "./Modal"; 
import {useState} from "react";

function App() {

  const [isOpen, setIsOpen]= useState(false);
  
  function open(){
    setIsOpen(true); 
  }
  function close(){
    setIsOpen(false); 
  }

  return (
    <div>
      <button onClick={()=>open()}>Open Modal</button>
      <Modal open={isOpen} doClosing={close}>
        Content of Modal
      </Modal>
    </div>
  )
}

export default App
