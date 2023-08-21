import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function PreviewDot({position}){

  const [show, setShow] = useState(false)

  function click(e){
    setShow((current) => !current);
  }

  return (
    <>
    <motion.div 
    onClick={click}
    style={{top: position.top + "px", left: position.left + "px"}}
    exit={{ background: "radial-gradient(circle at center, #FF4800 10%, transparent 70%)" }}
    animate={{ 
      background: "radial-gradient(circle at center, #FF4800 50%, transparent 90%)",
    }}
    initial={{ background: "radial-gradient(circle at center, #FF4800 10%, transparent 70%)" }}
    transition={{ ease: "linear", duration: 3, repeat: Infinity, repeatType: "reverse"}}
    className='preview-dot absolute'></motion.div>

    {show && <ShowInfo position={position}>Test</ShowInfo>}

    
    
    </>
  );
}

function ShowInfo({isShow, children, position}){
  return(
    <div style={{top: position.top - 50 + "px", left: position.left + 200 + "px"}} className={"preview-dot-info " }>
      {children}
    </div>
  );
}

export default PreviewDot;