// import React from "react";
import { useRef, useState } from "react";
import Modal from "react-modal";


function App() {

  const [showModal, setShowModal] = useState(false);
  const removeFunc = useRef(null);

  const [model, setModel] = useState(['text1', 'rext2'])

  return (
    <div>
      {
        model.map(
          (item, index) => <div onClick={() => {
            setShowModal(true);

            removeFunc.current = () => {
              const newModel = ([...model])
              newModel.splice(index, 1)
              setModel(newModel);
            }
          }}
      key={item}>
      {item}</div>
       )
      }
      

<Modal
  ariaHideApp={false}
  isOpen={showModal}
  onRequestClose={() => setShowModal(false)}
> 
  Do you wanna delete this text?
  
  <button onClick={() => { 
    if (removeFunc.current) {
      removeFunc.current();
      setShowModal(false);
    }

  }}> Ok </button>
  <button onClick={() => setShowModal(false)}> Cancel </button>
</Modal>

</div>
    
  );
}

export default App;
