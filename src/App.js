import React from "react";
import logo from './background.jpeg';

import "./index.css";

export default function App() {
  const initialDelay = 50;
  const limit = 30;

  const [name, setName] = React.useState(null);
  const [count, setCount] = React.useState(limit);
  const [names, setNames] = React.useState([]);
  const [delay, setDelay] = React.useState(initialDelay);

  const randomizeName = () => {
    let index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  };
  const clear = () => {
    setName([]);
  };
  
  // eslint-disable-next-line
  const shouldRandomizeName = () => {
    if (count < limit) {
      randomizeName();
      setCount(count + 1);
      switch (count) {
        case limit * 0.5:
          setDelay(delay * 2);
          break;
        case limit * 0.7:
          setDelay(delay * 1.5);
          break;
        case limit * 0.8:
          setDelay(delay * 1.2);
          break;
        default:
          break;
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      shouldRandomizeName();
    }, delay);
  }, [count, delay, shouldRandomizeName]);

  const startRandomize = () => {
    buildNewNames()
    setDelay(initialDelay);
    setCount(0);
  };

  const buildNewNames = () => {
    var newNames = "DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,DanielTay,Kyatram,Kyatram,Kyatram,Kyatram,Kyatram,Kyatram,Kyatram,Kyatram,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,_ricardo_mendes,paodealho_,paodealho_,paodealho_,paodealho_,paodealho_,paodealho_,paodealho_,paodealho_,paodealho_,vitorof3,vitorof3,vitorof3,vitorof3,vitorof3,vitorof3,vitorof3"
    newNames = newNames
      .replace(/(.+)\n/g, "$1,")
      .split(",")
      .filter(item => !!item);

    setNames(newNames);
  };

  return (
    <div
      className={`text-center hero-image d-flex flex-column align-items-center justify-content-center text-white`}
      style={{ height: "100vh", backgroundImage: `url(${logo})` }}
    >
      <div>
        <h1 className={`display-1`}>{name}</h1>
      </div>
      <div className="container-fluid">
        <div className="text-center mt-2">
          <button  className="btn btn-secondary" onClick={startRandomize}>
            Sortear
          </button>
        </div>
        <div className="text-center mt-2">
          <button  className="btn btn-secondary" onClick={clear}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}
