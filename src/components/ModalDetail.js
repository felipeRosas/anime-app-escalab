import React from "react";
import { createPortal } from "react-dom";

const ModalDetail = (props) =>{
  console.log(props)
  return (
    props.isOpen
    ? createPortal(
      <div>{props.children}</div>
    ,
        document.getElementById("modalDetalle")
      )
    : ""
  )
}


export default ModalDetail;