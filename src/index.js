import hello from './hello';
import './styles/style.css';
import stang from './assets/stang.jpg';

const stangImg = document.getElementById('stangImg');
stangImg.src = stang;

console.log(hello());
