import { ReactNode } from 'react';
import "./style.css"

type ModalProps = {
    children: ReactNode
    open: boolean
    doClosing: ()=>void
}
export default function Modal({children, open, doClosing}:ModalProps) {
    if(!open) return null;
    return (
    <>  
        <div className='overlay'/>
        <div className='modal'>
            <div>This is the Modal and here is the content:</div>
            <div>{children}</div>
            <button onClick={()=>doClosing()}>&times;</button>
        </div>
    </>
  )
}
