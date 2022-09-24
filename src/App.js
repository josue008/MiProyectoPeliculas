import './App.css';
import Barra from './components/Barra';
import Footer from './components/Footer';
import Pelicula from './components/Pelicula';
import peliculas from './components/peliculas.json';

function App() {
  return (
  <body>
    <Barra></Barra>
  
      {peliculas.map(peli =>
        <Pelicula
          img={peli.img}
          titulo={peli.titulo}
          reparto={peli.reparto}
          duracion={peli.duracion}
          etiquetas={peli.etiquetas}
          descripcion={peli.descripcion}
          op1={peli.op1}
          op2={peli.op2}
          op3={peli.op3}
        ></Pelicula>)}
    <Footer></Footer>
  </body>
  );
}

export default App;
