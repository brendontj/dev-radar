import React, { useEffect, useState } from 'react';

import api from './services/api';
import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';
import './services/api';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';



//Componente {
// Bloco isolado de conteudo html, css ou javascript, que nao interfere no restante da aplicação
//}

//Propriedade
// Informações que o componente pai passa para o componente filho Ex: strings, funções, variaveis, etc
//Estado
// Informações mantiradas pelo componente ( Lembrar: imutabilidade)





function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
      async function loadDevs() {
        const response = await api.get('/devs');
        setDevs(response.data);
      }
      loadDevs();
  }, []);

  async function handleAddDev(data) {
    
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }
  

  return (
    <div id ="app">
    <aside>
      <strong>Cadastrar</strong>
      <DevForm Submit={handleAddDev} />
    </aside>

    <main>
      <ul>
        {devs.map(dev => (
          <DevItem key= {dev._id} dev={dev} />
        ))}     
      </ul>
    </main>
    </div>
  
  );
}

export default App;
