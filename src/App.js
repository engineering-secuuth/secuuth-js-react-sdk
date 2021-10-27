import React, { useEffect,useState} from 'react';
 function  App() {

// Initialize and show the form
  useEffect(() => {

  const w = window;
  const d = document;
  const l = () => {
  const s = d.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://cdn.jsdelivr.net/gh/engineering-secuuth/js-bundle/Secuuth.bundle.js';
  const x = d.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
  s.addEventListener('load', () => {
      // This loads the script
      const   secuuth =  new window.Secuuth({
        keyId: "92adaacd-d252-4757-9ac2-2d48d7ec37bb", 
        profileName: "Default",
        containerId: "secuuthForm", 
      onSubmit: (tokens) => {

        //Logic To send token to backend
       
  },
    });
    });
  };
  if (w.attachEvent) {
    w.attachEvent('onload', l);
  } else {
    w.addEventListener('load', l, false);
  } 
  
}, [])

  return (
    <div>
      {/* <div> that contains the form */}
      <div id="secuuthForm" />
     
    </div>
  )
}

export default App