import { ReactNode } from 'react';
import ReactDom  from 'react-dom';
import "./style.css"

type ModalProps = {
    children: ReactNode
    open: boolean
    doClosing: ()=>void
}
export default function Modal({children, open, doClosing}:ModalProps) {
    if(!open) return null;
    return ReactDom.createPortal(
    <>  
        <div className='overlay' onClick={()=>doClosing()}/>
        <div className='modal'>
            <h2>Modal Content:</h2>
            <button
                className='modal__close-btn' 
                onClick={()=>doClosing()}>
                &times;
            </button>
            <div>{children}</div>
        </div>
    </>,
    document.getElementById('modal-portal')!
  )
}
