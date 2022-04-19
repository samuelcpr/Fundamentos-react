import { useState } from "react";

// imutabilidade

// usuarios = ['diego', 'diegosof', 'danileao']

// usuario.push('rafacamarda')

// novoUsusario = [...Usuarios, 'tjJhoson']

export function Counter() {
  const [counter, setCounter] = useState(0);
  // setCounter(counter + 1) => criar um novo volume
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div className="containerButton">
      <h2 id="cont">{counter}</h2>
      <button type="button" onClick={increment} id="butão">
        Increment +1
      </button>
    </div>
  );
}
