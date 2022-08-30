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
    <div className="home__container">
      <div className="home__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio ipsum? Enim, qui reprehenderit, excepturi minima iusto voluptatem voluptas possimus, labore recusandae eaque porro quidem? A eius quasi ea debitis.
      </div>
      <div className="home__modal-btn-wrapper">
        <button 
          style={{fontSize: '20px', padding: '10px'}}
          onClick={()=>open()}>
            Open Modal
        </button>
        <Modal open={isOpen} doClosing={close}>
          Content of Modal
        </Modal>
      </div>
      <div className="home__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio ipsum? Enim, qui reprehenderit, excepturi minima iusto voluptatem voluptas possimus, labore recusandae eaque porro quidem? A eius quasi ea debitis.
      </div>
      <div className="home__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio ipsum? Enim, qui reprehenderit, excepturi minima iusto voluptatem voluptas possimus, labore recusandae eaque porro quidem? A eius quasi ea debitis.
      </div>
      <div className="home__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio ipsum? Enim, qui reprehenderit, excepturi minima iusto voluptatem voluptas possimus, labore recusandae eaque porro quidem? A eius quasi ea debitis.
      </div>
    </div>
  )
}

export default App
