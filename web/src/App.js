import React, { useEffect, useState } from 'react';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';
//Componente {
// Bloco isolado de conteudo html, css ou javascript, que nao interfere no restante da aplicação
//}

//Propriedade
// Informações que o componente pai passa para o componente filho Ex: strings, funções, variaveis, etc
//Estado
// Informações mantiradas pelo componente ( Lembrar: imutabilidade)





function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }
  

  return (
    <div id ="app">
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input 
            name="github_username" 
            id="github_username" 
            required 
            value={github_username}
            onChange = {e => setGithubUsername(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
            name="techs" 
            id="techs"
            value={techs}
            onChange = {e => setTechs(e.target.value)} 
            required 
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              name="latitude"              
              id="latitude"
              required 
              value={latitude} 
              onChange={e =>setLatitude(e.target.value)}
              />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude} 
            onChange={e =>setLongitude(e.target.value)}/>
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>

    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/52867818?s=400&u=8107f5d7317e551292fd77586cebe651c2275461&v=4" alt="Avatar dev"/>
            <div className = "user-info">
              <strong> Brendon Henrique </strong>
              <span> Node.js, C++, Python </span>
            </div>
          </header>
          <p>Graduando em Ciência da Computação pela Universidade Federal do Paraná (UFPR).</p>
          <a href="https://github.com/brendonhps"> Acessar perfil no GitHub</a>
        </li><li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/52867818?s=400&u=8107f5d7317e551292fd77586cebe651c2275461&v=4" alt="Avatar dev"/>
            <div className = "user-info">
              <strong> Brendon Henrique </strong>
              <span> Node.js, C++, Python </span>
            </div>
          </header>
          <p>Graduando em Ciência da Computação pela Universidade Federal do Paraná (UFPR).</p>
          <a href="https://github.com/brendonhps"> Acessar perfil no GitHub</a>
        </li><li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/52867818?s=400&u=8107f5d7317e551292fd77586cebe651c2275461&v=4" alt="Avatar dev"/>
            <div className = "user-info">
              <strong> Brendon Henrique </strong>
              <span> Node.js, C++, Python </span>
            </div>
          </header>
          <p>Graduando em Ciência da Computação pela Universidade Federal do Paraná (UFPR).</p>
          <a href="https://github.com/brendonhps"> Acessar perfil no GitHub</a>
        </li><li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/52867818?s=400&u=8107f5d7317e551292fd77586cebe651c2275461&v=4" alt="Avatar dev"/>
            <div className = "user-info">
              <strong> Brendon Henrique </strong>
              <span> Node.js, C++, Python </span>
            </div>
          </header>
          <p>Graduando em Ciência da Computação pela Universidade Federal do Paraná (UFPR).</p>
          <a href="https://github.com/brendonhps"> Acessar perfil no GitHub</a>
        </li><li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/52867818?s=400&u=8107f5d7317e551292fd77586cebe651c2275461&v=4" alt="Avatar dev"/>
            <div className = "user-info">
              <strong> Brendon Henrique </strong>
              <span> Node.js, C++, Python </span>
            </div>
          </header>
          <p>Graduando em Ciência da Computação pela Universidade Federal do Paraná (UFPR).</p>
          <a href="https://github.com/brendonhps"> Acessar perfil no GitHub</a>
        </li>
      </ul>


    </main>

    </div>
  
  );
}

export default App;
