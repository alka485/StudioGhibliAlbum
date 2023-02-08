
import './App.css';
import fireflies  from './assets/images/fireflies.webp'
import whisper from './assets/images/whisper.jpg'
import Image from './Image'

function App() {
  let data = {
    // img1 : fireflies,
    // img2 : whisper
    image:[fireflies,whisper]
  }
  return (
    <div>
    <h1>Studio Ghibli Album</h1>

    <Image mydata = {data}/>
    </div>
  );
}

export default App;
