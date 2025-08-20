import React, { useEffect } from 'react';
import TodoList from './TodoList'; // Importa el componente TodoList
import { getUsers } from './services/SERVICIOS';




function App() {
  useEffect (()=>{
    getUsers()
  },[])
  return (
    <div className="App">
      
      <TodoList />
    </div>
  );
}

export default App; // Exporta el componente App