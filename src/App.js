// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img src="../img/ravem.webp" alt="Ravem" className="img" />
      <form>
        <fildeset>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          
          <select>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option selected value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>

          <input type="submit" value="Enviar" />
        </fildeset>
      </form>


    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       hola
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
