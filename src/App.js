
import './App.css';
import fireflies  from './assets/images/fireflies.webp'
import whisper from './assets/images/whisper.jpg'
import ponyo from './assets/images/Ponyo.webp'
import kiki from './assets/images/kiki.jpg'
import castle from './assets/images/Castle.webp'
import kaguya from './assets/images/kaguya.jpg'
import only from './assets/images/onlyyesterday.webp'
import totoro from './assets/images/totoro.jpg'
import Image from './Image'

function App() {
  let data = {
    // img1 : fireflies,
    // img2 : whisper
    image:[fireflies,whisper,ponyo,kiki,castle,kaguya,only,totoro]
  }
  return (
    <div>
    <h1>Studio Ghibli Album</h1>

    <Image mydata = {data}/>
    </div>
  );
}

export default App;
